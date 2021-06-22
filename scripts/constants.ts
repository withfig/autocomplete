// Folder names
export const SOURCE_FOLDER_NAME = "dev";
export const DESTINATION_FOLDER_NAME = "specs";

export const getBoilerplateSpecContent = (specName: string) => `
export const completionSpec: Fig.Spec = {
  name: "${specName}"
};`;
