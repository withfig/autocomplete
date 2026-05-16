const completion: Fig.Spec = {
  name: "confcom",
  description:
    "Commands to generate security policies for confidential containers in Azure",
  subcommands: [
    {
      name: "acipolicygen",
      description: "Create a Confidential Container Security Policy",
      options: [
        {
          name: ["--approve-wildcards", "-y"],
          description:
            "When enabled, all prompts for using wildcards in environment variables are automatically approved",
        },
        {
          name: "--debug-mode",
          description:
            "When enabled, the generated security policy adds the ability to use /bin/sh or /bin/bash to debug the container. It also enabled stdio access, ability to dump stack traces, and enables runtime logging. It is recommended to only use this option for debugging purposes",
        },
        {
          name: ["--diff", "-d"],
          description:
            'When combined with an input ARM Template, verifies the policy present in the ARM Template under "ccePolicy" and the containers within the ARM Template are compatible. If they are incompatible, a list of reasons is given and the exit status code will be 2',
        },
        {
          name: "--disable-stdio",
          description:
            "When enabled, the containers in the container group do not have access to stdio",
        },
        {
          name: "--image",
          description: "Input image name",
          args: { name: "image" },
        },
        {
          name: "--infrastructure-svn",
          description:
            "Minimum Allowed Software Version Number for Infrastructure Fragment",
          args: { name: "infrastructure-svn" },
        },
        {
          name: ["--input", "-i"],
          description: "Input JSON config file",
          args: { name: "input" },
        },
        {
          name: "--outraw",
          description:
            "Output policy in clear text compact JSON instead of default base64 format",
        },
        {
          name: "--outraw-pretty-print",
          description: "Output policy in clear text and pretty print format",
        },
        {
          name: ["--parameters", "-p"],
          description:
            "Input parameters file to optionally accompany an ARM Template",
          args: { name: "parameters" },
        },
        {
          name: "--print-existing-policy",
          description:
            "When enabled, the existing security policy that is present in the ARM Template is printed to the command line, and no new security policy is generated",
        },
        {
          name: "--print-policy",
          description:
            "When enabled, the generated security policy is printed to the command line instead of injected into the input ARM Template",
        },
        {
          name: ["--save-to-file", "-s"],
          description: "Save output policy to given file path",
          args: { name: "save-to-file" },
        },
        {
          name: "--tar",
          description:
            "Path to either a tarball containing image layers or a JSON file containing paths to tarballs of image layers",
          args: { name: "tar" },
        },
        {
          name: ["--template-file", "-a"],
          description: "Input ARM Template file",
          args: { name: "template-file" },
        },
        {
          name: ["--validate-sidecar", "-v"],
          description:
            "Validate that the image used to generate the CCE Policy for a sidecar container will be allowed by its generated policy",
        },
      ],
    },
  ],
};

export default completion;
