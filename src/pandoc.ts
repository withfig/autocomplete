import { filepaths } from "@fig/autocomplete-generators";

const pandocGenerators: Record<string, Fig.Generator[]> = {
  inputFormats: [
    {
      script: ["pandoc", "--list-input-formats"],
      postProcess: function (out) {
        return out.split("\n").map((format) => ({
          name: format,
          icon: `fig://icon?type=${format}`,
        }));
      },
    },
  ],
  outputFormats: [
    {
      script: ["pandoc", "--list-output-formats"],
      postProcess: function (out) {
        return out.split("\n").map((format) => ({
          name: format,
          icon: `fig://icon?type=${format}`,
        }));
      },
    },
  ],
  formats: [
    {
      script: ["pandoc", "--list-input-formats"],
      postProcess: function (out) {
        const uniqueFormats = Array.from(new Set(out.split("\n")));
        return uniqueFormats.map((format) => ({
          name: format,
          icon: `fig://icon?type=${format}`,
        }));
      },
    },
    {
      script: ["pandoc", "--list-output-formats"],
      postProcess: function (out) {
        const uniqueFormats = Array.from(new Set(out.split("\n")));
        return uniqueFormats.map((format) => ({
          name: format,
          icon: `fig://icon?type=${format}`,
        }));
      },
    },
  ],
  yamlFiles: [filepaths({ extensions: ["yaml"] })],
  yamlJSONFiles: [filepaths({ extensions: ["yaml", "json"] })],
};

const styleFileArg: Fig.Arg = {
  name: "STYLE|FILE",
  template: "filepaths",
  default: "pygments",
  suggestions: [
    "pygments",
    "kate",
    "monochrome",
    "breezeDark",
    "espresso",
    "zenburn",
    "haddock",
    "tango",
  ],
};

const completionSpec: Fig.Spec = {
  name: "pandoc",
  description: "A universal document converter",
  options: [
    {
      name: ["-f", "-r", "--from", "--read"],
      description: "Specify input format",
      args: {
        name: "format",
        generators: pandocGenerators.inputFormats,
      },
    },
    {
      name: ["-t", "-w", "--to", "--write"],
      description: "Specify output format",
      args: {
        name: "format",
        generators: pandocGenerators.outputFormats,
      },
    },
    {
      name: ["-o", "--output"],
      description: "Write output to FILE instead of stdout",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--data-dir",
      description:
        "Specify the user data directory to search for pandoc data files",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-d", "--defaults"],
      description: "Specify a set of default option settings",
      args: {
        name: "file",
        generators: pandocGenerators.yamlFiles,
      },
    },
    {
      name: "--bash-completion",
      description: "Generate a bash completion script",
    },
    {
      name: "--verbose",
      description: "Give verbose debugging output",
    },
    {
      name: "--quiet",
      description: "Suppress warning messages",
    },
    {
      name: "--fail-if-warnings",
      description: "Exit with error status if there are any warnings",
    },
    {
      name: "--log",
      description: "Write log messages in machine-readable JSON format to FILE",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--list-input-formats",
      description: "List supported input formats, one per line",
    },
    {
      name: "--list-output-formats",
      description: "List supported output formats, one per line",
    },
    {
      name: "--list-extensions",
      description:
        "List supported extensions for FORMAT, one per line, preceded by a + or -  indicating whether it is enabled by default in FORMAT",
      args: {
        name: "format",
        generators: pandocGenerators.formats,
        isOptional: true,
      },
    },
    {
      name: "--list-highlight-languages",
      description:
        "List supported languages for syntax highlighting, one per line",
    },
    {
      name: "--list-highlight-styles",
      description:
        "List supported styles for syntax highlighting, one per line",
    },
    {
      name: ["-v", "--version"],
      description: "Print version",
    },
    {
      name: ["-h", "--help"],
      description: "Show usage message",
    },
    {
      name: "--shift-heading-level-by",
      description: "Shift heading levels by a positive or negative integer",
      args: {
        name: "number",
      },
    },
    {
      name: "--indented-code-classes",
      description:
        "Specify classes to use for indented code blocks–for example, perl,numberLines or haskell. Multiple classes may be separated by spaces or commas",
      args: {
        name: "classes",
      },
    },
    {
      name: "--default-image-extension",
      description:
        "Specify a default extension to use when image paths/URLs have no extension. This allows you to use the same source for formats that require different kinds of images. Currently this option only affects the Markdown and LaTeX readers",
      args: {
        name: "extension",
      },
    },
    {
      name: "--file-scope",
      description:
        "Parse each file individually before combining for multifile documents. This will allow footnotes in different files with the same identifiers to work as expected",
    },
    {
      name: ["-F", "--filter"],
      description:
        "Specify an executable to be used as a filter transforming the pandoc AST after the input is parsed and before the output is written",
      args: {
        name: "executable",
        template: "filepaths",
      },
    },
    {
      name: ["-L", "--lua-filter"],
      description:
        "Transform the document in a similar fashion as JSON filters, but use pandoc’s built-in Lua filtering system",
      args: {
        name: "script",
        template: "filepaths",
      },
    },
    {
      name: ["-M", "--metadata"],
      description: "Set the metadata field KEY to the value VAL",
      args: [
        { name: "key" },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "--metadata-file",
      description: "Read metadata from the supplied YAML (or JSON) file",
      args: {
        name: "file",
        generators: pandocGenerators.yamlJSONFiles,
      },
    },
    {
      name: ["-p", "--preserve-tabs"],
      description: "Preserve tabs instead of converting them to spaces",
    },
    {
      name: "--tab-stop",
      description: "Specify the number of spaces per tab",
      args: {
        name: "number",
        default: "4",
      },
    },
    {
      name: "--track-changes",
      description:
        "Specifies what to do with insertions, deletions, and comments produced by the MS Word `Track Changes` feature",
      args: {
        name: "mode",
        default: "accept",
        suggestions: [
          {
            name: "accept",
            description:
              "Processes all the insertions and deletions and ignores comments",
          },
          {
            name: "reject",
            description:
              "Ignores all the insertions and deletions and ignores comments",
          },
          {
            name: "all",
            description:
              "Includes all insertions, deletions, and comments, wrapped in spans with insertion, deletion, comment-start, and comment-end classes, respectively",
          },
        ],
      },
    },
    {
      name: "--extract-media",
      description:
        "Extract images and other media contained in or linked from the source document to the path DIR, creating it if necessary, and adjust the images references in the document so they point to the extracted files",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--abbreviations",
      description:
        "Specifies a custom abbreviations file, with abbreviations one to a line. If this option is not specified, pandoc will read the data file abbreviations from the user data directory or fall back on a system default",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-s", "--standalone"],
      description:
        "Produce output with an appropriate header and footer (e.g. a standalone HTML, LaTeX, TEI, or RTF file, not a fragment). This option is set automatically for pdf, epub, epub3, fb2, docx, and odt output",
    },
    {
      name: "--template",
      description:
        "Use the specified file as a custom template for the generated document",
      args: {
        name: "file or URL",
        template: "filepaths",
      },
    },
    {
      name: ["-V", "--variable"],
      description:
        "Set the template variable KEY to the value VAL when rendering the document in standalone mode. If no VAL is specified, the key will be given the value true",
      args: [
        { name: "key" },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: ["-D", "--print-default-template"],
      description:
        "Print the system default template for an output FORMAT. Templates in the user data directory are ignored",
      args: {
        name: "format",
        generators: pandocGenerators.outputFormats,
      },
    },
    {
      name: "--print-default-data-file",
      description:
        "Print a system default data file. Files in the user data directory are ignored",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--eol",
      description:
        "Manually specify line endings: crlf (Windows), lf (macOS/Linux/UNIX), or native (line endings appropriate to the OS on which pandoc is being run). The default is native",
      args: {
        name: "type",
        suggestions: [
          { name: "crlf", description: "Windows" },
          { name: "lf", description: "MacOS/Linux/UNIX" },
          {
            name: "native",
            description:
              "Line endings appropriate to the OS on which Pandoc is being run",
          },
        ],
      },
    },
    {
      name: "--dpi",
      description:
        "Specify the default dpi (dots per inch) value for conversion from pixels to inch/centimeters and vice versa",
      args: {
        name: "number",
        default: "96",
      },
    },
    {
      name: "--wrap",
      description:
        "Determine how text is wrapped in the output (the source code, not the rendered version)",
      args: {
        name: "mode",
        default: "auto",
        suggestions: [
          {
            name: "auto",
            description:
              "Attempts to wrap lines to the column width specified by --columns (default 72)",
          },
          {
            name: "none",
            description: "Will not wrap lines at all",
          },
          {
            name: "preserve",
            description:
              "Attempts to preserve the wrapping from the source document",
          },
        ],
      },
    },
    {
      name: "--columns",
      description:
        "Specify length of lines in characters. This affects text wrapping in the generated source code",
      args: {
        name: "number",
        default: "72",
      },
    },
    {
      name: ["--toc", "--table-of-contents"],
      description:
        "Include an automatically generated table of contents (or, in the case of latex, context, docx, odt, opendocument, rst, or ms, an instruction to create one) in the output document. It has no effect on man, docbook4, docbook5, or jats output",
      dependsOn: ["-s", "--standalone"],
    },
    {
      name: "--toc-depth",
      description:
        "Specify the number of section levels to include in the table of contents",
      args: {
        name: "number",
        default: "3",
      },
    },
    {
      name: "--strip-comments",
      description:
        "Strip out HTML comments in the Markdown or Textile source, rather than passing them on to Markdown, Textile or HTML output as raw HTML. This does not apply to HTML comments inside raw HTML blocks when the markdown_in_html_blocks extension is not set",
    },
    {
      name: "--no-highlight",
      description:
        "Disables syntax highlighting for code blocks and inlines, even when a language attribute is given",
    },
    {
      name: "--highlight-style",
      description:
        "Specifies the coloring style to be used in highlighted source code",
      args: styleFileArg,
    },
    {
      name: "--print-highlight-style",
      description:
        "Prints a JSON version of a highlighting style, which can be modified, saved with a .theme extension, and used with --highlight-style",
      args: styleFileArg,
    },
    {
      name: "--syntax-definition",
      description:
        "Instructs pandoc to load a KDE XML syntax definition file, which will be used for syntax highlighting of appropriately marked code blocks",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-H", "--include-in-header"],
      description:
        "Include contents of FILE, verbatim, at the end of the header",
      args: {
        name: "FILE|URL",
        template: "filepaths",
      },
    },
    {
      name: ["-B", "--include-before-body"],
      description:
        "Include contents of FILE, verbatim, at the beginning of the document body",
      args: {
        name: "FILE|URL",
        template: "filepaths",
      },
    },
    {
      name: ["-A", "--include-after-body"],
      description:
        "Include contents of FILE, verbatim, at the end of the document body",
      args: {
        name: "FILE|URL",
        template: "filepaths",
      },
    },
    {
      name: "--resource-path",
      description:
        "List of paths to search for images and other resources. If --resource-path is not specified, the default resource path is the working directory",
      args: {
        name: "search path",
        description:
          "The paths should be separated by : on Linux, UNIX, and macOS systems, and by ; on Windows",
        template: "folders",
      },
    },
    {
      name: "--request-header",
      description:
        "Set the request header NAME to the value VAL when making HTTP requests. If you’re behind a proxy, you also need to set the environment variable http_proxy to http://",
      args: {
        name: "NAME:VAL",
      },
    },
    {
      name: "--no-check-certificate",
      description:
        "Disable the certificate verification to allow access to unsecure HTTP resources",
    },
    {
      name: "--self-contained",
      description:
        "Produce a standalone HTML file with no external dependencies, using data: URIs to incorporate the contents of linked scripts, stylesheets, images, and videos",
    },
    {
      name: "--html-q-tags",
      description:
        "Use <q> tags for quotes in HTML. This option only has an effect if the smart extension is enabled",
    },
    {
      name: "--ascii",
      description:
        "Use only ASCII characters in output. Currently supported for XML, HTML formats, CommonMark, gfm, Markdown, roff ms , and to a limited degree LaTeX, roff man output uses ASCII by default",
    },
    {
      name: "--reference-links",
      description:
        "Use reference-style links, rather than inline links, in writing Markdown or reStructuredText",
    },
    {
      name: "--reference-location",
      description:
        "Specify whether footnotes (and references, if reference-links is set) are placed at the end of the current (top-level) block, the current section, or the document. Currently only affects the markdown writer",
      args: {
        name: "type",
        default: "document",
        suggestions: ["block", "section", "document"],
      },
    },
    {
      name: "--markdown-headings",
      description:
        "Specify whether to use ATX-style (#-prefixed) or Setext-style (underlined) headings for level 1 and 2 headings in Markdown output",
      args: {
        name: "type",
        default: "atx",
        suggestions: ["setext", "atx"],
      },
    },
    {
      name: "--atx-headers",
      description: "Deprecated synonym for --markdown-headings=atx",
    },
    {
      name: "--top-level-division",
      description:
        "Treat top-level headings as the given division type in LaTeX, ConTeXt, DocBook, and TEI output",
      args: {
        name: "mode",
        suggestions: ["default", "section", "chapter", "part"],
      },
    },
    {
      name: ["-N", "--number-sections"],
      description:
        "Number section headings in LaTeX, ConTeXt, HTML, Docx, ms, or EPUB output. By default, sections are not numbered",
    },
    {
      name: "--number-offset",
      description:
        "Offset for section headings in HTML output (ignored in other output formats)",
      args: {
        name: "number",
        description:
          "The first number is added to the section number for top-level headings, the second for second-level headings, and so on",
        isVariadic: true,
      },
    },
    {
      name: "--listings",
      description:
        "Use the listings package for LaTeX code blocks. The package does not support multi-byte encoding for source code. To handle UTF-8 you would need to use a custom template",
    },
    {
      name: ["-i", "--incremental"],
      description: "Make list items in slide shows display incrementally",
    },
    {
      name: "--slide-level",
      description:
        "Specifies that headings with the specified level create slides (for beamer, s5, slidy, slideous, dzslides). Headings above this level in the hierarchy are used to divide the slide show into sections; headings below this level create subheads within a slide",
      args: {
        name: "level",
        description: "Number",
      },
    },
    {
      name: "--section-divs",
      description:
        "Wrap sections in <section> tags (or <div> tags for html4), and attach identifiers to the enclosing <section> (or <div>) rather than the heading itself",
    },
    {
      name: "--email-obfuscation",
      description:
        "Specify a method for obfuscating mailto: links in HTML documents references . The default is none",
      args: {
        name: "type",
        default: "none",
        suggestions: [
          {
            name: "none",
            description: "Leaves mailto: links as they are",
          },
          {
            name: "javascript",
            description: "Obfuscates mailto: links using JavaScript",
          },
          {
            name: "references",
            description:
              "Obfuscates mailto: links by printing their letters as decimal or hexadecimal character references",
          },
        ],
      },
    },
    {
      name: "--id-prefix",
      description:
        "Specify a prefix to be added to all identifiers and internal links in HTML and DocBook output, and to footnote numbers in Markdown and Haddock output",
      args: {
        name: "string",
      },
    },
    {
      name: ["-T", "--title-prefix"],
      description:
        "Specify STRING as a prefix at the beginning of the title that appears in the HTML header (but not in the title as it appears at the beginning of the HTML body)",
      args: {
        name: "string",
      },
    },
    {
      name: ["-c", "--css"],
      description:
        "Link to a CSS style sheet. This option can be used repeatedly to include multiple files. They will be included in the order specified",
      args: {
        name: "URL",
      },
    },
    {
      name: "--reference-doc",
      description:
        "Use the specified file as a style reference in producing a docx or ODT file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--epub-cover-image",
      description:
        "Use the specified image as the EPUB cover. It is recommended that the image be less than 1000px in width and height. Note that in a Markdown source document you can also specify cover-image in a YAML metadata block",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--epub-metadata",
      description:
        "Look in the specified XML file for metadata for the EPUB. The file should contain a series of Dublin Core elements",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--epub-embed-font",
      description:
        "Embed the specified font in the EPUB. This option can be repeated to embed multiple fonts. Wildcards can also be used",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--pdf-engine",
      description: "Use the specified engine when producing PDF output",
      args: {
        name: "program",
        suggestions: [
          "pdflatex",
          "lualatex",
          "xelatex",
          "latexmk",
          "tectonic",
          "wkhtmltopdf",
          "weasyprint",
          "prince",
          "context",
          "pdfroff",
        ],
      },
    },
    {
      name: "--pdf-engine-opt",
      description:
        "Use the given string as a command-line argument to the pdf-engine",
      args: {
        name: "string",
      },
    },
    {
      name: ["-C", "--citeproc"],
      description:
        "Process the citations in the file, replacing them with rendered citations and adding a bibliography. Citation processing will not take place unless bibliographic data is supplied, either through an external file specified using the --bibliography option or the bibliography field in metadata, or via a references section in metadata containing a list of citations in CSL YAML format with Markdown formatting. The style is controlled by a CSL stylesheet specified using the --csl option or the csl field in metadata. (If no stylesheet is specified, the chicago-author-date style will be used by default)",
    },
    {
      name: "--bibliography",
      description:
        "Set the bibliography field in the document’s metadata to FILE, overriding any value set in the metadata. If you supply this argument multiple times, each FILE will be added to bibliography. If FILE is a URL, it will be fetched via HTTP. If FILE is not found relative to the working directory, it will be sought in the resource path",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--csl",
      description:
        "Set the csl field in the document’s metadata to FILE, overriding any value set in the metadata. (This is equivalent to --metadata csl=FILE.) If FILE is a URL, it will be fetched via HTTP. If FILE is not found relative to the working directory, it will be sought in the resource path and finally in the csl subdirectory of the pandoc user data directory",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--citation-abbreviations",
      description:
        "Set the citation-abbreviations field in the document’s metadata to FILE, overriding any value set in the metadata. If FILE is a URL, it will be fetched via HTTP. If FILE is not found relative to the working directory, it will be sought in the resource path and finally in the csl subdirectory of the pandoc user data directory",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--natbib",
      description:
        "Use natbib for citations in LaTeX output. It is intended for use in producing a LaTeX file that can be processed with bibtex",
      exclusiveOn: ["--citeproc"],
    },
    {
      name: "--biblatex",
      description:
        "Use biblatex for citations in LaTeX output. It is intended for use in producing a LaTeX file that can be processed with bibtex or biber",
      exclusiveOn: ["--citeproc"],
    },
    {
      name: "--mathjax",
      description:
        "Use MathJax to display embedded TeX math in HTML output. TeX math will be put between (...) (for inline math) or [...] (for display math) and wrapped in <span> tags with class math. Then the MathJax JavaScript will render it. The URL should point to the MathJax.js load script. If a URL is not provided, a link to the Cloudflare CDN will be inserted",
      args: {
        name: "URL",
      },
    },
    {
      name: "--mathml",
      description:
        "Convert TeX math to MathML (in epub3, docbook4, docbook5, jats, html4 and html5). This is the default in odt output. Note that currently only Firefox and Safari (and select e-book readers) natively support MathML",
    },
    {
      name: "--webtex",
      description:
        "Convert TeX formulas to <img> tags that link to an external script that converts formulas to images. The formula will be URL-encoded and concatenated with the URL provided. For SVG images you can for example use --webtex https://latex.codecogs.com/svg.latex?. If no URL is specified, the CodeCogs URL generating PNGs will be used (https://latex.codecogs.com/png.latex?). Note: the --webtex option will affect Markdown output as well as HTML, which is useful if you’re targeting a version of Markdown without native math support",
      args: {
        name: "URL",
      },
    },
    {
      name: "--katex",
      description:
        "Use KaTeX to display embedded TeX math in HTML output. The URL is the base URL for the KaTeX library. That directory should contain a katex.min.js and a katex.min.css file. If a URL is not provided, a link to the KaTeX CDN will be inserted",
      args: {
        name: "URL",
      },
    },
    {
      name: "--gladtex",
      description:
        "Enclose TeX math in <eq> tags in HTML output. The resulting HTML can then be processed by GladTeX to produce SVG images of the typeset formulas and an HTML file with these images embedded",
    },
    {
      name: "--dump-args",
      description:
        "Print information about command-line arguments to stdout, then exit. This option is intended primarily for use in wrapper scripts",
    },
    {
      name: "--ignore-args",
      description:
        "Ignore command-line arguments (for use in wrapper scripts). Regular pandoc options are not ignored",
    },
  ],
  args: {
    name: "input file(s)",
    template: "filepaths",
    isVariadic: true,
  },
};

export default completionSpec;
