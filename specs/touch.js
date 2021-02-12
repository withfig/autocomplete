var completionSpec = {
  name: 'touch',
  description: 'change file timestamps',
  options: [
    { name: [ '-a' ], description: 'change only the access time' },
    {
      name: [ '-c', '--no-create' ],
      description: 'do not create any files'
    },
    {
      name: [ '-d', '--date', '-f' ],
      description: 'parse STRING and use it instead of current time',
      args: { name: 'STRING' }
    },
    {
      name: [ '-h', '--no-dereference' ],
      description: 'affect each symbolic link instead of any referenced file (useful only on systems that can change the timestamps of a symlink)'
    },
    {
      name: [ '-m' ],
      description: 'change only the modification time'
    },
    {
      name: [ '-r', '--reference' ],
      description: "use this file's times instead of current time",
      args: { name: 'FILE' }
    },
    {
      name: [ '-t' ],
      description: 'use [[CC]YY]MMDDhhmm[.ss] instead of current time',
      args: {
        name: "stamp"
      }
    },
    {
      name: [ '--time', '-a', '-m' ],
      description: 'WORD is modify or mtime: equivalent to',
      args: { name: 'WORD' }
    },
    { name: [ '--help' ], description: 'display this help and exit' },
    {
      name: [ '--version' ],
      description: 'output version information and exit'
    }
  ]
}