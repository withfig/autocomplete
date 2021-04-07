/* eslint-disable @typescript-eslint/no-var-requires */
import { danger, markdown, schedule } from "danger";
import * as fs from "fs";
import {
  SourceFile,
  TransformerFactory,
  visitNode,
  visitEachChild,
  Node,
  ScriptTarget,
  createSourceFile,
  isPropertyAssignment,
  PropertyAssignment,
  Visitor,
  forEachChild,
  SyntaxKind,
  isStringLiteral,
  isFunctionExpression,
} from "typescript";

export const specTransformer: TransformerFactory<SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (node: Node) => {
      if (isPropertyAssignment(node)) {
        const typedNode = node as PropertyAssignment;
        if (typedNode.name.getText() === "script") {
          console.log(typedNode.initializer.getText());
        }
      }
      return visitEachChild(node, visitor, context);
    };
    return visitNode(sourceFile, visitor);
  };
};

const getAllScripts = (fileContent: Node) => {
  const scripts: string[] = [];
  const functions: [string, string][] = [];

  const visitor = (node: Node) => {
    if (isPropertyAssignment(node)) {
      const propertyKey: string = (node.name as any).escapedText;
      if (propertyKey === "script" && isStringLiteral(node.initializer)) {
        scripts.push(node.initializer.text);
      }
      if (isFunctionExpression(node.initializer)) {
        functions.push([
          propertyKey,
          fileContent
            .getFullText()
            .slice(node.initializer.pos, node.initializer.end),
        ]);
      }
    }
    forEachChild(node, visitor);
  };
  visitor(fileContent);
  return {
    scripts,
    functions,
  };
};

const updatedFiles = danger.git.modified_files
  .concat(danger.git.created_files)
  .filter((file) => file.includes("dev/"));

let message = "";
if (updatedFiles.length > 0) {
  updatedFiles.forEach((fileName) => {
    const content = fs.readFileSync(fileName, { encoding: "utf-8" });
    const d = createSourceFile("temp", content, ScriptTarget.Latest);
    const allScripts = getAllScripts(d);
    message += `## ${fileName}:
### Scripts:
${allScripts.scripts.map((s) => `- \`${s}\``).join("\n")}

### Functions:
${allScripts.functions
  .map(
    ([key, value]) => `**${key}:**
\`\`\`typescript
${value}
\`\`\`
`
  )
  .join("\n")}
`;
  });
  markdown(`# All Scripts
${message}`);
} else {
  markdown("# No scripts found");
}
