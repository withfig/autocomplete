/* eslint-disable @typescript-eslint/no-var-requires */
import { danger, markdown } from "danger";
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

const getAllScripts = (node: Node) => {
  const scripts: string[] = [];
  const visitor = (node: Node) => {
    if (isPropertyAssignment(node)) {
      const typedNode = node;
      const propertyKey: string = (typedNode.name as any).escapedText;
      if (propertyKey === "script" && isStringLiteral(typedNode.initializer)) {
        scripts.push(typedNode.initializer.text);
      }
    }
    forEachChild(node, visitor);
  };
  visitor(node);
  return scripts;
};

const updatedFiles = danger.git.modified_files
  .concat(danger.git.created_files)
  .filter((file) => file.includes("dev/"));

if (updatedFiles.length > 0) {
  markdown("## All Scripts");
  updatedFiles.forEach((fileName) => {
    const content = fs.readFileSync(fileName, { encoding: "utf-8" });
    const d = createSourceFile("temp", content, ScriptTarget.Latest);
    const allScripts = getAllScripts(d);
    markdown(
      `### ${fileName}:
${allScripts.map((s) => `- \`${s}\``).join("\n")}`
    );
  });
} else {
  markdown("## No scripts found");
}
