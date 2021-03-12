import { StringOrFunction, Function } from './fig';
import { Suggestion } from './Suggestion';

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