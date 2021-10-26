const completionSpec: Fig.Spec = {
  name: "ssh",
  description:
    "SSH into resources (Azure VMs, etc) using AAD issued openssh certificates",
  subcommands: [
    {
      name: "cert",
      description: "Create an SSH RSA certificate signed by AAD",
    },
    {
      name: "config",
      description:
        "Create an SSH config for resources (Azure VMs, etc) which can then be used by clients that support OpenSSH configs and certificates",
    },
    { name: "vm", description: "SSH into Azure VMs using an ssh certificate" },
  ],
};

export default completionSpec;
