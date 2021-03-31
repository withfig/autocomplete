export const completionSpec: Fig.Spec = {
  name: 'source',
  description: 'Source files in shell',
  args: [
    {
      variadic: true,
      name: 'File to source',
      template: 'filepaths',
    },
  ],
};
