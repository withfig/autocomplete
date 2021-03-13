import {
    SourceFile,
    TransformerFactory,
    Node,
    VariableDeclarationList,
    isVariableDeclaration,
    updateVariableDeclaration,
    visitEachChild,
    visitNode,
    factory,
} from 'typescript';

// The name of the spec variable
const SPEC_NAME = 'completionSpec';

/**
 * The TypeScript transformer to rename the spec variable name to SPEC_NAME.
 *
 * @param context The current context
 */
export const variableNameTransformer: TransformerFactory<SourceFile> = context => {

    return sourceFile => {

        let updated = false;

        const visitor = (node: Node) => {

            if(!updated && isVariableDeclaration(node)) {

                const declarationList = node.parent as VariableDeclarationList;

                // Change the variable name if the declaration list flag is equal to 2
                // (2 is const), or if the name of the variable is SPEC_NAME.
                // That means the spec variable must be the only const in the file, or
                // be equal to SPEC_NAME (only in JS files)
                if(declarationList.flags === 2 || ('escapedText' in node.name && node.name.escapedText === SPEC_NAME)) {

                    updated = true;
                    return updateVariableDeclaration(node, factory.createIdentifier(SPEC_NAME), node.type, node.initializer);
                }
            }

            return visitEachChild(node, visitor, context);
        };

        return visitNode(sourceFile, visitor);
    }
}