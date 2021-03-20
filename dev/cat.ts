export const catCompletionSpec: Fig.Spec = {

    name: "cat",
    description: "concatenate and print files",
    args: {
        isVariadic: true,
        template: "filepaths"
    }
}
