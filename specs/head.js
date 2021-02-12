var completionSpec = {
  name: 'head',
  description: 'output the first part of files',
  options: [
    {
      name: [ '-c', '--bytes' ],
      description: "print the first K bytes of each file; with the leading `-', print all but the last K bytes of each file",
      args: { name: '[-]K' }
    },
    {
      name: [ '-n', '--lines' ],
      description: "print the first K lines instead of the first 10; with the leading `-', print all but the last K lines of each file",
      args: { name: '[-]K' }
    },
    {
      name: [ '-q', '--quiet', '--silent' ],
      description: 'never print headers giving file names'
    },
    {
      name: [ '-v', '--verbose' ],
      description: 'always print headers giving file names'
    },
    { name: [ '--help' ], description: 'display this help and exit' },
    {
      name: [ '--version' ],
      description: 'output version information and exit'
    }
  ]
}