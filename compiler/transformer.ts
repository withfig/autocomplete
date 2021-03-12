import { SourceFile, TransformerFactory, Node } from 'typescript';
import * as ts from 'typescript';

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

            if(ts.isVariableDeclaration(node) && !updated) {

                updated = true;
                return ts.updateVariableDeclaration(node, ts.factory.createIdentifier(SPEC_NAME), node.type, node.initializer);
            }

            return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(sourceFile, visitor);
    }
}