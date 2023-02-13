const completionSpec: Fig.Spec = {
  name: "join",
  description:
    "The join utility performs an 'equality join' on the specified files and writes the result to the standard output. The 'join field' is the field in each file by which the files are compared. The first field in each line is used by default. There is one line in the output for each pair of lines in file1 and file2 which have identical join fields. Each output line consists of the join field, the remaining fields from file1 and then the remaining fields from file2",
  options: [
    {
      name: "-a",
      description:
        "In addition to the default output, produce a line for each unpairable line in file file_number",
      args: {
        name: "file_number",
      },
    },
    {
      name: "-e",
      description: "Replace empty output fields with string",
      args: {
        name: "string",
      },
    },
    {
      name: "-o",
      description:
        "The -o option specifies the fields that will be output from each file for each line with matching join fields.  Each element of list has either the form file_number.field, where file_number is a file number and field is a field number, or the form ‘0’ (zero), representing the join field.  The elements of list must be either comma (',') or whitespace separated.  (The latter requires quoting to protect it from the shell, or, a simpler approach is to use multiple -o options.)",
      args: {
        name: "list",
      },
    },
    {
      name: "-t",
      description:
        "Use character char as a field delimiter for both input and output. Every occurrence of char in a line is significant",
      args: {
        name: "char",
      },
    },
    {
      name: "-v",
      description:
        "Do not display the default output, but display a line for each unpairable line in file file_number. The options -v 1 and -v 2 may be specified at the same time",
      args: {
        name: "file_number",
      },
    },
    {
      name: "-1",
      description: "Join on the field'th field of file1",
      args: {
        name: "field",
      },
    },
    {
      name: "-2",
      description: "Join on the field'th field of file2",
      args: {
        name: "field",
      },
    },

    {
      name: "-j",
      description: "Join on the field'th field of both file1 and file2",
      args: {
        name: "field",
      },
    },
  ],
  args: [
    {
      name: "file1",
      description: "First file in the join operation",
    },
    {
      name: "file2",
      description: "Second file in the join operation",
    },
  ],
};
export default completionSpec;
