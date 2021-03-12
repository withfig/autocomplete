import { Option } from './Option';
import { NamedCompletion, SingleOrArray } from './fig';
import { Arg } from './Arg';
import { Suggestion } from './Suggestion';

export interface Command extends NamedCompletion {

    subcommands?: Command[];
    options?: Option[];
    args?: SingleOrArray<Arg>;
    additionalSuggestions?: Suggestion[];
}