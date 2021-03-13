const clearCompletionSpec: Fig.Spec = {
  name: 'clear',
  description: 'clear the terminal screen',
  options: [
    {
      name: ['-T'],
      description: 'indicates the type of terminal',
      args: {
        name: 'type'
      }
    },
    {
      name: ['-V'],
      description: 'reports version of ncurses used in this program, and exits'
    },
    {
      name: ['-x'],
      description: "do not attempt to clear terminal's scrollback buffer using the extended E3 capability"
    }
  ]
}