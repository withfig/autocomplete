import { Completion, SingleOrArray, Template } from './fig';
import { Suggestion } from './Suggestion';
import { Generator } from './Generator';

export interface Arg extends Completion {

    suggestions?: Suggestion[];
    template?: Template;
    generators?: SingleOrArray<Generator>;
    variadic?: boolean;
    isOptional?: boolean;
}