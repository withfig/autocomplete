const completionSpec: Fig.Spec = {
  name: "rich",
  description: "Rich text and formatting in the terminal",
  args: {
    name: "path/text/url",
    suggestions: [{ name: "-", description: "Read from stdin" }],
    template: "filepaths",
  },
  options: [
    {
      name: ["-p", "--print"],
      description:
        "Print console markup. See https://rich.readthedocs.io/en/latest/markup.html",
    },
    { name: ["-u", "--rule"], description: "Display a horizontal rule" },
    { name: ["-j", "--json"], description: "Display as JSON" },
    { name: ["-m", "--markdown"], description: "Display as markdown" },
    { name: "--rst", description: "Display restructured text" },
    { name: "--csv", description: "Display CSV as a table" },
    { name: "--ipynb", description: "Display Jupyter notebook" },
    { name: "--syntax", description: "Syntax highlighting" },
    { name: "--inspect", description: "Inspect a python object" },
    {
      name: ["-h", "--head"],
      args: { name: "lines" },
      description: "Display first LINES of the file",
      // NOTE: there's no way to specify --syntax OR --csv, only both.
      // However, the implementation boosts the priority of all dependencies
      // which means it's okay regardless.
      dependsOn: ["--syntax", "--csv"],
    },
    {
      name: ["-t", "--tail"],
      args: { name: "lines" },
      description: "Display last LINES of the file",
      dependsOn: ["--syntax", "--csv"],
    },
    {
      // NOTE: Commenting out because of the duplicate name, -j
      // name: ["-j", "--emoji"],
      name: "--emoji",
      description: "Enable emoji code. e.g. :sparkle:",
    },
    { name: ["-l", "--left"], description: "Align to left" },
    { name: ["-r", "--right"], description: "Align to right" },
    { name: ["-c", "--center"], description: "Align to center" },
    { name: ["-L", "--text-left"], description: "Justify text to left" },
    { name: ["-R", "--text-right"], description: "Justify text to right" },
    { name: ["-C", "--text-center"], description: "Justify text to center" },
    {
      name: ["-F", "--text-full"],
      description: "Justify text to both left and right edges",
    },
    {
      name: "--soft",
      description: "Enable soft wrapping of text",
      dependsOn: ["--print"],
    },
    {
      name: ["-e", "--expand"],
      description: "Expand to full width",
      dependsOn: ["--panel"],
    },
    {
      name: ["-w", "--width"],
      args: { name: "size" },
      description: "Fit output to SIZE characters",
    },
    {
      name: ["-W", "--max-width"],
      args: { name: "size" },
      description: "Set maximum width to SIZE characters",
    },
    {
      // TODO: Suggestions for style
      name: ["-s", "--style"],
      args: { name: "style" },
      description: "Set text style to STYLE",
    },
    {
      // TODO: Suggestions for style
      name: "--rule-style",
      args: { name: "style" },
      description: "Set rule style to STYLE",
      dependsOn: ["--rule"],
    },
    {
      name: "--rule-char",
      args: { name: "character" },
      description: "Use CHARACTER to generate a line with --rule",
      dependsOn: ["--rule"],
    },
    {
      name: ["-d", "--padding"],
      args: { name: "TOP,RIGHT,BOTTOM,LEFT" },
      description:
        "Padding around output. 1, 2 or 4 comma separated integers, e.g. 2,4",
    },
    {
      name: ["-a", "--panel"],
      args: {
        name: "box",
        suggestions: [
          "ascii",
          "ascii2",
          "double",
          "heavy",
          "none",
          "rounded",
          "square",
        ],
      },
      description: "Set panel type to BOX",
    },
    {
      // TODO: Suggestions for style
      name: ["-S", "--panel-style"],
      args: { name: "style" },
      description: "Set the panel style to STYLE",
      dependsOn: ["--panel"],
    },
    {
      // TODO: scrape styles page for themes
      name: "--theme",
      args: { name: "theme" },
      description:
        "Set syntax theme to THEME. See https://pygments.org/styles/",
    },
    {
      name: ["-n", "--line-numbers"],
      description: "Enable line number in syntax",
    },
    {
      name: ["-g", "--guides"],
      description: "Enable indentation guides in syntax highlighting",
    },
    {
      // TODO: scrape lexers page for the suggestions
      name: ["-x", "--lexer"],
      args: { name: "lexer" },
      description:
        "Use LEXER for syntax highlighting. See https://pygments.org/docs/lexers/",
    },
    {
      name: ["-y", "--hyperlinks"],
      description: "Render hyperlinks in markdown",
    },
    {
      name: "--no-wrap",
      description: "Don't word wrap syntax highlighted files",
    },
    {
      name: "--title",
      args: { name: "text" },
      description: "Set panel title to TEXT",
    },
    {
      name: "--caption",
      args: { name: "text" },
      description: "Set panel caption to TEXT",
    },
    {
      name: "--force-terminal",
      description: "Force terminal output when not writing to a terminal",
    },
    {
      name: ["-o", "--export-html"],
      args: { name: "path", template: "filepaths", suggestCurrentToken: true },
      description: "Write HTML to PATH",
    },
    {
      name: "--export-svg",
      args: { name: "path", template: "filepaths", suggestCurrentToken: true },
      description: "Write SVG to PATH",
    },
    { name: "--pager", description: "Display in an interactive pager" },
    { name: ["-v", "--version"], description: "Print version and exit" },
    { name: "--help", description: "Show this message and exit" },
  ],
};

export default completionSpec;
