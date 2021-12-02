type JustfileData = {
  aliases: {
    [name: string]: {
      name: string;
      target: string;
    };
  };
  assignments: {
    [name: string]: {
      name: string;
      export: boolean;
      value: unknown;
    };
  }[];
  first: string;
  recipes: {
    [name: string]: RecipeData;
  };
  settings: unknown;
  warnings: unknown;
};

type RecipeData = {
  name: string;
  doc: string | null;
  body: unknown;
  dependencies: string[];
  parameters: {
    default: unknown;
    export: boolean;
    kind: "singular" | "plus" | "star";
    name: string;
  }[];
  priors: number;
  private: boolean;
  quiet: boolean;
  shebang: boolean;
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
function getJustfilePath(tokens: string[]): string {
  // Only need to check if the token starts with this string
  const flagRe = /^(?:-f|--justfile)/;
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
  return "justfile";
}

/**
 * Get a `Fig.Suggestion[]` containing a suggestion for each recipe and alias.
 *
 * If the optional `showRecipeParameters` prop is `true`, the recipe display
 * names will include additional text describing the recipe's parameters, in
 * the same style as Fig's autocomplete. (eg. `name <arg>` instead of `name`)
 */
function getRecipeSuggestions(
  justfile: JustfileData,
  { showRecipeParameters = false } = {}
): Fig.Suggestion[] {
  const suggestions: Fig.Suggestion[] = [];

  for (const [name, recipe] of Object.entries(justfile.recipes)) {
    suggestions.push({
      name,
      displayName: showRecipeParameters
        ? getRecipeNameWithParams(recipe)
        : name,
      description: recipe.doc ?? "recipe",
      icon: "fig://icon?type=command",
    });
  }

  // Now the aliases. Like the git aliases, these don't list their usage
  for (const [name, alias] of Object.entries(justfile.aliases)) {
    suggestions.push({
      name,
      description: `Alias for '${alias.target}'`,
      icon: "fig://icon?type=commandkey",
    });
  }

  return suggestions;
}

function getRecipeNameWithParams(recipe: RecipeData) {
  const parts = [recipe.name];
  for (const parameter of recipe.parameters) {
    // Fig sanitizes things like "<NAME>" so this has to be encoded
    if (parameter.kind === "singular") {
      parts.push(`&lt;${parameter.name}&gt;`);
    } else if (parameter.kind === "plus") {
      parts.push(`&lt;${parameter.name}&gt;...`);
    } else if (parameter.kind === "star") {
      parts.push(`[${parameter.name}]...`);
    } else {
      console.error(`Unreachable: unknown kind '${parameter.kind}'`);
    }
  }
  return parts.join(" ");
}

const completionSpec: Fig.Spec = {
  name: "just",
  description: "",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for just",
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
          { name: "just", icon: "fig://icon?type=string" },
          { name: "json", icon: "fig://icon?type=string" },
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
    },
    {
      name: "--highlight",
      description: "Highlight echoed recipe lines in bold",
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
              const justfile = getJustfilePath(tokens);
              const out = await executeShellCommand(
                `just --unstable --dump --dump-format json --justfile '${justfile}'`
              );
              let json: JustfileData;
              try {
                json = JSON.parse(out);
              } catch (e) {
                console.error(e);
                return [];
              }
              return Object.keys(json.assignments).map((name) => ({
                name,
                icon: "fig://icon?type=string",
              }));
            },
          },
        },
        {
          name: "value",
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
            const justfile = getJustfilePath(tokens);
            const out = await executeShellCommand(
              `just --unstable --dump --dump-format json --justfile '${justfile}'`
            );
            let json: JustfileData;
            try {
              json = JSON.parse(out);
            } catch (e) {
              console.error(e);
              return [];
            }
            return getRecipeSuggestions(json);
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
  // Only uncomment if just takes an argument
  args: {
    // this would normally say "recipes" but because this is also used
    // for the recipes' arguments it needs to be more generic.
    name: "args",
    isVariadic: true,
    isOptional: true,
    optionsCanBreakVariadicArg: false,
    generators: {
      // TODO: Check if this is necessary
      trigger: " ",

      // This is another multi-step generator, because it has to do all the
      // heavy lifting of supporting arguments with arguments.
      // 1. Get the justfile as JSON
      // 2. Exit early if we're in a recipe's argument
      // 3. Suggest recipes
      custom: async (tokens, executeShellCommand) => {
        // 📍 1. Get the justfile as JSON
        // This is pretty standard: get the name of the justfile, use `just` to
        // dump it as JSON, and parse that. If parsing fails, log the error and
        // return no suggestions.
        const justfile = getJustfilePath(tokens);
        const out = await executeShellCommand(
          `just --unstable --dump --dump-format json --justfile '${justfile}'`
        );
        let json: JustfileData;
        try {
          json = JSON.parse(out);
        } catch (e) {
          console.error(e);
          return [];
        }

        // 📍 2. Exit early if we're in a recipe's argument
        // Some recipes take arguments. For those that do, if we're in the
        // position of one of those arguments, nothing should be suggested.
        // We'll determine that by going in reverse: if we know the names of
        // all the recipes that can take arguments, then if we find one and
        // we're in the position of one of its arguments, suggest nothing.
        const recipeArity = new Map<string, number>();
        for (const [name, recipe] of Object.entries(json.recipes)) {
          let number = 0;
          for (const parameter of recipe.parameters) {
            if (parameter.kind === "singular") {
              number++;
            } else {
              number = Infinity;
              break;
            }
          }
          recipeArity.set(name, number);
        }
        // Since we know that the target of the alias is in the map, it's safe
        // to pull out its arity and assign that to the alias.
        for (const [name, alias] of Object.entries(json.aliases)) {
          const arity = recipeArity.get(alias.target);
          recipeArity.set(name, arity);
        }
        console.log(recipeArity);

        // Say we know that the greatest number of arguments a recipe takes is
        // 2, then only 2 indices need to be checked.
        const maxArity = Math.max(...recipeArity.values());

        // Recipes that take a variadic argument get assigned Infinity, so we
        // need to limit that to the length of the array. Why 2 instead of 1?
        // Because the first item in the tokens array is always "just", so it
        // never needs to be checked.
        const indicesToCheck = Math.min(maxArity, tokens.length - 2);

        // Great, so we know how many spots to check now. Let's loop over
        // the tokens in reverse to see if we hit a recipe name. If that
        // recipe has a greater arity than the number of tokens we've checked
        // so far, then the current argument is one of that recipe's args.
        // This loop will always exit as soon as a recipe name is found.
        for (let i = 0; i < indicesToCheck; i++) {
          // Given tokens of ["just", "-f", "just", "takes1arg", ""], we only
          // need to check starting from the second last item (because we're
          // trying to figure out what to suggest *for* the final item).
          const index = tokens.length - 2 - i;
          const token = tokens[index];
          const arity = recipeArity.get(token);

          // The argument wasn't a recipe, keep looking.
          if (arity === undefined) {
            continue;
          }

          // If the arity is zero, then we know it doesn't take any arguments.
          // That means that we should definitely suggest a recipe.
          if (arity === 0) {
            break;
          }

          // If the arity is less than the number of spots from the end,
          // then it already has its arguments and we can exit the loop
          // to suggest recipes again.
          // If the arity is greater than the number of spots from the end,
          // then we're in an argument to the recipe.
          if (arity > i) {
            return [];
          } else {
            break;
          }
        }

        // 📍 3. Suggest recipes
        // It's nice to be able to see the arguments in the suggestions.
        // Because the name "args" can't be changed, the best option is to
        // add recipe arguments to the displayName of the suggestion.
        return getRecipeSuggestions(json, {
          showRecipeParameters: true,
        });
      },
    },
  },
};

export default completionSpec;
