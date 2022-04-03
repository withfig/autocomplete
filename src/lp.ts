const prioritySuggestions: (string | Fig.Suggestion)[] = Array.from(
  { length: 100 },
  (_, i) => i + 1
).map((item) => item.toString());

const timeSuggestions: (string | Fig.Suggestion)[] = [
  "hold",
  "immediate",
  "restart",
  "resume",
];

const completionSpec: Fig.Spec = {
  name: "lp",
  description: "Print files",
  options: [
    {
      name: "-E",
      description: "Force encryption when connecting to the server",
    },
    {
      name: "-U",
      description:
        "Specifies the username to use when connecting to the server",
      args: {
        name: "Username",
      },
    },
    {
      name: "-c",
      description:
        "This  option is provided for backwards-compatibility only. On systems that support it, this option forces the print file to be copied to the spool directory before printing.  In CUPS, print files are always sent to the scheduler via IPP which has the  same effect",
    },
    {
      name: "-d",
      description: "Print files to the named printer",
      args: {
        name: "Destination printer name",
      },
    },
    {
      name: "-h",
      description: "Chooses an alternate server",
      args: {
        name: "hostname[:port]",
      },
    },
    {
      name: "-i",
      description: "Specifies an existing job to modify",
      args: {
        name: "job-id",
      },
    },
    {
      name: "-m",
      description: "Sends an email when the job is completed",
    },
    {
      name: "-n",
      description: "Sets the number of copies to print",
      args: {
        name: "copies",
      },
    },
    {
      name: "-q",
      description:
        "Sets the job priority from 1 (lowest) to 100 (highest). The default priority is 50",
      args: {
        name: "priority",
        suggestions: prioritySuggestions,
        default: "50",
      },
    },
    {
      name: "-s",
      description: "Do not report the resulting job IDs (silent mode)",
    },
    {
      name: "-t",
      description: "Sets the job name",
      args: {
        name: "name",
      },
    },
    {
      name: "-H",
      description:
        "Specifies when the job should be printed.  A value of immediate will print the file immediately, a value of hold will hold the job indefinitely, and a UTC time value (HH:MM) will hold the job until the specified UTC (not local) time. Use a value of resume with the -i option to resume a held job.  Use a value of restart with the -i option to restart a completed job",
      args: {
        name: "pages",
      },
    },
    {
      name: "-P",
      description:
        'Specifies which pages to print in the document. The list can contain a list of numbers and ranges (#-#) separated by commas, e.g., "1,3-5,16". The page numbers refer to the output pages and not the document\'s original  pages - options like  "number-up" can affect the numbering of the pages',
      args: {
        name: "hh:mm",
        suggestions: timeSuggestions,
      },
    },
    {
      name: "-o",
      description: "Sets one or more job options",
      args: {
        name: "name=value",
      },
    },
    {
      name: "--help",
      description: "Show help for lp",
    },
  ],
  args: {
    template: "filepaths",
    suggestCurrentToken: true,
    description: "Filepath you want to print",
  },
};
export default completionSpec;
