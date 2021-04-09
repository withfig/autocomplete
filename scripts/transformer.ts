import {
  factory,
  isVariableStatement,
  Node,
  SourceFile,
  SyntaxKind,
  TransformerFactory,
  updateVariableDeclaration,
  updateVariableDeclarationList,
  updateVariableStatement,
  VariableStatement,
  visitEachChild,
  visitNode,
} from "typescript";

// The name of the spec variable
const SPEC_NAME = "completionSpec";
const EXPORT_KEYWORD = SyntaxKind.ExportKeyword;

/**
 * The TypeScript transformer to rename the export spec variable name to SPEC_NAME,
 * and remove the export keyword.
 *
 * @param context The current context
 */
export const specTransformer: TransformerFactory<SourceFile> = (context) => {
  return (sourceFile) => {
    let updated = false;
    const visitor = (node: Node) => {
      if (!updated && isVariableStatement(node)) {
        const { declarationList, modifiers } = node as VariableStatement;
        // Only process if there is a modifier, and if this modifier
        // is an export.
        if (
          modifiers &&
          modifiers.length === 1 &&
          modifiers[0].kind === EXPORT_KEYWORD
        ) {
          const variableNode = declarationList.declarations[0];

          updated = true;

          // Update the variable name to SPEC_NAME
          const newVariableNode = updateVariableDeclaration(
            variableNode,
            factory.createIdentifier(SPEC_NAME),
            variableNode.type,
            variableNode.initializer
          );
          const newDeclarationlist = updateVariableDeclarationList(
            declarationList,
            [newVariableNode]
          );

          // Remove the export keyword
          return updateVariableStatement(node, [], newDeclarationlist);
        }
      }
      return visitEachChild(node, visitor, context);
    };
    return visitNode(sourceFile, visitor);
  };
};
