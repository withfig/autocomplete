const completionSpec: Fig.Spec = {
  name: "mkinitcpio",
  description: "Create an initial ramdisk environment",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for mkinitcpio",
    },
    {
      name: ["--version", "-V"],
      description: "Display version information",
    },
    {
      name: ["--addhooks", "-A"],
      description: "Add additional hooks to the image",
      args: {
        name: "hooks",
        template: "filepaths",
      },
    },
    {
      name: ["--config", "-c"],
      description: "Use config file to generate the ramdisk",
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: ["--generatedir", "-d"],
      description: "Set directory as the location where the initramfs is built",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["--hookdir", "-D"],
      description:
        "Set directory as the location where hooks will be searched for when generating the image",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["--generate", "-g"],
      description: "Generate a CPIO image as filename",
      args: {
        name: "filename",
      },
    },
    {
      name: ["--hookhelp", "-H"],
      description: "Output help for hookname",
      args: {
        name: "hookname",
      },
    },
    {
      name: ["--kernel", "-k"],
      description: "Use kernelversion, instead of the current running kernel",
      args: {
        name: "kernelversion",
      },
    },
    {
      name: ["--listhooks", "-L"],
      description: "List all available hooks",
    },
    {
      name: ["--automods", "-M"],
      description: "Display modules found via autodetection",
    },
    {
      name: ["--nocolor", "-n"],
      description: "Disable color output",
    },
    {
      name: ["--uefi", "-U"],
      description: "Generate a UEFI executable as filename",
      args: {
        name: "filename",
      },
    },
    {
      name: ["--allpresets", "-P"],
      description: "Process all presets contained in /etc/mkinitcpio.d",
    },
    {
      name: ["--preset", "-p"],
      description: "Build initramfs image(s) according to specified preset",
      args: {
        name: "preset",
        generators: {
          script: ["ls", "/etc/mkinitcpio.d"],
          postProcess: (out) =>
            out
              .trim()
              .split("\n")
              .map((line) => ({
                name: line.replace(/\.preset$/, ""),
              })),
        },
      },
    },
    {
      name: ["--moduleroot", "-r"],
      description: "Specifies the root directory to find modules in",
      args: {
        name: "root",
      },
    },
    {
      name: ["--skiphooks", "-S"],
      description: "Skip hooks when generating the image",
      args: {
        name: "hooks",
      },
    },
    {
      name: ["--save", "-s"],
      description: "Saves the build directory for the initial ramdisk",
    },
    {
      name: ["--builddir", "-t"],
      description:
        "Use tmpdir as the temporary build directory instead of /tmp",
      args: {
        name: "tmpdir",
        template: "folders",
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
    },
    {
      name: ["--compress", "-z"],
      description: "Override the compression method with the compress program",
      args: {
        name: "compress",
      },
    },
    {
      name: "--cmdline",
      description: "Use kernel command line with UEFI executable",
      args: {
        name: "filename",
      },
    },
    {
      name: "--splash",
      description: "UEFI executables can show a bitmap file on boot",
      args: {
        name: "filename",
      },
    },
    {
      name: "--uefistub",
      description: "UEFI stub image used for UEFI executable generation",
      args: {
        name: "filename",
      },
    },
    {
      name: "--kernelimage",
      description: "Include a kernel image for the UEFI executable",
      args: {
        name: "filename",
      },
    },
    {
      name: "--microcode",
      description: "Include microcode into the UEFI executable",
      args: {
        name: "filename",
      },
    },
    {
      name: "--osrelease",
      description: "Include a os-release file for the UEFI executable",
      args: {
        name: "filename",
      },
    },
  ],
};
export default completionSpec;
