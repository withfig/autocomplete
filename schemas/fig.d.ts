/* eslint-disable @typescript-eslint/ban-types */
declare namespace Fig {
  // All the available templates
  export type TemplateStrings = "filepaths" | "folders";

  export type Template = TemplateStrings | TemplateStrings[];

  // The type of suggestion to use
  export type SuggestionType =
    | "folder"
    | "file"
    | "arg"
    | "subcommand"
    | "option"
    | "special"
    | "shortcut";

  // A single T object or an array of this T object
  export type SingleOrArray<T> = T | T[];

  // A function which can have a T argument and a R result, both
  // set to void by default
  export type Function<T = void, R = void> = (param: T) => R;

  // A string or a function which can have a T argument and a R result,
  // both set to void by default
  export type StringOrFunction<T = void, R = void> = string | Function<T, R>;

  export type Spec = Subcommand;

  export interface BaseSuggestion {
    /**
     * The text that is displayed for a given suggestion. It will override what is in the name prop
     *
     * @example
     * For the npm CLI we have a subcommand called `install`. If we wanted
     * to display some custom text like `Install an NPM package 📦` we would set
     * `name: "install"` and `displayName: "Install an NPM package 📦"`
     */
    displayName?: string;
    /**
     * The value that's inserted into the terminal when a user presses enter/tab
     * or clicks on a suggestion.
     * You can optionally specify `{cursor}` in the string and Fig will automatically
     * place the cursor there after insert.
     *
     * @example
     * For `git commit` the `-m` option has an insert value of `-m '{cursor}'`
     */
    insertValue?: string;
    /**
     * The text that gets rendered at the bottom of the autocomplete box.
     * Keep it short and direct!
     */
    description?: string;
    /**
     * The icon that is rendered is based on the type, unless overwritten. Icon
     * can be a 1character string, a URL, or Fig's icon protocol (fig://) which
     * will get mac system icons.
     *
     * @example
     * `A`, `😊`
     * `https://www.herokucdn.com/favicon.ico`
     * `fig://icon?type=file`
     */
    icon?: string;
    /**
     * Specifies whether the suggestion is "dangerous". If so, Fig will not enable
     * its insert and run functionality whereby selecting a suggestion runs a command.
     * This will make it harder for a user to accidentally run a dangerous command.
     *
     * @remark
     * This is used in specs like rm and trash.
     */
    isDangerous?: boolean;
    /**
     * Specifies whether a suggestion should be hidden from results and only show is there is an exact match.
     *
     * @example
     * This is used for things like "-" suggestion in cd or git checkout
     */
    hidden?: boolean;
  }

  export interface Suggestion extends BaseSuggestion {
    /**
     * Specifies whether the suggestion is "dangerous". If so, Fig will not enable
     * its insert and run functionality whereby selecting a suggestion runs a command.
     * This will make it harder for a user to accidentally run a dangerous command.
     *
     * @example
     * For git, some subcommands are push, commit, checkout, add etc
     */
    name?: SingleOrArray<string>;
    /**
     * The type of suggestion, one of `folder`, `file`, `arg`, `subcommand`, `option`,
     * `special`.
     */
    type?: SuggestionType;
  }

  export interface Subcommand extends BaseSuggestion {
    /**
     * The name of a subcommand. Fig uses this value for its parsing so it must be exactly right. Think of it like a token.
     * If you want to display something custom to the user, use the displayName prop
     *
     * @example
     * For git, some subcommands are push, commit, checkout, add etc
     */
    name: string;

    /**
     * A list of subcommands for this spec.
     */
    subcommands?: Subcommand[];

    /**
     * A list of options for this spec.
     */
    options?: Option[];

    /**
     * An array of args or a single arg.
     *
     * @remark
     * If a subcommand takes an argument, please at least include an empty Arg Object
     * (e.g. {}). If you don't, Fig will assume the subcommand does not take an argument.
     * This means Fig will present the wrong suggestions.
     */

    args?: SingleOrArray<Arg>;

    /**
     * A list of Suggestion to make custom suggestions.
     *
     * @remark
     * You should only use this for special cases. Most likely, what you are trying to
     * accomplish should be done with the `args` prop.
     */
    additionalSuggestions?: Suggestion[] | String[];
    /**
     * Allows Fig to refer to another completion spec in the `~/.fig/autocomplete` folder.
     * Specify the spec name without `js`.
     *
     * @example
     * `aws-s3` refer to the `~/.fig/autocomplete/aws-s3` spec.
     *
     * When is this used? The aws spec is so large that it is slow to load. It needs to be
     * brokenup into a separate spec for each subcommand.
     *
     * If your CLI tool takes another CLI command (e.g. time , builtin... ) or a script
     * (e.g. python, node) and you would like Fig to continue to provide completions for this
     * script, see `isCommand` and `isScript` in {@link {https://withfig.com/docs/autocomplete/api#arg-object | Arg}.
     */
    loadSpec?: string;
  }

  export interface Option extends BaseSuggestion {
    /**
     * The short and/or long name of the option. It can be a string or an array of strings.
     * The strings must NOT include the = sign and must NOT chain options together.
     * Fig handles all of this logic.
     *
     * @example
     * For git commit, we have the option ["-m", "--message"]. For ps we have the options "-a", "-u", "-x"
     */
    name: SingleOrArray<String>;

    /**
     * An array of args or a single arg.
     *
     * @remark
     * If a subcommand takes an argument, please at least include an empty Arg Object
     * (e.g. {}). If you don't, Fig will assume the subcommand does not take an argument.
     * This means Fig will present the wrong suggestions.
     */
    args?: SingleOrArray<Arg>;
  }

  export interface Arg {
    /**
     * The name of an argument. This is a normal string that signals to the user the type of argument they are inserting if there are no available suggestions.
     * Unlike the subcommand and option objects, Fig does not use this value for parsing. Therefore, it can be whatever you want.
     *
     * @example
     * For git commit -m, it takes an option with the name "message"
     */
    name?: string;

    /**
     * The text that gets rendered at the bottom of the autocomplete box.
     * Keep it short and direct!
     */
    description?: string;

    /**
     * Specifies whether the suggestion is "dangerous". If so, Fig will not enable
     * its insert and run functionality whereby selecting a suggestion runs a command.
     * This will make it harder for a user to accidentally run a dangerous command.
     *
     * @remark
     * This is used in specs like rm and trash.
     */
    isDangerous?: boolean;

    /**
     * A list of strings or Suggestion obejcts. Use this prop to specify custom suggestions
     * that are static. If suggestions are dependent upon the user's input or context, you most likely will
     * want to use a Generator object in this arg's generator prop.
     */
    suggestions?: string[] | Suggestion[];
    /**
     * Fig has pre-built generators for common suggestion types. Currently, we support
     * templates for either "filepaths" or "folders".
     *
     * @example
     * `cd` uses the `folders` template.
     */
    template?: Template;
    /**
     * A list or a single generator. Generators let you run shell commands on the user's
     * device to generate suggestions for the argument
     */
    generators?: SingleOrArray<Generator>;
    /**
     * Specifies that the argument is variadic and therefore the subcommand / option takes infinite arguments
     *
     * @example
     * `echo` takes a variadic argument (`echo hello world ...`) so does git add
     */
    variadic?: boolean;

    /**
     * True if an argument is optional.
     *
     * @example
     * Git push [remote] [branch] takes two optional args
     */
    isOptional?: boolean;
    /**
     * Specifies that the argument is an entirely new command which Fig should start completing on frome scratch
     *
     * @example
     * `time` and `builtin` have only one argument and this argument has the `isCommand` property
     */
    isCommand?: boolean;
    /**
     * Specifies that the argument is a script which Fig should start completing on from scratch
     *
     * @example
     * `python` take one argument which is a `.py` file. It is possible for Fig to offer for
     * completions on this .py file. See {@link https://withfig.com/docs/autocomplete/autocomplete-for-teams | Fig for Teams}
     */
    isScript?: boolean;

    /**
     * Will run the generators after 100ms of no new typing.
     *
     * @example
     * NPM install and pip install send debounced network requests after inactive typing from users
     */
    debounce?: boolean;
  }

  /**
   * @see https://withfig.com/docs/autocomplete/api#generator-object
   */
  export interface Generator {
    /**
     * Must be either "filepaths" or "folders".
     */
    template?: Template;
    /**
     * Function that lets you filter the Suggestion objects output by the template.
     */
    filterTemplateSuggestions?: Function<Suggestion[], Suggestion[]>;
    /**
     * The shell command to execute in the user's current working directory. The output
     * is a string. It is then converted into an array of Suggestion objects using
     * `splitOn` or `postProcess`.
     */
    script?: StringOrFunction<string[], string>;
    /**
     * As splitting the output of script is such a common use case for `postProcess`, we
     * build the `splitOn` property. Simply define a string to split the output of script on.
     *
     * @example
     * "," or "\n" and Fig will do the work of the `postProcess` prop for you
     */
    splitOn?: string;
    /**
     * Define a function that takes a single input: the output of executing script. This function
     * then returns an array of Suggestion objects that will be rendered by Fig.
     */
    postProcess?: Function<string, Suggestion[]>;
    /**
     * Defines a trigger that determines when to regenerate suggestions for this argument by
     * re-running the generators.
     */
    trigger?: string | ((paramOne: string, paramTwo: string) => boolean);
    /**
     * A function to determine what part of the string the user is currently typing we should
     * use to filter our suggestions.
     */
    filterTerm?: StringOrFunction<string, string>;
    /**
     * Custom Functions let you define a function that takes an array of the user's input, run
     * multiple shell commands on the user's machine, and then generate suggestions to display.
     */
    custom?: Function<string[], Promise<Suggestion[]>>;
    /**
     * Should we cache the object and if so for how long.
     *
     * @example
     * "," or "\n" and Fig will do the work of the `postProcess` prop for you
     */
    cache?: Cache;
  }

  export interface Cache {
    /**
     * Time to live for the cache in seconds
     *
     * @example
     * 3600
     */
    ttl: number;
    /**
     * Whether the cache should be based on the directory the user was currently in or now.
     */
    cacheByDirectory?: boolean;
  }
}
