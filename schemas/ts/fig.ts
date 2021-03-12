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