/**
 * The structure of the JSON data returned from dumping a justfile.
 *
 * This is not exhaustive; only the properties that this spec needs to care
 * about are typed. There's a lot of properties where it's difficult to tell
 * exactly how it'll be serialized without having too many unnecessary test
 * cases.
 */
type Justfile = {
  aliases: Record<string, Alias>;
  assignments: Record<string, Binding>;
  recipes: Record<string, Recipe>;
};

type Alias = {
  name: string;
  target: string;
};

type Recipe = {
  name: string;
  doc: string | null;
  body: unknown[];
  dependencies: Dependency[];
  parameters: Parameter[];
  priors: number;
  private: boolean;
  quiet: boolean;
  shebang: boolean;
};

type Dependency = {
  arguments: unknown[];
  recipe: string;
};

type Parameter = {
  default: unknown;
  export: boolean;
  kind: ParameterKind;
  name: string;
};

type ParameterKind = "singular" | "plus" | "star";

type Binding = {
  name: string;
  export: boolean;
  value: unknown;
};

/**
 * Get the path of the justfile from an array of tokens.
 *
 * If no overriding flag is provided, the default file name is is "justfile".
 * Flags can be provided in this format:
 * - `-f name`
 * - `-f=name`
 * - `--justfile name`
 * - `--justfile=name`
 */
function getJustfilePath(tokens: string[]): string | null {
  // Only need to check if the token starts with this string
  const flagRe = /^(?:-f|--justfile)\b/;
  for (const [index, token] of tokens.entries()) {
    if (!flagRe.test(token)) {
      continue;
    }
    // If there's an equals in the flag, everything after it is the justfile.
    // Otherwise, the next token is the justfile.
    const equals = token.indexOf("=");
    if (equals !== -1) {
      return token.slice(equals + 1);
    }
    return tokens[index + 1];
  }
  return null;
}

/**
 * Get the command to dump the justfile at the given path, or let `just` handle
 * searching for the file if the path is null.
 */
function getJustfileDumpCommand(justfilePath: string | null): string {
  return justfilePath
    ? `just --unstable --dump --dump-format json --justfile '${justfilePath}'`
    : `just --unstable --dump --dump-format json`;
}

/**
 * Get a `Fig.Suggestion[]` containing a suggestion for each recipe and alias.
 *
 * If the optional `showRecipeParameters` prop is `true`, the recipe display
 * names will include additional text describing the recipe's parameters, in
 * the same style as Fig's autocomplete. (eg. `name <arg>` instead of `name`)
 */
function getRecipeSuggestions(
  justfile: Justfile,
  { showRecipeParameters = false } = {}
): Fig.Suggestion[] {
  const suggestions: Fig.Suggestion[] = [];

  for (const [name, recipe] of Object.entries(justfile.recipes)) {
    if (recipe.private) {
      continue;
    }

    suggestions.push({
      name,
      displayName: showRecipeParameters ? getRecipeUsage(recipe) : name,
      description: recipe.doc ?? "Recipe",
      icon: "fig://icon?type=command",
    });
  }

  // Now the aliases. Like the git aliases, these don't list their usage.
  // Also like with the git spec, these use the commandkey icon.
  for (const [name, alias] of Object.entries(justfile.aliases)) {
    suggestions.push({
      name,
      description: `Alias for '${alias.target}'`,
      icon: "fig://icon?type=commandkey",
    });
  }

  return suggestions;
}

/**
 * Get a string that is the usage of a recipe, in the same style as Fig's
 * options and arguments.
 *
 * For example, `test <FILTER>`, , `echo [ARGS...]`
 */
function getRecipeUsage(recipe: Recipe) {
  const parts = [recipe.name];
  for (const parameter of recipe.parameters) {
    // Fig sanitizes things like "<NAME>", so this has to be encoded
    if (parameter.kind === "singular") {
      parts.push(`&lt;${parameter.name}&gt;`);
    } else if (parameter.kind === "plus") {
      parts.push(`&lt;${parameter.name}...&gt;`);
    } else if (parameter.kind === "star") {
      parts.push(`[${parameter.name}...]`);
    } else {
      console.error(`Unreachable: unknown kind '${parameter.kind}'`);
    }
  }
  return parts.join(" ");
}

interface RecipeArityMapping {
  recipeArity: Map<string, number>;
  maxArity: number;
}

/**
 * Get a `Map` of recipe name to its arity, where variadic recipes are set
 * to `Infinity`.
 */
function getRecipeArityMap(justfile: Justfile): RecipeArityMapping {
  const recipeArity = new Map<string, number>();

  // Will be updated as the recipes are added to the map
  let maxArity = 0;

  for (const [name, recipe] of Object.entries(justfile.recipes)) {
    const params = recipe.parameters;
    let arity = params.length;

    // A recipe can only be variadic if it takes at least one parameter, and
    // the final parameter is not "singular" (must be "star" or "plus")
    if (arity > 0 && params[params.length - 1].kind !== "singular") {
      arity = Infinity;
    }

    // The arity has been calculated, update the running maximum too!
    if (maxArity < arity) {
      maxArity = arity;
    }

    recipeArity.set(name, arity);
  }

  // The recipes are in the map, now add the aliases. Since the target recipe
  // added, it's safe to pull out its arity and assign that without checking.
  for (const [name, alias] of Object.entries(justfile.aliases)) {
    const arity = recipeArity.get(alias.target) as number;
    recipeArity.set(name, arity);
  }

  return { recipeArity, maxArity };
}

const completionSpec: Fig.Spec = {
  name: "just",
  description: "Just a command runner",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
    },
    {
      name: "--changelog",
      description: "Print the changelog",
    },
    {
      name: "--check",
      description: "Run --fmt in 'check' mode",
      dependsOn: ["--unstable", "--fmt"],
    },
    {
      name: "--choose",
      description: "Select one or more recipes to run using another program",
    },
    {
      name: "--chooser",
      description: "Override the binary invoked by --choose",
      args: {
        name: "program",
      },
    },
    {
      name: "--color",
      description: "Print colorful output",
      args: {
        suggestions: [
          { name: "auto", icon: "fig://icon?type=string" },
          { name: "always", icon: "fig://icon?type=string" },
          { name: "never", icon: "fig://icon?type=string" },
        ],
      },
    },
    {
      name: ["-c", "--command"],
      insertValue: "--command '{cursor}'",
      description:
        "Run an arbitrary command with the working directory, .env, overrides, and exports",
      args: {
        name: "command",
      },
    },
    {
      name: "--completions",
      description: "Print shell completions",
      args: {
        name: "shell",
        suggestions: [
          { name: "zsh", icon: "fig://icon?type=string" },
          { name: "bash", icon: "fig://icon?type=string" },
          { name: "fish", icon: "fig://icon?type=string" },
          { name: "powershell", icon: "fig://icon?type=string" },
          { name: "elvish", icon: "fig://icon?type=string" },
        ],
      },
    },
    {
      name: "--clear-shell-args",
      description: "Clear shell arguments",
    },
    {
      name: "--dry-run",
      description: "Print what just would do, without doing it",
    },
    {
      name: "--dump",
      description: "Print justfile",
    },
    {
      name: "--dotenv-filename",
      description: "Use a file with this name instead of .env",
      args: {
        name: "name",
      },
    },
    {
      name: "--dotenv-path",
      description:
        "Load the environment file from a path instead of searching for one",
    },
    {
      name: "--dump-format",
      description: "Specify the format for dumping the justfile",
      dependsOn: ["--dump"],
      args: {
        name: "format",
        suggestions: [
          {
            name: "just",
            icon: "fig://icon?type=string",
          },
          {
            name: "json",
            icon: "fig://icon?type=string",
            description: "This value requires --unstable",
          },
        ],
      },
    },
    {
      name: ["-e", "--edit"],
      description:
        "Edit the justfile with $VISUAL or $EDITOR, falling back to vim",
    },
    {
      name: "--evaluate",
      description: "Evaluate and print all variables",
    },
    {
      name: "--fmt",
      description: "Format and overwrite the justfile",
      dependsOn: ["--unstable"],
    },
    {
      name: "--highlight",
      description: "Highlight echoed recipe lines in bold",
      exclusiveOn: ["--no-highlight"],
    },
    {
      name: "--init",
      description: "Initialize a new justfile",
    },
    {
      name: ["-f", "--justfile"],
      description: "Use a specific justfile",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-l", "--list"],
      description: "List available recipes and their arguments",
    },
    {
      name: "--list-heading",
      description: "Print this text before the list",
      args: {
        name: "text",
      },
    },
    {
      name: "--list-prefix",
      description: "Print this text before each list item",
      args: {
        name: "text",
      },
    },
    {
      name: "--no-dotenv",
      description: "Don't load the environment file",
    },
    {
      name: "--no-highlight",
      description: "Don't highlight echoed recipe lines",
      exclusiveOn: ["--highlight"],
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress all output",
    },
    {
      name: "--set",
      description: "Override a variable with a value",
      args: [
        {
          name: "variable",
          generators: {
            custom: async (tokens, executeShellCommand) => {
              const path = getJustfilePath(tokens);
              const command = getJustfileDumpCommand(path);
              const out = await executeShellCommand(command);
              let justfile: Justfile;
              try {
                justfile = JSON.parse(out);
              } catch (e) {
                console.error(e);
                return [];
              }
              return Object.keys(justfile.assignments).map((name) => ({
                name,
                icon: "fig://icon?type=string",
              }));
            },
          },
        },
        {
          name: "value",
          description: "The string value the variable will be set to",
        },
      ],
    },
    {
      name: "--shell",
      description: "Invoke this shell to run recipes",
      args: {
        name: "shell",
        default: "sh",
      },
    },
    {
      name: "--shell-arg",
      description: "Invoke the shell with this as an argument",
      args: {
        name: "argument",
        default: "-cu",
      },
    },
    {
      name: "--shell-command",
      description:
        "Invoke --command with the shell used to run recipe lines and backticks",
    },
    {
      name: ["-s", "--show"],
      description: "Show information about a recipe",
      args: {
        name: "recipe",
        generators: {
          custom: async (tokens, executeShellCommand) => {
            const path = getJustfilePath(tokens);
            const command = getJustfileDumpCommand(path);
            const out = await executeShellCommand(command);
            let justfile: Justfile;
            try {
              justfile = JSON.parse(out);
            } catch (e) {
              console.error(e);
              return [];
            }
            return getRecipeSuggestions(justfile);
          },
        },
      },
    },
    {
      name: "--summary",
      description: "List names of available recipes",
    },
    {
      name: ["-u", "--unsorted"],
      description: "Return list and summary entries in source order",
    },
    {
      name: "--unstable",
      description: "Enable unstable features",
    },
    {
      name: "--variables",
      description: "List names of variables",
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: ["-d", "--working-directory"],
      description: "Use this as the working directory",
      dependsOn: ["--justfile"],
      args: {
        template: "folders",
      },
    },
  ],
  args: {
    // This would normally say "recipes" but because this is also used
    // for the recipes' arguments it needs to be more generic.
    name: "args",
    isVariadic: true,
    isOptional: true,
    optionsCanBreakVariadicArg: false,
    generators: {
      // TODO: Check if this is necessary
      trigger: " ",

      // This is another multi-step generator, because it has to do all the
      // heavy lifting of supporting arguments with arguments. withfig/fig#638
      // 1. Get the justfile as JSON
      // 2. Exit early if we're in a recipe's argument
      // 3. Suggest recipes
      custom: async (tokens, executeShellCommand) => {
        // 📍 1. Get the justfile as JSON
        const path = getJustfilePath(tokens);
        const command = getJustfileDumpCommand(path);
        const out = await executeShellCommand(command);
        let justfile: Justfile;
        try {
          justfile = JSON.parse(out);
        } catch (e) {
          console.error(e);
          return [];
        }

        // 📍 2. Exit early if we're in a recipe's argument
        // First, a minor optimization: if we know the maximum arity of all
        // the recipes, we only have to check that many indices.
        const { recipeArity, maxArity } = getRecipeArityMap(justfile);
        const indicesToCheck = Math.min(maxArity, tokens.length - 2);

        // The final token doesn't need to be checked because that's the one
        // we're generating suggestions for. Tokens are checked from the second
        // last, moving through the array in reverse. This is an intentionally
        // naive approach, but in practice it's *way better* than good enough!
        //
        // We're in the position of a recipe's argument if all of these
        // conditions are true for a visited token:
        //   1: It's a recipe name
        //   2: It takes more than 0 arguments
        //   3: It takes more args than the number of tokens we've visited
        //
        // If the token is not a recipe name, then move back by 1 token and
        // repeat this process.
        //
        // If the token is a recipe name, but that recipe takes fewer arguments
        // than the number of tokens checked, then suggest recipe names instead.
        for (let checked = 0; checked < indicesToCheck; checked++) {
          const index = tokens.length - 2 - checked;
          const token = tokens[index];
          const arity = recipeArity.get(token);

          if (arity === undefined) {
            continue;
          }
          if (arity > checked) {
            return [];
          } else {
            break;
          }
        }

        // 📍 3. Suggest recipes
        return getRecipeSuggestions(justfile, {
          showRecipeParameters: true,
        });
      },
    },
  },
};

export default completionSpec;
