const completionSpec: Fig.Spec = {
  name: "vite",
  description: "Native ESM-powered web dev build tool",
  icon: "https://vitejs.dev/logo.svg",
  args: {
    name: "root",
    isOptional: true,
    template: "folders",
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message",
      isPersistent: true,
    },
    {
      name: "--host",
      description: "Specify the hostname",
      args: { name: "host", isOptional: true },
    },
    {
      name: "--port",
      description: "Specify the port",
      args: { name: "port" },
    },
    {
      name: "--https",
      description: "Use TLS + HTTP/2",
    },
    {
      name: "--open",
      description: "Open browser on startup",
      args: {
        name: "browser",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--cors",
      description: "Enable CORS",
    },
    {
      name: "--strictPort",
      description: "Exit if the port is already in use",
    },
    {
      name: "--force",
      description: "For the optimizer to re-bundle",
    },
    {
      name: ["-c", "--config"],
      description: "Use the specified config file",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--base",
      description: "Public base path",
      isPersistent: true,
      args: {
        name: "path",
        default: "/",
      },
    },
    {
      name: ["-l", "--logLevel"],
      description: "Set the log level",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: [
          { name: "info", icon: "💬" },
          { name: "warn", icon: "⚠️" },
          { name: "error", icon: "💥" },
          { name: "silent", icon: "🤫" },
        ],
      },
    },
    {
      name: "--clearScreen",
      description: "Enable screen clearing when logging",
      isPersistent: true,
    },
    {
      name: ["-d", "--debug"],
      description: "Show debug logs",
      isPersistent: true,
      args: {
        name: "feat",
        isOptional: true,
      },
    },
    {
      name: ["-f", "--filter"],
      description: "Filter debug logs",
      isPersistent: true,
      args: {
        name: "filter",
      },
    },
    {
      name: ["-m", "--mode"],
      description: "Set env mode",
      isPersistent: true,
      args: {
        name: "mode",
        generators: {
          script: ["ls", "-l1A"],
          postProcess: (out) =>
            out
              .split("\n")
              .filter((line) => line.startsWith(".env."))
              .map((name) => ({
                name,
              })),
        },
      },
    },
    {
      name: ["-v", "--version"],
      description: "Display version number",
    },
  ],
  subcommands: [
    {
      name: "build",
      icon: "🛠",
      description: "Build for production",
      args: {
        name: "root",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--target",
          description: "Transpile target (must be a valid esbuild target)",
          args: {
            name: "target",
          },
        },
        {
          name: "--outDir",
          description: "Output directory",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--assetsDir",
          description: "Directory under outDir to place assets in",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--assetsInlineLimit",
          description: "Static asset base64 inline threshold in bytes",
          args: {
            name: "number",
          },
        },
        {
          name: "--ssr",
          description: "Build specified entry for server-side rendering",
          args: {
            name: "entry",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "--sourcemap",
          description: "Output sourcemaps for build",
        },
        {
          name: "--minify",
          description: "Enable minification",
          args: {
            name: "minifier",
            isOptional: true,
            suggestions: [{ name: "terser" }, { name: "esbuild" }],
          },
        },
        {
          name: "--manifest",
          description: "Emit build manifest json",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--ssrManifest",
          description: "Emit ssr manifest json",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--emptyOutDir",
          description: "Force empty outDir when it's outside of root",
        },
        {
          name: ["-w", "--watch"],
          description: "Rebuilds when modules have changed on disk",
        },
      ],
    },
    {
      name: "optimize",
      icon: "📦",
      description: "Pre-bundle dependencies",
      args: {
        name: "root",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--force",
          description: "For the optimizer to re-bundle",
        },
      ],
    },
    {
      name: "preview",
      icon: "✨",
      description: "Locally preview the production build",
      args: {
        name: "root",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--host",
          description: "Specify the hostname",
          args: { name: "host", isOptional: true },
        },
        {
          name: "--port",
          description: "Specify the port",
          args: { name: "port" },
        },
        {
          name: "--https",
          description: "Use TLS + HTTP/2",
        },
        {
          name: "--open",
          description: "Open browser on startup",
          args: {
            name: "browser",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--strictPort",
          description: "Exit if the port is already in use",
        },
      ],
    },
  ],
};

export default completionSpec;
