import { NamedCompletion, SingleOrArray } from './fig';
import { Suggestion } from './Suggestion';
import { Arg } from './Arg';

export interface Option extends NamedCompletion {

    additionalSuggestion?: Suggestion[];
    args?: SingleOrArray<Arg>;
}