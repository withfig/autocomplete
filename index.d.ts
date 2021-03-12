declare namespace Fig {

    /**
     * A simple completion object, which does not have a required
     * name by default. Use NamedCompletion to get a required name.
     */
    export interface Completion {

        name?: SingleOrArray<string>;
        displayName?: string;
        insertValue?: string;
        description?: string;
        icon?: string;
    }

    /**
     * Same as a Completion, but with a required name.
     */
    export interface NamedCompletion extends Omit<Completion, 'name'>{

        name: SingleOrArray<string>;
    }

    // All the available templates
    export type Template = 'filepaths' | 'folders';

    // A single T object or an array of this T object
    export type SingleOrArray<T> = T | T[];

    // A string or a function which can have a T argument and a R result,
    // both set to void by default
    export type StringOrFunction<T = void, R = void> = string | Function<T, R>;

    // A function which can have a T argument and a R result, both
    // set to void by default
    export type Function<T = void, R = void> = (param: T) => R;

    /**
     * The base object which should be used at the root level of the
     * specs declaration.
     *
     * @see https://withfig.com/docs/autocomplete/api#root-object
     */
    export interface Spec extends Command {}

    /**
     * @see https://withfig.com/docs/autocomplete/api#subcommand-object
     */
    export interface Command extends NamedCompletion {

        subcommands?: Command[];
        options?: Option[];
        args?: SingleOrArray<Arg>;
        additionalSuggestions?: Suggestion[];
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#option-object
     */
    export interface Option extends NamedCompletion {

        additionalSuggestion?: Suggestion[];
        args?: SingleOrArray<Arg>;
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#suggestion-object
     */
    export interface Suggestion extends NamedCompletion {

        type?: string;
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#arg-object
     */
    export interface Arg extends Completion {

        suggestions?: Suggestion[];
        template?: Template;
        generators?: SingleOrArray<Generator>;
        variadic?: boolean;
        isOptional?: boolean;
    }

    /**
     * @see https://withfig.com/docs/autocomplete/api#generator-object
     */
    export interface Generator {

        template?: string;
        script?: StringOrFunction<Array<String>>;
        splitOn?: string,
        postProcess?: StringOrFunction<string, Suggestion[]>;
        trigger?: StringOrFunction;
        filterTerm?: StringOrFunction;
        custom?: Function<any>;
        filterTemplateSuggestions?: Function<Suggestion[]>
    }
}
