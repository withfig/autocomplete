declare namespace Fig {

    // All the available templates
    export type Template = 'filepaths' | 'folders';

    // The type of suggestion to use
    export type SuggestionType = 'folder' | 'file' | 'arg' | 'subcommand' | 'option' | 'special';

    // A single T object or an array of this T object
    export type SingleOrArray<T> = T | T[];

    // A function which can have a T argument and a R result, both
    // set to void by default
    export type Function<T = void, R = void> = (param: T) => R;

    // A string or a function which can have a T argument and a R result,
    // both set to void by default
    export type StringOrFunction<T = void, R = void> = string | Function<T, R>;

    /**
     * A simple completion object, which does not have a required
     * name by default. Use NamedCompletion to get a required name.
     */
    export interface Completion {

        /**
         * The text that’s rendered in each row of the dropdown.
         *
         * @remarks
         * Fig uses the name prop for parsing purposes. It is important that the name
         * prop exactly matches the CLI tool. If you want to customise what is
         * says in the dropdown, please use `displayName`.
         */
        name?: SingleOrArray<string>;
        /**
         * Overrides the name property.
         *
         * @example
         * For the npm CLI we have a subcommand called `install`. If we wanted
         * to display some custom text like `Install an NPM package 📦` we would set
         * `name: "install"` and `displayName: "Install an NPM package 📦"`
         */
        displayName?: string;
        /**
         * The value that's inserted into the terminal when a user presses enter/tab
         * or clicks on a menu item.
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
         * The type of suggestion, one of `folder`, `file`, `arg`, `subcommand`, `option`,
         * `special`.
         */
        type?: SuggestionType;
        /**
         * The icon that is rendered is based on the type, unless overwritten. Icon
         * can bea 1character string, a URL, or Fig's icon protocol (fig://) which
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
    }

    /**
     * Same as a Completion, but with a required name.
     */
    export interface NamedCompletion extends Omit<Completion, 'name'>{

        /**
         * The text that’s rendered in each row of the dropdown.
         *
         * @remarks
         * Fig uses the name prop for parsing purposes. It is important the name pro
         * exactly matches the CLI tool. If you want to customise it what is says in the
         * dropdown, please use `displayName`.
         */
        name: SingleOrArray<string>;
    }

    /**
     * The base object which should be used at the root level of the
     * specs declaration.
     *
     * @see https://withfig.com/docs/autocomplete/api#root-object
     */
    export interface Spec extends NamedCompletion {

        /**
         * The text that’s rendered in each row of the dropdown.
         *
         * @remarks
         * Fig uses the name prop for parsing purposes. It is important the name pro
         * exactly matches the CLI tool. If you want to customise it what is says in the
         * dropdown, please use `displayName`.
         */
        name: string;
        /**
         * The text that gets rendered at the bottom of the autocomplete box.
         * Keep it short and direct!
         */
        description?: string;
        /**
         * A list of sub-commands for this spec.
         */
        subcommands?: Command[];
        /**
         * A list of options for this spec.
         */
        options?: Option[];
        /**
         * A list of args or a single arg.
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
        additionalSuggestions?: Suggestion[];
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#subcommand-object
     */
    export interface Command extends NamedCompletion {

        /**
         * A list of sub-commands for this command.
         */
        subcommands?: Command[];
        /**
         * A list of options for this command.
         */
        options?: Option[];
        /**
         * A list of args or a single arg.
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
        additionalSuggestions?: Suggestion[];
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

    /**
     * @see https://withfig.com/docs/autocomplete/api#option-object
     */
    export interface Option extends NamedCompletion {

        /**
         * A list of Suggestion to make custom suggestions.
         *
         * @remark
         * In most cases, what you are trying to accomplish should be done with the `args` prop.
         */
        additionalSuggestions?: Suggestion[];
        /**
         * A list of args or a single arg.
         *
         * @remark
         * If a subcommand takes an argument, please at least include an empty Arg Object
         * (e.g. {}). If you don't, Fig will assume the subcommand does not take an argument.
         * This means Fig will present the wrong suggestions.
         */
        args?: SingleOrArray<Arg>;
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#suggestion-object
     */
    export interface Suggestion extends NamedCompletion {

        /**
         * The type of suggestion, one of `folder`, `file`, `arg`, `subcommand`, `option`,
         * `special`.
         */
        type?: SuggestionType;
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#arg-object
     */
    export interface Arg extends Completion {

        /**
         * A list of string or Suggestion. Use this prop to specify custom suggestions
         * that aren't dependent upon the user's input or context. You most likely will
         * want to use a `generator` Object in the generator to create suggestions dynamically.
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
         * device to generate suggestions for arguments
         */
        generators?: SingleOrArray<Generator>;
        /**
         * Specifies that the argument is variadic and therefore repeats infinitely.
         *
         * @example
         * `echo` takes a variadic argument (`echo hello world ...`)
         */
        isVariadic?: boolean;
        /**
         * True if a CLI command is optional.
         */
        isOptional?: boolean;
        /**
         * Specifies that the argument is an entirely new command which Fig should complete on.
         *
         * @example
         * `time` and `builtin` have only one argument and this argument has the `isCommand` property
         */
        isCommand?: boolean;
        /**
         * Specifies that the argument is a script which Fig may complete on.
         *
         * @example
         * `python` take one argument which is a `.py` file. It is possible for Fig to offer for
         * completions on this .py file. See {@link https://withfig.com/docs/autocomplete/autocomplete-for-teams | Fig for Teams}
         */
        isScript?: boolean;
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
         * The shell command to execute in the user's current working directory. The output
         * is a string. It is then converted into an array of Suggestion objects using
         * `splitOn` or `postProcess`.
         */
        script?: StringOrFunction<string[], Suggestion[]>;
        /**
         * As splitting the output of script is such a common use case for `postProcess`, we
         * build the `splitOn` property. Simply define a string to split the output of script on.
         *
         * @example
         * "," or "\n" and Fig will do the work of the `postProcess` prop for you
         */
        splitOn?: string,
        /**
         * Define a function that takes a single input: the output of executing script. This function
         * then return an array of Suggestion objects that will be rendered by Fig.
         */
        postProcess?: Function<string, Suggestion[]>;
        /**
         * Defines a trigger that determines when to regenerate suggestions for this argument by
         * re-running the generators.
         */
        trigger?: StringOrFunction<string, boolean>;
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
         * Function that lets you filter the Suggestion objects output by the template.
         */
        filterTemplateSuggestions?: Function<Suggestion[], Suggestion[]>
    }
}
