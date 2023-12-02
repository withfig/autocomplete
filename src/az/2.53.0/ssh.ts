const completion: Fig.Spec = {
  name: "ssh",
  description:
    "SSH into resources (Azure VMs, Arc servers, etc) using AAD issued openssh certificates.\n\n\t\tSSH into Arc-enabled servers without requiring a public IP address or SSH into Azure Virtual Machines. AAD issued openssh certificates for authentication currently only supported for Linux",
  subcommands: [
    {
      name: "arc",
      description: "SSH into Azure Arc Servers",
      options: [
        {
          name: ["--certificate-file", "-c"],
          description: "Path to certificate file",
          args: { name: "certificate-file" },
        },
        {
          name: "--local-user",
          description: "The username for a local user",
          args: { name: "local-user" },
        },
        {
          name: ["--vm-name", "--name", "-n"],
          description: "The name of the Arc Server",
          args: { name: "vm-name" },
        },
        {
          name: "--port",
          description: "Port to connect to on the remote host",
          args: { name: "port" },
        },
        {
          name: ["--private-key-file", "-i"],
          description: "The RSA private key file path",
          args: { name: "private-key-file" },
        },
        {
          name: ["--public-key-file", "-p"],
          description: "The RSA public key file path",
          args: { name: "public-key-file" },
        },
        {
          name: ["--winrdp", "--rdp"],
          description: "Start RDP connection over SSH",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "Resource type should be either Microsoft.HybridCompute/machines or Microsoft.ConnectedVMwareSphere/virtualMachines",
          args: { name: "resource-type" },
        },
        {
          name: "--ssh-client-folder",
          description:
            "Folder path that contains ssh executables (ssh.exe, ssh-keygen.exe, etc). Default to ssh pre-installed if not provided",
          args: { name: "ssh-client-folder" },
        },
        {
          name: "--ssh-proxy-folder",
          description:
            "Path to the folder where the ssh proxy should be saved. Default to .clientsshproxy folder in user's home directory if not provided",
          args: { name: "ssh-proxy-folder" },
        },
        {
          name: ["--yes-without-prompt", "--yes", "-y"],
          description: "Update service configuration without prompting user",
        },
      ],
      args: {
        name: "<SSH_ARGS>",
        description: "Additional arguments passed to OpenSSH",
        isOptional: true,
      },
    },
    {
      name: "cert",
      description: "Create an SSH RSA certificate signed by AAD",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The file path to write the SSH cert to, defaults to public key path with -aadcert.pub appened",
          args: { name: "file" },
        },
        {
          name: ["--public-key-file", "-p"],
          description:
            "The RSA public key file path. If not provided, generated key pair is stored in the same directory as --file",
          args: { name: "public-key-file" },
        },
        {
          name: "--ssh-client-folder",
          description:
            "Folder path that contains ssh executables (ssh.exe, ssh-keygen.exe, etc). Default to ssh pre-installed if not provided",
          args: { name: "ssh-client-folder" },
        },
      ],
    },
    {
      name: "config",
      description:
        "Create an SSH config for resources (Azure VMs, Arc Servers, etc) which can then be used by clients that support OpenSSH configs and certificates",
      options: [
        {
          name: ["--file", "-f"],
          description: "The file path to write the SSH config to",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["--certificate-file", "-c"],
          description: "Path to certificate file",
          args: { name: "certificate-file" },
        },
        {
          name: "--ip",
          description: "The public IP address (or hostname) of the VM",
          args: { name: "ip" },
        },
        {
          name: ["--keys-destination-folder", "--keys-dest-folder"],
          description: "Folder where new generated keys will be stored",
          args: { name: "keys-destination-folder" },
        },
        {
          name: "--local-user",
          description: "The username for a local user",
          args: { name: "local-user" },
        },
        {
          name: ["--vm-name", "--name", "-n"],
          description: "The name of the VM",
          args: { name: "vm-name" },
        },
        {
          name: "--overwrite",
          description: "Overwrites the config file if this flag is set",
        },
        { name: "--port", description: "SSH Port", args: { name: "port" } },
        {
          name: "--prefer-private-ip",
          description:
            "Will use a private IP if available. By default only public IPs are used",
        },
        {
          name: ["--private-key-file", "-i"],
          description: "The RSA private key file path",
          args: { name: "private-key-file" },
        },
        {
          name: ["--public-key-file", "-p"],
          description: "The RSA public key file path",
          args: { name: "public-key-file" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "Resource type should be either Microsoft.Compute/virtualMachines, Microsoft.HybridCompute/machines, or Microsoft.ConnectedVMwareSphere/virtualMachines",
          args: { name: "resource-type" },
        },
        {
          name: "--ssh-client-folder",
          description:
            "Folder path that contains ssh executables (ssh.exe, ssh-keygen.exe, etc). Default to ssh pre-installed if not provided",
          args: { name: "ssh-client-folder" },
        },
        {
          name: "--ssh-proxy-folder",
          description:
            "Path to the folder where the ssh proxy should be saved. Default to .clientsshproxy folder in user's home directory if not provided",
          args: { name: "ssh-proxy-folder" },
        },
        {
          name: ["--yes-without-prompt", "--yes", "-y"],
          description: "Update service configuration without prompting user",
        },
      ],
    },
    {
      name: "vm",
      description: "SSH into Azure VMs or Arc Servers",
      options: [
        {
          name: ["--certificate-file", "-c"],
          description:
            "Path to a certificate file used for authentication when using local user credentials",
          args: { name: "certificate-file" },
        },
        {
          name: ["--hostname", "--ip"],
          description:
            "The public (or reachable private) IP address (or hostname) of the VM",
          args: { name: "hostname" },
        },
        {
          name: "--local-user",
          description: "The username for a local user",
          args: { name: "local-user" },
        },
        {
          name: ["--vm-name", "--name", "-n"],
          description: "The name of the VM",
          args: { name: "vm-name" },
        },
        { name: "--port", description: "SSH port", args: { name: "port" } },
        {
          name: "--prefer-private-ip",
          description:
            "Will prefer private IP. Requires connectivity to the private IP",
        },
        {
          name: ["--private-key-file", "-i"],
          description: "The RSA private key file path",
          args: { name: "private-key-file" },
        },
        {
          name: ["--public-key-file", "-p"],
          description: "The RSA public key file path",
          args: { name: "public-key-file" },
        },
        {
          name: ["--winrdp", "--rdp"],
          description: "Start RDP connection over SSH",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "Resource type should be either Microsoft.Compute/virtualMachines, Microsoft.HybridCompute/machines, or Microsoft.ConnectedVMwareSphere/virtualMachines",
          args: { name: "resource-type" },
        },
        {
          name: "--ssh-client-folder",
          description:
            "Folder path that contains ssh executables (ssh.exe, ssh-keygen.exe, etc). Default to ssh pre-installed if not provided",
          args: { name: "ssh-client-folder" },
        },
        {
          name: "--ssh-proxy-folder",
          description:
            "Path to the folder where the ssh proxy should be saved. Default to .clientsshproxy folder in user's home directory if not provided",
          args: { name: "ssh-proxy-folder" },
        },
        {
          name: ["--yes-without-prompt", "--yes", "-y"],
          description: "Update service configuration without prompting user",
        },
      ],
      args: {
        name: "<SSH_ARGS>",
        description: "Additional arguments passed to OpenSSH",
        isOptional: true,
      },
    },
  ],
};

export default completion;
