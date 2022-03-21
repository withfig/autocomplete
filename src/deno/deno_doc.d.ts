/* eslint-disable @withfig/fig-linter/no-missing-default-export */

/*
https://github.com/denoland/deno_doc/blob/efe4939ebbcdcd36ac1a2969e3a9db72fcfe49db/lib/types.d.ts

MIT License

Copyright (c) 2020-2022 the Deno authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Copyright 2020-2022 the Deno authors. All rights reserved. MIT license.

export type DocNode =
  | DocNodeModuleDoc
  | DocNodeFunction
  | DocNodeVariable
  | DocNodeEnum
  | DocNodeClass
  | DocNodeTypeAlias
  | DocNodeNamespace
  | DocNodeInterface
  | DocNodeImport;

/** Indicates how the documentation node was declared. `"private"` indicates
 * the node is un-exported. `"export"` indicates it is exported from the current
 * module. `"declare"` indicates that it is a type only declaration. */
export type DeclarationKind = "private" | "export" | "declare";

interface DocNodeBase {
  kind: DocNodeKind;
  name: string;
  location: Location;
  declarationKind: DeclarationKind;
  jsDoc?: JsDoc;
}

export type DocNodeKind =
  | "moduleDoc"
  | "function"
  | "variable"
  | "enum"
  | "class"
  | "typeAlias"
  | "namespace"
  | "interface"
  | "import";

export interface DocNodeModuleDoc extends DocNodeBase {
  kind: "moduleDoc";
  jsDoc: JsDoc;
}

export interface DocNodeFunction extends DocNodeBase {
  kind: "function";
  functionDef: FunctionDef;
}

export interface DocNodeVariable extends DocNodeBase {
  kind: "variable";
  variableDef: VariableDef;
}

export interface DocNodeEnum extends DocNodeBase {
  kind: "enum";
  enumDef: EnumDef;
}

export interface DocNodeClass extends DocNodeBase {
  kind: "class";
  classDef: ClassDef;
}

export interface DocNodeTypeAlias extends DocNodeBase {
  kind: "typeAlias";
  typeAliasDef: TypeAliasDef;
}

export interface DocNodeNamespace extends DocNodeBase {
  kind: "namespace";
  namespaceDef: NamespaceDef;
}

export interface DocNodeInterface extends DocNodeBase {
  kind: "interface";
  interfaceDef: InterfaceDef;
}

export interface DocNodeImport extends DocNodeBase {
  kind: "import";
  importDef: ImportDef;
}

export type Accessibility = "public" | "protected" | "private";

export interface ClassDef {
  isAbstract: boolean;
  constructors: ClassConstructorDef[];
  properties: ClassPropertyDef[];
  indexSignatures: ClassIndexSignatureDef[];
  methods: ClassMethodDef[];
  extends?: string;
  implements: TsTypeDef[];
  typeParams: TsTypeParamDef[];
  superTypeParams: TsTypeDef[];
  decorators?: DecoratorDef[];
}

export interface ClassConstructorDef {
  jsDoc?: JsDoc;
  accessibility?: Accessibility;
  name: string;
  params: ParamDef[];
  location: Location;
}

export interface ClassIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
}

export interface ClassMethodDef {
  jsDoc?: JsDoc;
  accessibility?: Accessibility;
  optional: boolean;
  isAbstract: boolean;
  isStatic: boolean;
  name: string;
  kind: MethodKind;
  functionDef: FunctionDef;
  location: Location;
}

export interface ClassPropertyDef {
  jsDoc?: JsDoc;
  tsType?: TsTypeDef;
  readonly: boolean;
  accessibility?: Accessibility;
  optional: boolean;
  isAbstract: boolean;
  isStatic: boolean;
  name: string;
  decorators?: DecoratorDef[];
  location: Location;
}

export interface DecoratorDef {
  name: string;
  args?: string[];
  location: Location;
}

export interface EnumDef {
  members: EnumMemberDef[];
}

export interface EnumMemberDef {
  name: string;
  init?: TsTypeDef;
  jsDoc?: JsDoc;
}

export interface FunctionDef {
  params: ParamDef[];
  returnType?: TsTypeDef;
  isAsync: boolean;
  isGenerator: boolean;
  typeParams: TsTypeParamDef[];
  decorators?: DecoratorDef[];
}

export interface ImportDef {
  src: string;
  imported?: string;
}

export interface InterfaceDef {
  extends: TsTypeDef[];
  methods: InterfaceMethodDef[];
  properties: InterfacePropertyDef[];
  callSignatures: InterfaceCallSignatureDef[];
  indexSignatures: InterfaceIndexSignatureDef[];
  typeParams: TsTypeParamDef[];
}

export interface InterfaceCallSignatureDef {
  location: Location;
  jsDoc?: JsDoc;
  params: ParamDef[];
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export interface InterfaceIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
}

export interface InterfaceMethodDef {
  name: string;
  kind: MethodKind;
  location: Location;
  jsDoc?: JsDoc;
  computed?: boolean;
  optional: boolean;
  params: ParamDef[];
  returnType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export interface InterfacePropertyDef {
  name: string;
  location: Location;
  jsDoc?: JsDoc;
  params: ParamDef[];
  readonly?: boolean;
  computed: boolean;
  optional: boolean;
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export interface JsDoc {
  doc?: string;
  tags?: JsDocTag[];
}

export type JsDocTagKind =
  | "callback"
  | "constructor"
  | "deprecated"
  | "enum"
  | "example"
  | "extends"
  | "module"
  | "param"
  | "public"
  | "private"
  | "property"
  | "protected"
  | "readonly"
  | "return"
  | "template"
  | "this"
  | "typedef"
  | "type"
  | "unsupported";

export type JsDocTag =
  | JsDocTagOnly
  | JsDocTagDoc
  | JsDocTagNamed
  | JsDocTagTyped
  | JsDocTagNamedTyped
  | JsDocTagParam
  | JsDocTagReturn
  | JsDocTagUnsupported;

export interface JsDocTagBase {
  kind: JsDocTagKind;
}

export interface JsDocTagOnly extends JsDocTagBase {
  kind:
    | "constructor"
    | "module"
    | "public"
    | "private"
    | "protected"
    | "readonly";
}

export interface JsDocTagDoc extends JsDocTagBase {
  kind: "deprecated" | "example";
  doc?: string;
}

export interface JsDocTagNamed extends JsDocTagBase {
  kind: "callback" | "template";
  name: string;
  doc?: string;
}

export interface JsDocTagTyped extends JsDocTagBase {
  kind: "enum" | "extends" | "this" | "type";
  type: string;
  doc?: string;
}

export interface JsDocTagNamedTyped extends JsDocTagBase {
  kind: "property" | "typedef";
  name: string;
  type: string;
  doc?: string;
}

export interface JsDocTagParam extends JsDocTagBase {
  kind: "param";
  name: string;
  type?: string;
  doc?: string;
}

export interface JsDocTagReturn extends JsDocTagBase {
  kind: "return";
  type?: string;
  doc?: string;
}

export interface JsDocTagUnsupported extends JsDocTagBase {
  kind: "unsupported";
  value: string;
}

export interface LiteralCallSignatureDef {
  params: ParamDef[];
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export type LiteralDefKind =
  | "number"
  | "string"
  | "template"
  | "boolean"
  | "bigInt";

export type LiteralDef =
  | LiteralDefNumber
  | LiteralDefBigInt
  | LiteralDefString
  | LiteralDefTemplate
  | LiteralDefBoolean;

interface LiteralDefBase {
  kind: LiteralDefKind;
}

export interface LiteralDefNumber extends LiteralDefBase {
  kind: "number";
  number: number;
}

export interface LiteralDefBigInt extends LiteralDefBase {
  kind: "bigInt";
  string: string;
}

export interface LiteralDefString extends LiteralDefBase {
  kind: "string";
  string: string;
}

export interface LiteralDefTemplate extends LiteralDefBase {
  kind: "template";
  tsTypes: TsTypeDef[];
}

export interface LiteralDefBoolean extends LiteralDefBase {
  kind: "boolean";
  boolean: boolean;
}

export interface LiteralIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
}

export interface LiteralMethodDef {
  name: string;
  kind: MethodKind;
  params: ParamDef[];
  computed?: boolean;
  optional: boolean;
  returnType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export interface LiteralPropertyDef {
  name: string;
  params: ParamDef[];
  readonly?: boolean;
  computed: boolean;
  optional: boolean;
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export interface Location {
  filename: string;
  line: number;
  col: number;
}

export type MethodKind = "method" | "getter" | "setter";

export interface NamespaceDef {
  elements: DocNode[];
}

export type ObjectPatPropDef =
  | ObjectPatPropAssignDef
  | ObjectPatPropKeyValueDef
  | ObjectPatPropRestDef;

export interface ObjectPatPropAssignDef {
  kind: "assign";
  key: string;
  value?: string;
}

export interface ObjectPatPropKeyValueDef {
  kind: "keyValue";
  key: string;
  value: ParamDef;
}

export interface ObjectPatPropRestDef {
  kind: "rest";
  arg: ParamDef;
}

export type ParamDef =
  | ParamArrayDef
  | ParamAssignDef
  | ParamIdentifierDef
  | ParamObjectDef
  | ParamRestDef;

export interface ParamArrayDef {
  kind: "array";
  elements: (ParamDef | undefined)[];
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}

export interface ParamAssignDef {
  kind: "assign";
  left: ParamDef;
  right: string;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}

export interface ParamIdentifierDef {
  kind: "identifier";
  name: string;
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}

export interface ParamObjectDef {
  kind: "object";
  props: ObjectPatPropDef[];
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}

export interface ParamRestDef {
  kind: "rest";
  arg: ParamDef;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}

export type TruePlusMinus = true | "+" | "-";

export interface TsConditionalDef {
  checkType: TsTypeDef;
  extendsType: TsTypeDef;
  trueType: TsTypeDef;
  falseType: TsTypeDef;
}

export interface TsFnOrConstructorDef {
  constructor: boolean;
  tsType: TsTypeDef;
  params: ParamDef[];
  typeParams: TsTypeParamDef[];
}

export interface TsImportTypeDef {
  specifier: string;
  qualifier?: string;
  typeParams?: TsTypeDef[];
}

export interface TsIndexedAccessDef {
  readonly: boolean;
  objType: TsTypeDef;
  indexType: TsTypeDef;
}

export interface TsInferDef {
  typeParam: TsTypeParamDef;
}

export interface TsMappedTypeDef {
  readonly?: TruePlusMinus;
  typeParam: TsTypeParamDef;
  nameType?: TsTypeDef;
  optional?: TruePlusMinus;
  tsType?: TsTypeDef;
}

export interface TsTypeLiteralDef {
  methods: LiteralMethodDef[];
  properties: LiteralPropertyDef[];
  callSignatures: LiteralCallSignatureDef[];
  indexSignatures: LiteralIndexSignatureDef[];
}

export interface TsTypeOperatorDef {
  operator: string;
  tsType: TsTypeDef;
}

export interface TsTypeParamDef {
  name: string;
  constraint?: TsTypeDef;
  default?: TsTypeDef;
}

export interface TsTypePredicateDef {
  asserts: boolean;
  param: { type: "this" | "identifier"; name?: string };
  type?: TsTypeDef;
}

export type TsTypeDef =
  | TsTypeKeywordDef
  | TsTypeDefLiteral
  | TsTypeTypeRefDef
  | TsTypeUnionDef
  | TsTypeIntersectionDef
  | TsTypeArrayDef
  | TsTypeTupleDef
  | TsTypeTypeOperatorDef
  | TsTypeParenthesizedDef
  | TsTypeRestDef
  | TsTypeOptionalDef
  | TsTypeQueryDef
  | TsTypeThisDef
  | TsTypeFnOrConstructorDef
  | TsTypeConditionalDef
  | TsTypeImportTypeDef
  | TsTypeInferDef
  | TsTypeIndexedAccessDef
  | TsTypeMappedDef
  | TsTypeTypeLiteralDef
  | TsTypeTypePredicateDef;

interface TsTypeDefBase {
  repr: string;
  kind: TsTypeDefKind;
}

export interface TsTypeKeywordDef extends TsTypeDefBase {
  kind: "keyword";
  keyword: string;
}

export interface TsTypeDefLiteral extends TsTypeDefBase {
  kind: "literal";
  literal: LiteralDef;
}

export interface TsTypeTypeRefDef extends TsTypeDefBase {
  kind: "typeRef";
  typeRef: TsTypeRefDef;
}

export interface TsTypeUnionDef extends TsTypeDefBase {
  kind: "union";
  union: TsTypeDef[];
}

export interface TsTypeIntersectionDef extends TsTypeDefBase {
  kind: "intersection";
  intersection: TsTypeDef[];
}

export interface TsTypeArrayDef extends TsTypeDefBase {
  kind: "array";
  array: TsTypeDef;
}

export interface TsTypeTupleDef extends TsTypeDefBase {
  kind: "tuple";
  tuple: TsTypeDef[];
}

export interface TsTypeTypeOperatorDef extends TsTypeDefBase {
  kind: "typeOperator";
  typeOperator: TsTypeOperatorDef;
}

export interface TsTypeParenthesizedDef extends TsTypeDefBase {
  kind: "parenthesized";
  parenthesized: TsTypeDef;
}

export interface TsTypeRestDef extends TsTypeDefBase {
  kind: "rest";
  rest: TsTypeDef;
}

export interface TsTypeOptionalDef extends TsTypeDefBase {
  kind: "optional";
  optional: TsTypeDef;
}

export interface TsTypeQueryDef extends TsTypeDefBase {
  kind: "typeQuery";
  typeQuery: string;
}

export interface TsTypeThisDef extends TsTypeDefBase {
  kind: "this";
  this: boolean;
}

export interface TsTypeFnOrConstructorDef extends TsTypeDefBase {
  kind: "fnOrConstructor";
  fnOrConstructor: TsFnOrConstructorDef;
}

export interface TsTypeConditionalDef extends TsTypeDefBase {
  kind: "conditional";
  conditionalType: TsConditionalDef;
}

export interface TsTypeInferDef extends TsTypeDefBase {
  kind: "infer";
  infer: TsInferDef;
}

export interface TsTypeMappedDef extends TsTypeDefBase {
  kind: "mapped";
  mappedType: TsMappedTypeDef;
}

export interface TsTypeImportTypeDef extends TsTypeDefBase {
  kind: "importType";
  importType: TsImportTypeDef;
}

export interface TsTypeIndexedAccessDef extends TsTypeDefBase {
  kind: "indexedAccess";
  indexedAccess: TsIndexedAccessDef;
}

export interface TsTypeTypeLiteralDef extends TsTypeDefBase {
  kind: "typeLiteral";
  typeLiteral: TsTypeLiteralDef;
}

export interface TsTypeTypePredicateDef extends TsTypeDefBase {
  kind: "typePredicate";
  typePredicate: TsTypePredicateDef;
}

export type TsTypeDefKind =
  | "keyword"
  | "literal"
  | "typeRef"
  | "union"
  | "intersection"
  | "array"
  | "tuple"
  | "typeOperator"
  | "parenthesized"
  | "rest"
  | "optional"
  | "typeQuery"
  | "this"
  | "fnOrConstructor"
  | "conditional"
  | "importType"
  | "infer"
  | "indexedAccess"
  | "mapped"
  | "typeLiteral"
  | "typePredicate";

export interface TsTypeRefDef {
  typeParams?: TsTypeDef[];
  typeName: string;
}

export interface TypeAliasDef {
  tsType: TsTypeDef;
  typeParams: TsTypeParamDef[];
}

export type VariableDeclKind = "var" | "let" | "const";

export interface VariableDef {
  tsType?: TsTypeDef;
  kind: VariableDeclKind;
}
