const completionSpec: Fig.Spec = {
  name: "fzf-tmux",
  description: "Opens a fuzzy finder in a tmux pane",
  options: [
    {
      name: ["-x", "--extended"],
      description: "Enables extended-search mode",
      exclusiveOn: ["+x", "--no-extended"],
    },
    {
      name: ["+x", "--no-extended"],
      description: "Disables extended-search mode",
      exclusiveOn: ["-x", "--extended"],
    },
    {
      name: ["-e", "--exact"],
      description: "Enables Exact-match",
    },
    {
      name: "--algo",
      description: "Fuzzy matching algorithm",
      args: {
        name: "type",
        default: "v2",
        suggestions: ["v1", "v2"],
      },
    },
    {
      name: "-i",
      description: "Case-insensitive match (default: smart-case match)",
      exclusiveOn: ["+i"],
    },
    {
      name: "+i",
      description: "Case-sensitive match (default: smart-case match)",
      exclusiveOn: ["-i"],
    },
    {
      name: "--literal",
      description: "Do not normalize latin script letters before matching",
    },
    {
      name: ["-n", "--nth"],
      description:
        "Comma-separated list of field index expressions for limiting search scope",
      args: {
        name: "index expressions",
        description: "non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--with-nth",
      description:
        "Transform the presentation of each line using field index expressions",
      args: {
        name: "index expressions",
        description: "non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: ["-d", "--delimiter"],
      description: "Field delimiter regex (default: AWK-style)",
      args: {
        name: "STR",
        default: "AWK-style",
      },
    },
    {
      name: ["+s", "--no-sort"],
      description: "Do not sort the result",
    },
    {
      name: "--tac",
      description: "Reverse the order of the input",
    },
    {
      name: "--disabled",
      description: "Do not perform search",
    },
    {
      name: "--tiebreak",
      description:
        "Comma-separated list of sort criteria to apply when the scores are tied",
      args: {
        name: "criteria",
        default: "length",
        suggestions: ["length", "begin", "end", "index"],
      },
    },
    {
      name: ["-m", "--multi"],
      description: "Enable multi-select with tab/shift-tab",
      args: {
        name: "MAX",
        isOptional: true,
      },
    },
    {
      name: "--no-mouse",
      description: "Disable mouse",
    },
    {
      name: "--bind",
      description: "Custom key bindings. Refer to the man page",
      args: {
        name: "keybinds",
      },
    },
    {
      name: "--cycle",
      description: "Enable cyclic scroll",
    },
    {
      name: "--keep-right",
      description: "Keep the right end of the line visible on overflow",
    },
    {
      name: "--no-hscroll",
      description: "Disable horizontal scroll",
    },
    {
      name: "--hscroll-off",
      description:
        "Number of screen columns to keep to the right of the highlighted substring",
      args: {
        name: "columns",
        default: "10",
      },
    },
    {
      name: "--filepath-word",
      description: "Make word-wise movements respect path separators",
    },
    {
      name: "--jump-labels",
      description: "Label characters for jump and jump-accept",
      args: {
        name: "characters",
      },
    },
    {
      name: "--height",
      description:
        "Display fzf window below the cursor with the given height instead of using fullscreen",
      args: {
        name: "height",
        description: "height[%]",
      },
    },
    {
      name: "--min-height",
      description: "Minimum height when --height is given in percent",
      args: {
        name: "height",
        default: "10",
      },
    },
    {
      name: "--layout",
      description: "Choose layout",
      args: {
        name: "layout",
        default: "default",
        suggestions: ["default", "reverse", "reverse-list"],
      },
    },
    {
      name: "--border",
      description: "Draw border around the finder",
      args: {
        name: "style",
        isOptional: true,
        default: "rounded",
        suggestions: [
          "rounded",
          "sharp",
          "horizontal",
          "vertical",
          "top",
          "bottom",
          "left",
          "right",
          "none",
        ],
      },
    },
    {
      name: "--margin",
      description: "Screen margin (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "margin",
        description: "number",
      },
    },
    {
      name: "--padding",
      description: "Padding inside border (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "padding",
        description: "number",
      },
    },
    {
      name: "--info",
      description: "Finder info style",
      args: {
        name: "style",
        default: "default",
        suggestions: ["default", "inline", "hidden"],
      },
    },
    {
      name: "--prompt",
      description: "Input prompt",
      args: {
        name: "string",
        default: "'> '",
      },
    },
    {
      name: "--pointer",
      description: "Pointer to the current line",
      args: {
        name: "string",
        default: "'>'",
      },
    },
    {
      name: "--marker",
      description: "Multi-select marker",
      args: {
        name: "string",
        default: "'>'",
      },
    },
    {
      name: "--header",
      description: "String to print as header",
      args: {
        name: "string",
      },
    },
    {
      name: "--header-lines",
      description: "The first N lines of the input are treated as header",
      args: {
        name: "number",
      },
    },
    {
      name: "--ansi",
      description: "Enable processing of ANSI color codes",
    },
    {
      name: "--tabstop",
      description: "Number of spaces for a tab character",
      args: {
        name: "spaces",
        default: "8",
      },
    },
    {
      name: "--color",
      description: "Base scheme",
      args: {
        name: "color scheme",
        description: "(dark|light|16|bw) and/or custom colors",
        suggestions: ["dark", "light", "16", "bw"],
      },
    },
    {
      name: "--no-bold",
      description: "Do not use bold text",
    },
    {
      name: "--history",
      description: "History file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--history-size",
      description: "Maximum number of history entries",
      args: {
        name: "number",
        default: "1000",
      },
    },
    {
      name: "--preview",
      description: "Command to preview highlighted line ({})",
      args: {
        name: "command",
      },
    },
    {
      name: "--preview-window",
      description: "Preview window layout",
      args: {
        name: "options",
        isVariadic: true,
        default: "default: right:50%",
        suggestions: [
          "up",
          "down",
          "left",
          "right",
          "nowrap",
          "wrap",
          "nocycle",
          "cycle",
          "nofollow",
          "follow",
          "nohidden",
          "hidden",
          "default",
        ],
      },
    },
    {
      name: ["-q", "--query"],
      description: "Start the finder with the given query",
      args: {
        name: "string",
      },
    },
    {
      name: ["-1", "--select-1"],
      description: "Automatically select the only match",
    },
    {
      name: ["-0", "--exit-0"],
      description: "Exit immediately when there's no match",
    },
    {
      name: ["-f", "--filter"],
      description: "Filter mode. Do not start interactive finder",
      args: {
        name: "string",
      },
    },
    {
      name: "--print-query",
      description: "Print query as the first line",
    },
    {
      name: "--expect",
      description: "Comma-separated list of keys to complete fzf",
      args: {
        name: "keys",
      },
    },
    {
      name: "--read0",
      description: "Read input delimited by ASCII NUL characters",
    },
    {
      name: "--print0",
      description: "Print output delimited by ASCII NUL characters",
    },
    {
      name: "--sync",
      description: "Synchronous search for multi-staged filtering",
    },
    {
      name: "--version",
      description: "Display version information and exit",
    },
  ],
};

export default completionSpec;
