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
} from 'typescript'

// The name of the spec variable
const SPEC_NAME = 'completionSpec'
const SPEC_ENDING = 'CompletionSpec'

/**
 * The TypeScript transformer to rename the spec variable name to SPEC_NAME.
 *
 * @param context The current context
 */
export const variableNameTransformer: TransformerFactory<SourceFile> = context => {
  return (sourceFile) => {
    let updated = false
    const visitor = (node: Node) => {
      if (!updated && isVariableDeclaration(node)) {
        const declarationList = node.parent as VariableDeclarationList

        // Change the variable name if the declaration list flag is equal to 2
        // (2 is const) and also if the name ends with CompletionSpec
        if (
          declarationList.flags === 2 &&
          'escapedText' in node.name &&
          node.name.escapedText.toString().endsWith(SPEC_ENDING)
        ) {
          updated = true
          return updateVariableDeclaration(
            node,
            factory.createIdentifier(SPEC_NAME),
            node.type,
            node.initializer
          )
        }
      }
      return visitEachChild(node, visitor, context)
    }
    return visitNode(sourceFile, visitor)
  }
}
