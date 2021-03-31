export const completionSpec: Fig.Spec = {
  name: 'touch',
  description: 'change file timestamps',
  args: {
    name: 'file',
  },
  options: [
    { name: ['-a'], description: 'change only the access time' },
    {
      name: ['-c', '--no-create'],
      description: 'do not create any files',
    },
    {
      name: ['-d', '--date'],
      description: 'parse string and use it instead of current time',
      args: { name: 'string' },
    },
    {
      name: ['-h', '--no-dereference'],
      description:
        'affect each symbolic link instead of any referenced file (useful only on systems that can change the timestamps of a symlink)',
    },
    {
      name: ['-m'],
      description: 'change only the modification time',
    },
    {
      name: ['-r', '--reference'],
      description: "use this file's times instead of current time",
      args: { name: 'file' },
    },
    {
      name: ['-t'],
      description: 'use [[CC]YY]MMDDhhmm[.ss] instead of current time',
      args: {
        name: 'stamp',
      },
    },
    {
      name: ['--time'],
      description: 'change the specified time',
      args: { name: 'WORD' },
    },
    { name: ['--help'], description: 'display this help and exit' },
    {
      name: ['--version'],
      description: 'output version information and exit',
    },
  ],
};
