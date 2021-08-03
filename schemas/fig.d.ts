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
  export type Function<T = void, R = void> = (param?: T) => R;

  // A string or a function which can have a T argument and a R result,
  // both set to void by default
  export type StringOrFunction<T = void, R = void> = string | Function<T, R>;

  export interface Spec extends Subcommand {
    /**
     * This flag allows options to have multiple characters
     * even if they only have one hyphen
     *
     * @example
     * -longflag
     */
    posixNoncompliantFlags?: boolean;
  }

  // Execute shell command function inside generators
  export type ExecuteShellCommandFunction = (
    commandToExecute: string
  ) => Promise<string>;

  export interface BaseSuggestion {
    /**
     * The string that is displayed in the UI for a given suggestion. This Overrides the name property.
     *
     * @example
     * For the npm CLI we have a subcommand called `install`. If we wanted
     * to display some custom text like `Install an NPM package 📦` we would set
     * `name: "install"` and `displayName: "Install an NPM package 📦"`
     */
    displayName?: string;
    /**
     * The value that's inserted into the terminal when a user presses enter/tab or clicks on a menu item.
     * You can optionally specify {cursor} in the string and Fig will automatically place the cursor there after insert.
     * The default is the name prop.
     *
     * @example
     * For `git commit` the `-m` option has an insert value of `-m '{cursor}'`
     */
    insertValue?: string;
    /**
     * The text that gets rendered at the bottom of the autocomplete box.
     * Keep it short and simple!
     */
    description?: string;
    /**
     * The icon that is rendered is based on the type, unless overwritten. Icon
     * can be a 1 character string, a URL, or Fig's icon protocol (fig://) which lets you generate
     * colorful and fun systems icons: https://fig.io/docs/reference/suggestion/icon-api
     *
     * @example
     * `A`, `😊`
     * `https://www.herokucdn.com/favicon.ico`
     * `fig://icon?type=file`
     */
    icon?: string;
    /**
     * Specifies whether the suggestion is "dangerous". If so, Fig will not enable
     * its "insert and run" functionality (when Fig has the red insert icon).
     * This will make it harder for a user to accidentally run a dangerous command.
     *
     * @remark
     * This is used in specs like rm and trash.
     */
    isDangerous?: boolean;

    /**
     * The priority for a given suggestion determines its ranking in the Fig popup. A higher ranked priority will be listed first. The min priority is 0. The max priority is 100. The default priority is 50.
     * If a given suggestion has a priority between 50 and 75 (including the default 50) AND has been selected by the user before, the priority will be replaced with 75 + the timestamp of when that suggestion was selected as a decimal.
     * If a given suggestion has a priority outside of 50-75 AND has been selected by the user before, the priority will be increased by the timestamp of when that suggestion was selected as a decimal.
     *
     *
     * @example
     * If you want your suggestions to always be at the top order regardless of whether they have been selected before or not, rank them 76 or above
     * If you want your suggestions to always be at the bottom regardless of whether they have been selected before or not, rank them 49 or below
     */
    priority?: number;
    /**
     * Specifies whether a suggestion should be hidden from results. Fig will only show it if the user types the exact same thing as the name
     *
     * @example
     * The "-" suggestion is hidden in the `cd` spec. You will only see it if you type cd -
     */
    hidden?: boolean;
  }

  export interface Suggestion extends BaseSuggestion {
    /**
     * The text that’s rendered in each row of Fig's popup. displayName will override this.
     * he `name` props of suggestion, subcommand, options, and args objects are all different. It's important to read them all carefully.
     *
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
     * The exact name of the subcommand. It is important to get this right for parsing purposes.
     *
     * @example
     * For npm, the subcommand is `npm install` would have "name: install" (no extra spaces or characters, exactly like this)
     */
    name: string | string[];

    /**
     * A list of subcommands for this spec.
     * Subcommands can be nested within subcommands.
     */
    subcommands?: Subcommand[];

    /**
     * A list of option objects for this subcommand.
     */
    options?: Option[];

    /**
     * An array of args or a single arg.
     *
     * **Important**
     * If a subcommand takes an argument, please at least include an empty Arg Object
     * (e.g. `{}`). If you don't, Fig will assume the subcommand does not take an argument and we will present the wrong suggestions.
     *
     * @example:
     * git push takes two arguments. The most basic representation of this is
     * `args: [{}, {}]`
     */

    args?: SingleOrArray<Arg>;

    /**
     * A list of Suggestion objects that are appended to a specific subcommand. Often these are shortcuts
     *
     * @example:
     * `commit -m '{cursor}'` is a shortcut for git
     */
    additionalSuggestions?: Suggestion[] | string[];
    /**
     * Allows Fig to refer to another completion spec in the `~/.fig/autocomplete` folder.
     * Specify the spec name without `js`. This is similar but different to isCommand in the Arg object so read both carefully
     *
     * @example
     * `aws-s3` refer to the `~/.fig/autocomplete/aws-s3` spec.
     *
     * When is this used? The aws spec is so large that it is slow to load. It needs to be
     * broken up into a separate spec for each subcommand.
     *
     * If your CLI tool takes another CLI command (e.g. time , builtin... ) or a script
     * (e.g. python, node) and you would like Fig to continue to provide completions for this
     * script, see `isCommand` and `isScript` in {@link https://fig.io/docs/reference/arg | Arg}.
     */
    loadSpec?: string;
    /**
     * Dynamically generate a completion spec to be merged in at the same level as the current subcommand. This is useful when a CLI is generated dynamically.
     * This function takes two params:
     * 1. Context: an array of strings (the tokens the user has typed)
     * 2. executeShellCommand: a function that takes a string as input. It executes this string as a shell command on the user's device from the same current working directory as their terminal. It outputs a text blob. It is also async.
     *
     * It outputs a completion spec object
     *
     * @example
     * Laravel artisan has its own subcommands but also lets you define your own completion spec.
     */
    generateSpec?: (
      context?: string[],
      executeShellCommand?: ExecuteShellCommandFunction
    ) => Promise<Spec>;

    // Function<string[], Promise<Spec>>;
  }

  export interface Option extends BaseSuggestion {
    /**
     * The exact name(s) of the option. It is very important to get this right for parsing purposes. It can be a string or an array of strings.
     * **Important**: do NOT include an = sign here. Fig handles this logic for you. Including one will mess up the parsing.
     *
     * @example
     * For git commit -m, the option name is `["-m", "--message"]`
     */
    name: SingleOrArray<string>;

    /**
     * An array of args or a single arg object.
     *
     * **Important**
     * If an option takes an argument, please at least include an empty Arg Object
     * (e.g. `{}`). If you don't, Fig will assume the option does not take an argument and will present the wrong suggestions.
     *
     * @example:
     * `git commit -m` takes one argument. The most basic representation of this is
     * `args: {}`
     */
    args?: SingleOrArray<Arg>;
    /**
     *
     * Signals whether an option is required. The default is an option is NOT required.
     *
     * Currently, signalling that an option is required doesn't do anything, however, Fig will handle it in the future
     *
     * @example
     * The "-m" option of git commit is required
     *
     */
    required?: boolean;
    /**
     *
     * Signals whether an option is mutually exclusive with other options. Define this as an array of strings of the option names.
     * The default is an option is NOT mutually exclusive with any other options
     *
     * Currently, signalling mutually exclusive options doesn't do anything in Fig, however, Fig will handle it in the future.
     *
     * @example
     * You might see `[-a | --interactive | --patch]` in a man page. This means each of these options are mutually exclusive on each other.
     * If we were defining the exclusive prop of the "-a" option, then we would have `exclusive: ["--interactive", "--patch"]`
     *
     *
     */
    exclusive?: string[];
    /**
     *
     * Signals whether an option depends other options. Define this as an array of strings of the option names.
     * The default is an option does NOT depend on any other options
     *
     * Currently, signalling dependsOn doesn't do anything in Fig, however, Fig will handle it in the future.
     *
     * @example
     * In a tool like firebase, we may want to delete a specific extension. The command might be `firebase delete --project ABC --extension 123` This would mean we delete the 123 extension from the ABC project.
     * In this case, `--extension ` dependsOn `--project`
     *
     *
     */
    dependsOn?: string[];
  }

  export interface Arg {
    /**
     * The name of an argument. This is different to the `name` prop for subcommands, options, and suggestion objects so please read carefully.
     * This is a normal, human readable string that signals to the user the type of argument they are inserting if there are no available suggestions.
     * Fig does not use this value for parsing. Therefore, it can be whatever you want.
     *
     * @example
     * The name prop for the `git commit -m` arg object is "message". You can see this when you type!
     */
    name?: string;

    /**
     * The text that gets rendered at the bottom of the autocomplete box a) when the user is inputting an argument and there are no suggestions and b) for all generated suggestions for an argument
     * Keep it short and direct!
     */
    description?: string;

    /**
     * Specifies whether the suggestions generated by this argument are "dangerous". If so, Fig will not enable
     * its insert and run functionality (when the red icon appears that automatically executes commands for you rather than just inserting)
     *
     * @remark
     * This is used in specs like rm and trash.
     */
    isDangerous?: boolean;

    /**
     * An array of strings or Suggestion objects. Use this prop to specify custom suggestions
     * that are static (ie you know of in advance and don't have to be statically generated).
     * If suggestions are dependent upon the user's input or context, you most likely will
     * want to use a Generator object in this Arg's generator prop.
     */
    suggestions?: string[] | Suggestion[];
    /**
     * Fig has pre-built generators for common suggestion types. Currently, we support
     * templates for either "filepaths" or "folders". You can do either of these as a string or both in an array.
     * Folders will only show folders. Filepaths will show folders and filepaths but will only offer the insert and execute functionality (the red automatic insert icon you see when using cd) for files NOT folders.
     *
     * @example
     * `cd` uses the `folders` template whereas ls uses `[filepaths, folders]`
     */
    template?: Template;
    /**
     *
     * Generators let you run shell commands on the user's device to generate suggestions for arguments.
     * The generators prop takes a single generator object or a list of generator objects.
     * The generator object outputs an array of suggestions which are offered to users when inserting an argument
     */
    generators?: SingleOrArray<Generator>;
    /**
     * Specifies that the argument is variadic and therefore repeats infinitely.
     *
     * @example
     * `echo` takes a variadic argument (`echo hello world ...`) so does `git add`
     */
    variadic?: boolean;

    /**
     * True if an argument is optional. It is important you include this for our parsing. If you don't, Fig will assume the argument is mandatory and will not offer suggestions for a user.
     *
     * @example
     * Git push [remote] [branch] takes two optional args
     */
    isOptional?: boolean;
    /**
     * Specifies that the argument is an entirely new command which Fig should start completing on from scratch
     *
     * @example
     * `time` and `builtin` have only one argument and this argument has the `isCommand` property. If I type `time git`, Fig will load up the git completion spec because the isCommand property is set.
     */
    isCommand?: boolean;
    /**
     * Exactly the same as isCommand, except, you specify a string to prepend to what the user inputs and fig will load the completion spec accordingly. if isModule: "python/", Fig would load up the python/USER_INPUT.js completion spec from the ~/.fig/autocomplete
     *
     * @example
     * For `python -m`, the user can input a specific module such as http.server. Each module is effectively a mini CLI tool that should have its own completions. Therefore the argument object for -m has `isModule: "python/"`. Whatever the modules user inputs, Fig will look under the `~/.fig/autocomplete/python/` directory for completion spec.
     */
    isModule?: string;
    /**
     * Exactly the same as the `isCommand` prop except Fig will look for a completion spec in a .fig folder in the user's current working directory.
     *
     * @example
     * `python` take one argument which is a `.py` file. If I have a `main.py` file on my desktop and my current working directory is my desktop, if I type `python main.py` Fig will look for a completion spec in `~/Desktop/.fig/main.py.js`
     * See our docs for more on this {@link https://fig.io/docs/tutorials/building-internal-clis | Fig for Teams}
     */
    isScript?: boolean;

    /**
     * This will debounce every keystroke event for this particular arg. If there are no keystroke events after 100ms, Fig will execute all the generators in this arg and return the suggestions.
     *
     * @example
     * NPM install and pip install send debounced network requests after inactive typing from users.
     */
    debounce?: boolean;
    /**
     * The default value for an optional argument. This is just a string
     *
     */
    default?: string;
  }

  /**
   * @see https://fig.io/docs/reference/generator
   */
  export interface Generator {
    /**
     * Fig has pre-built generators for common suggestion types. Currently, we support
     * templates for either "filepaths" or "folders". You can do either of these as a string or both in an array.
     * Folders will only show folders. Filepaths will show folders and filepaths but will only offer the insert and execute functionality (the red automatic insert icon you see when using cd) for files NOT folders.
     *
     * @example
     * `cd` uses the `folders` template whereas ls uses `[filepaths, folders]`
     */
    template?: Template;
    /**
     * This function takes a single argument: the array of suggestion objects output by the template prop. It then lets you edit them as you see fit. You must then return an array of suggestion objects.
     * @example
     * The python spec has an arg object which has a template for "filepaths" and then filters out all suggestions generated that don't end with "/" (to keep folders) or ".py" (to keep python files)
     */
    filterTemplateSuggestions?: Function<Suggestion[], Suggestion[]>;
    /**
     * In order to generate contextual suggestions for arguments, Fig lets you execute a shell command on the users local device as if it were done in their current working directory.
     * You can either specify
     * 1. a string to be executed (like `ls` or `git branch`)
     * 2. a function to generate the string to be executed. The function takes in an array of tokens of the user input and should output a string. You use a function when the script you run is dependent upon one of the tokens the user has already input (for instance an app name, a kubernetes context etc)
     * After executing the script, the output will be passed to one of `splitOn` or `postProcess` for further processing to produce suggestion objects.
     *
     * @example
     * `git checkout` takes one argument which is a git branch. Its arg object has a generator with a script of `git branch`
     * `heroku features:disable --app ABC FEATURE` the suggestion for the FEATURE argument are dependent upon the --app given (in this case ABC). Therefore, we would use a function to generate the script we would run here
     */
    script?: StringOrFunction<string[], string>;
    /**
     * A syntactic sugar over postProcess. This takes in the text output of `script`, splits it on the string you provide here, and the automatically generates an array of suggestion objects for each item.
     *
     * @example
     * Specify "," or "\n", and Fig will do the work of the `postProcess` prop for you
     */
    splitOn?: string;
    /**
     * This function takes one parameter: the output of `script`. You can do whatever processing you want, but you must return an array of Suggestion objects.
     */
    postProcess?: (out: string, context?: string[]) => Suggestion[];

    /**
     * Fig performs numerous optimizations to avoid running expensive shell functions many times. For instance, after you type `cd[space]` we load up a list of folders (the suggestions). After you start typing, we instead filter over this list of folders (the filteredSuggestions).
     * The suggestions remain the same while the filteredSuggestions change on each input.
     *
     * Typically, Fig regenerates the suggestions every time the user hits space as in bash, a space typically delimits commands. However, if the `trigger` prop is defined, Fig will run the trigger function on each keystroke. If it returns true, instead of filtering over the suggestions, Fig will regenerate the list of suggestions THEN filter over them.
     * The trigger function takes two inputs: the new token the user typed and the token on the keystroke before.
     *
     * Trigger as a function takes two arguments: 1. the new token 2. the old token
     * e.g. the old token might be `desktop` and the new token might be `desktop/`. The function may look for a different in the number of slashes. In this case there is a difference so it would return true.
     *
     * The trigger prop can also be a simple string. This is syntactic sugar that allows you to specify a single character. If count of this character in the string before !== the count of the new string, Fig will regenerate the suggestions.
     *
     * Using a trigger is especially beneficial when you have an argument contained inside a single string that is not separated by a space. It is often used with a custom prop or script (as a function)
     *
     * Finally, make sure you don't confuse trigger with debounce. Debounce will regenerate suggestions after a period of inactivity typing. Trigger will regenerate suggestions when the function you define returns true!
     *
     * Use some logging in the function to work out when trigger is being run
     *
     * @example
     * You can see the trigger in action every time you use file and folder completions (e.g. with `cd`). When you type a `/`, Fig will regenerate its list of file and folder suggestions by appending the path of what you've already typed to your current working directory.
     * e.g. If I had already typed "desktop". The current list of suggestions is from the ~ directory and the filterTerm is "desktop". Then I type "/" so it says "desktop/", the trigger would return true, Fig will generate suggestions for the directory `~/desktop/` and the filterTerm will become an empty string.
     *
     */
    trigger?: string | ((newToken: string, oldToken?: string) => boolean);
    /**
     * Read the note above about how triggers work. Triggers and filterTerm may seem similar but are actually different. The trigger defines when to regenerate new suggestions. The filterTerm defines what characters we should use to filter over these suggestions.
     *
     * It can be a function: this takes in what the user has currently typed as a string and outputs a separate string that is used for filtering
     * It can also be a string: this is syntactic sugar that takes everything in the string after the character(s) you choose.
     *
     * Use some logging in the function to work out what the trigger is
     *
     * @example
     * cd has a filter term of "/". If an argument to `cd` includes a "/" Fig will filter over all of the suggestions generated using the string AFTER the last "/"
     *
     */
    filterTerm?: StringOrFunction<string, string>;
    /**
     * Custom function is a bit like script as a function, however, it gives you full control.
     *
     * It is an async function.
     *
     * It takes two arguments:
     * 1. Context: an array of tokens of what the user has typed
     * 2. executeShellCommand: a function that takes a string as input. It executes this string as a shell command on the user's device from the same current working directory as their terminal. It outputs a text blob. It is also async.
     *
     * It must return an array of suggestion objects.
     *
     *
     * @example
     * ```
     * const generator: Fig.Generator = {
     *   custom: (context) => {
     *     const out = await executeShellCommand("ls");
     *     return out.split("\n").map((elm) => ({ name: elm }));
     *   },
     * };
     * ```
     */
    custom?: (
      context: string[],
      executeShellCommand: ExecuteShellCommandFunction
    ) => Promise<Suggestion[]>;
    /**
     * For commands that take a long time to run, Fig gives you the option to cache their response. You can cache the response globally or just by the directory they were run in
     * You just need to specify a `ttl` (time to live) for how long the cache will last (this is a number)
     * You can also optionally turn on the ability to just cache by directory (`cacheByDirectory: true`)
     *
     * @example
     * The kubernetes spec makes use of this.
     *
     */
    cache?: Cache;
  }

  export interface Cache {
    /**
     * Time to live for the cache in milliseconds
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
