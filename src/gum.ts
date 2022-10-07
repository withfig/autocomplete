const alignValues = ["left", "center", "right", "bottom", "middle", "top"];

const styleOptions: Fig.Option[] = [
  { name: "--background", description: "Background Color", args: {} },
  { name: "--foreground", description: "Foreground Color", args: {} },
  {
    name: "--border",
    description: "Border Style",
    args: {
      suggestions: ["none", "hidden", "normal", "rounded", "thick", "double"],
    },
  },
  {
    name: "--border-background",
    description: "Border Background Color",
    args: {},
  },
  {
    name: "--border-foreground",
    description: "Border Foreground Color",
    args: {},
  },
  {
    name: "--align",
    description: "Text Alignment",
    args: { suggestions: alignValues },
  },
  { name: "--height", description: "Text height", args: {} },
  { name: "--width", description: "Text width", args: {} },
  { name: "--margin", description: "Text margin", args: {} },
  { name: "--padding", description: "Text padding", args: {} },
  { name: "--bold", description: "Bold text" },
  { name: "--faint", description: "Faint text" },
  { name: "--italic", description: "Italicize text" },
  { name: "--strikethrough", description: "Strikethrough text" },
  { name: "--underline", description: "Underline text" },
];

const styleOptionGenerator = (element: string) =>
  styleOptions.map(
    (style): Fig.Option => ({
      ...style,
      name: (style.name as string).replace("--", `--${element}.`),
      description: `${style.description} for ${element}`,
    })
  );

const completionSpec: Fig.Spec = {
  name: "gum",
  description: "A tool for glamorous shell scripts",
  subcommands: [
    {
      name: "choose",
      description: "Choose an option from a list of choices",
      args: {
        name: "options",
        isVariadic: true,
        description: "Options to choose from",
      },
      options: [
        {
          name: "--height",
          description: "Height of the list",
          args: {},
        },
        {
          name: "--cursor",
          description:
            "Prefix to show on item that corresponds to the cursor position",
          args: {},
        },
        {
          name: "--cursor-prefix",
          description: "Prefix to show on the cursor item",
          args: {},
        },
        {
          name: "--selected-prefix",
          description: "Prefix to show on selected items",
          args: {},
        },
        {
          name: "--unselected-prefix",
          description: "Prefix to show on unselected items",
          args: {},
        },
        {
          name: "--selected",
          description: "Options that should start as selected",
          isRepeatable: true,
          args: {},
        },
        {
          name: "--limit",
          description: "Maximum number of options to pick",
          args: {},
        },
        {
          name: "--no-limit",
          description: "Pick unlimited number of options (ignores limit)",
        },
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("item"),
        ...styleOptionGenerator("selected"),
      ],
    },
    {
      name: "confirm",
      description: "Ask a user to confirm an action",
      args: {
        name: "prompt",
        description: "Prompt to display",
      },
      options: [
        {
          name: "--afirmative",
          description: "The title of the affirmative action",
          args: {},
        },
        {
          name: "--negative",
          description: "The title of the negative action",
          args: {},
        },
        {
          name: "--default",
          description: "Default confirmation action",
        },
        {
          name: "--timeout",
          description: "Timeout for confirmation",
          args: {},
        },
        ...styleOptionGenerator("prompt"),
        ...styleOptionGenerator("selected"),
        ...styleOptionGenerator("unselected"),
      ],
    },
    {
      name: "filter",
      description: "Filter items from a list",
      options: [
        {
          name: "--indicator",
          description: "Character for selection",
          args: {},
        },
        {
          name: "--selected-prefix",
          description: "Character to indicate selected items",
          args: {},
        },
        {
          name: "--unselected-prefix",
          description: "Character to indicate unselected items",
          args: {},
        },
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: {},
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: {},
        },
        {
          name: "--width",
          description: "Input width",
          args: {},
        },
        {
          name: "--height",
          description: "Input height",
          args: {},
        },
        {
          name: "--value",
          description: "Initial filter",
          args: {},
        },
        ...styleOptionGenerator("indicator"),
        ...styleOptionGenerator("selected-indicator"),
        ...styleOptionGenerator("unselected-prefix"),
        ...styleOptionGenerator("text"),
        ...styleOptionGenerator("match"),
        ...styleOptionGenerator("prompt"),
      ],
    },
    {
      name: "format",
      description: "Format a string using a template",
      args: {
        name: "template",
        description: "Template string to format",
        isVariadic: true,
      },
      options: [
        {
          name: ["--type", "-t"],
          description: "Format to use",
          args: { suggestions: ["markdown", "template", "code", "emoji"] },
        },
      ],
    },
    {
      name: "input",
      description: "Prompt for some input",
      options: [
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: {},
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: {},
        },
        {
          name: "--value",
          description: "Initial value",
          args: {},
        },
        {
          name: "--char-limit",
          description: "Maximum value length",
          args: {},
        },
        {
          name: "--width",
          description: "Input width",
          args: {},
        },
        {
          name: "--password",
          description: "Mask input characters",
        },
        ...styleOptionGenerator("prompt"),
        ...styleOptionGenerator("cursor"),
      ],
    },
    {
      name: "join",
      description: "Join text vertically or horizontally",
      options: [
        {
          name: "--align",
          description: "Text alignment",
          args: {
            suggestions: alignValues,
          },
        },
        {
          name: "--horizontal",
          description: "Join (potentially multi-line) strings horizontally",
        },
        {
          name: "--vertical",
          description: "Join (potentially multi-line) strings vertically",
        },
      ],
      args: {
        name: "text",
        description: "Text to join",
        isVariadic: true,
      },
    },
    {
      name: "spin",
      description: "Display spinner while running a command",
      options: [
        {
          name: "--show-output",
          description: "Show output of command",
        },
        {
          name: ["--spinner", "-s"],
          description: "Spinner type",
          args: {
            suggestions: [
              "line",
              "dot",
              "minidot",
              "jump",
              "pulse",
              "points",
              "globe",
              "moon",
              "monkey",
              "meter",
              "hamburger",
            ],
          },
        },
        {
          name: "--title",
          description: "Text to display to user while spinning",
          args: {},
        },
        {
          name: ["--align", "-a"],
          description: "Alignment of spinner with regard to the title",
          args: { suggestions: alignValues },
        },
        ...styleOptionGenerator("spinner"),
        ...styleOptionGenerator("title"),
      ],
    },
    {
      name: "style",
      description: "Apply coloring, borders, spacing to text",
      options: styleOptions,
      args: {
        name: "text",
        description: "Text to which to apply the style",
        isVariadic: true,
      },
    },
    {
      name: "write",
      description: "Prompt for long-form text",
      options: [
        {
          name: "--width",
          description: "Text area width",
          args: {},
        },
        {
          name: "--height",
          description: "Text area height",
          args: {},
        },
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: {},
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: {},
        },
        {
          name: "--show-cursor-line",
          description: "Show cursor line",
        },
        {
          name: "--show-line-numbers",
          description: "Show line numbers",
        },
        {
          name: "--value",
          description: "Initial value (can be passed via stdin)",
          args: {},
        },
        {
          name: "--char-limit",
          description: "Maximum value length (0 for no limit)",
          args: {},
        },
        ...styleOptionGenerator("base"),
        ...styleOptionGenerator("cursor-line-number"),
        ...styleOptionGenerator("cursor-line"),
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("end-of-buffer"),
        ...styleOptionGenerator("line-number"),
        ...styleOptionGenerator("placeholder"),
        ...styleOptionGenerator("prompt"),
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show context-sensitive help",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version number",
    },
  ],
  // Only uncomment if gum takes an argument
  // args: {}
};
export default completionSpec;
