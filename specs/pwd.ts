const pwd: Fig.Spec = {
  name: 'pwd',
  description: 'print name of current/working directory',
  options: [
    {
      name: [ '-L', '--logical' ],
      description: 'use PWD from environment, even if it contains symlinks'
    },
    { name: [ '-P', '--physical' ], description: 'avoid all symlinks' },
    { name: [ '--help' ], description: 'display this help and exit' },
    {
      name: [ '--version' ],
      description: 'output version information and exit'
    }
  ]
}