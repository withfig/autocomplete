const completion: Fig.Spec = {
  name: "arcappliance",
  description: "Commands to manage Arc resource bridge",
  subcommands: [
    {
      name: "create",
      description:
        "Command group for creation of the connection between the Arc resource bridge on-premises appliance VM and its corresponding Azure resource",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge (Azure Stack HCI)",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge on SCVMM",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge (Arc-enabled VMware)",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "createconfig",
      description:
        "Command group for creating configuration files for Arc resource bridge.\n\n\t\tThis command features two modes - interactive and non-interactive. Interactive mode provides helpful prompts that explain the parameter and what to pass. It is initiated by passing only the required parameters. Non-interactive mode allows you to pass all the parameters needed to create the configuration files without being prompted",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to create configuration files for Arc Resource Bridge on HCI",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridge Azure resource will be deployed. Must be a valid location where the self-service VM feature for Azure Stack HCI is available and set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--authenticationport",
              description:
                "Network port used by appliance VM IP to communicate with the cloud agent service endpoint. This port should be open on the firewall to enable communication between the two if the Windows Server physical cluster nodes and Arc resource bridge VM are on separate VLANs",
              args: { name: "authenticationport" },
            },
            {
              name: "--certificateFilePath",
              description:
                "Certificate file path if your proxy server requires the proxy clients to trust a certificate. Only pass a single proxy certificate, not a bundle",
              args: { name: "certificateFilePath" },
            },
            {
              name: "--cloudagent",
              description:
                "FQDN or IP address of the Azure Stack HCI MOC cloud agent service used by Arc resource bridge. This can be found in the -infra.yaml configuration file stored locally on the HCI cluster",
              args: { name: "cloudagent" },
            },
            {
              name: "--controlPlaneEndpoint",
              description:
                "Arc resource bridge on-premises appliance VM hosts a management kubernetes cluster with a control plane that requires a static IP address. This static IP address must lie within the subnet range specified in the IP address prefix",
              args: { name: "controlPlaneEndpoint" },
            },
            {
              name: "--dnsservers",
              description:
                "IP address(es) of DNS server(s) used by Arc resource bridge on-premises appliance VM for DNS resolution. Appliance VM must be able to resolve external sites and internal endpoints. Enter multiple IP addresses as a comma-separated list",
              args: { name: "dnsservers" },
            },
            {
              name: "--gateway",
              description:
                "Static gateway IP address, must lie within the subnet range specified in the IP address prefix",
              args: { name: "gateway" },
            },
            {
              name: "--http",
              description:
                "HTTP proxy URL and port information entered as http://:. Example: http://192.168.0.10:80",
              args: { name: "http" },
            },
            {
              name: "--https",
              description:
                "HTTPS URL and port information entered as http://:. Example: https://192.168.0.10:443",
              args: { name: "https" },
            },
            {
              name: "--ipaddressprefix",
              description:
                "Arc resource bridge requires 3 IP addresses for the on-premises appliance VM (appliance VM IP, upgrade VM IP, control plane IP). All IPs should reside within the same subnet and fall within the range specified in the IP address prefix. IP address prefix is entered as the subnet's IP address range for the virtual network and subnet mask (IP Mask) in CIDR notation (ex: 192.168.7.1/24). An IP Subnet CIDR calculator can be used for this. Example: For IPs within a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "ipaddressprefix" },
            },
            {
              name: "--k8snodeippoolend",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the end range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolend" },
            },
            {
              name: "--k8snodeippoolstart",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the start range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolstart" },
            },
            {
              name: "--loginconfigfile",
              description:
                "File path for the Azure Stack HCI login configuration file, kvatoken.tok. By default, it is stored locally on the HCI cluster",
              args: { name: "loginconfigfile" },
            },
            {
              name: "--noproxy",
              description:
                "The list of comma-separated entries for excluded networks, hosts, or domains from being accessed through the proxy server",
              args: { name: "noproxy" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for Arc resource bridge configuration files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--overwrite-existing",
              description:
                "Overwrite existing configuration files. Default: False",
            },
            { name: "--port", description: "Port", args: { name: "port" } },
            {
              name: "--storagecontainer",
              description: "Azure Stack HCI storage container",
              args: { name: "storagecontainer" },
            },
            {
              name: "--vlanid",
              description: "VLAN ID",
              args: { name: "vlanid" },
            },
            {
              name: "--vswitchname",
              description: "Azure Stack HCI virtual network switch name",
              args: { name: "vswitchname" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to create Arc resource bridge configuration files for Arc-enabled SCVMM",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridgeAzure resource will be deployed. Must be a valid location where Arc-enabled SCVMM is available and set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "SCVMM Server FQDN(Role name in case of HAVMM) or IP address",
              args: { name: "address" },
            },
            {
              name: "--certificateFilePath",
              description:
                "Certificate file path if your proxy server requires the proxy clients to trust a certificate (press enter to skip)",
              args: { name: "certificateFilePath" },
            },
            {
              name: "--cloudname",
              description: "SCVMM cloud",
              args: { name: "cloudname" },
            },
            {
              name: "--controlPlaneEndpoint",
              description:
                "Arc resource bridge on-premises appliance VM hosts a management kubernetes cluster with a control plane that requires a static IP address. This static IP address must lie within the subnet range specified in the IP address prefix",
              args: { name: "controlPlaneEndpoint" },
            },
            {
              name: "--dnsservers",
              description:
                "IP address(es) of DNS server(s) used by Arc resource bridge on-premises appliance VM for DNS resolution. Appliance VM must be able to resolve external sites and internal endpoints. Enter multiple IP addresses as a comma-separated list",
              args: { name: "dnsservers" },
            },
            {
              name: "--gateway",
              description:
                "Static gateway IP address, must lie within the subnet range specified in the IP address prefix",
              args: { name: "gateway" },
            },
            {
              name: "--highlyavailable",
              description:
                "Deploy resource bridge as Highly available.Highly available vm recommended for production environment.(Expected true/false)",
              args: { name: "highlyavailable" },
            },
            {
              name: "--http",
              description:
                "HTTP proxy URL and port information entered as http://:. Example: http://192.168.0.10:80",
              args: { name: "http" },
            },
            {
              name: "--https",
              description:
                "HTTPS URL and port information entered as http://:. Example: https://192.168.0.10:443",
              args: { name: "https" },
            },
            {
              name: "--ipaddressprefix",
              description:
                "Arc resource bridge requires 3 IP addresses for the on-premises appliance VM (appliance VM IP, upgrade VM IP, control plane IP). All IPs should reside within the same subnet and fall within the range specified in the IP address prefix. IP address prefix is entered as the subnet's IP address range for the virtual network and subnet mask (IP Mask) in CIDR notation (ex: 192.168.7.1/24). An IP Subnet CIDR calculator can be used for this. Example: For IPs within a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "ipaddressprefix" },
            },
            {
              name: "--ippool",
              description: "SCVMM Static IP Pool",
              args: { name: "ippool" },
            },
            {
              name: "--k8snodeippoolend",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the end range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolend" },
            },
            {
              name: "--k8snodeippoolstart",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the start range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolstart" },
            },
            {
              name: "--libshare",
              description:
                "SCVMM library share (Ensure VMM server has write access on the selected Library Share)",
              args: { name: "libshare" },
            },
            {
              name: "--macaddress",
              description:
                "Static MAC address (Press enter to assign MAC from Default VMM MAC Pool)",
              args: { name: "macaddress" },
            },
            {
              name: "--memorymib",
              description:
                "Specify the memory (MB) for the Arc resource bridge on-premises appliance VM",
              args: { name: "memorymib" },
            },
            {
              name: "--network",
              description: "SCVMM VM network",
              args: { name: "network" },
            },
            {
              name: "--noproxy",
              description:
                "The list of comma separated entries for excluded networks, hosts, or domains from being accessed through the proxy server",
              args: { name: "noproxy" },
            },
            {
              name: "--numcpus",
              description:
                "Specify the number of CPUs to allocate to the Arc resource bridge on-premises appliance VM",
              args: { name: "numcpus" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for Arc resource bridge configuration files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--overwrite-existing",
              description:
                "Overwrite existing configuration files. Default: False",
            },
            {
              name: "--password",
              description: "SCVMM Administrator Password",
              args: { name: "password" },
            },
            {
              name: "--port",
              description:
                "SCVMM server port (The default is 8100. This is the port number specified for VMM console to server connection e.g. vmmserver.constoso.com:8100)",
              args: { name: "port" },
            },
            {
              name: "--username",
              description: "SCVMM Administrator Username (domain\\username)",
              args: { name: "username" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to create Arc resource bridge configuration files for Arc-enabled VMware",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridge Azure resource will be deployed. Must be a valid location where Arc-enabled VMware is available and set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "FQDN or IP address for vCenter Server instance. Ex: 10.160.0.1",
              args: { name: "address" },
            },
            {
              name: "--certificateFilePath",
              description:
                "Certificate file path if your proxy server requires the proxy clients to trust a certificate. Only pass a single proxy certificate, not a bundle. (Press enter to skip)",
              args: { name: "certificateFilePath" },
            },
            {
              name: "--controlPlaneEndpoint",
              description:
                "Arc resource bridge on-premises appliance VM hosts a management kubernetes cluster with a control plane that requires a static IP address. This static IP address must lie within the subnet range specified in the IP address prefix",
              args: { name: "controlPlaneEndpoint" },
            },
            {
              name: "--datacenter",
              description:
                "Name of the datacenter (as shown in vSphere) where the Arc resource bridge on-premises appliance VM should be deployed",
              args: { name: "datacenter" },
            },
            {
              name: "--datastore",
              description:
                "Name of datastore to be used for Arc resource bridge on-premises appliance VM",
              args: { name: "datastore" },
            },
            {
              name: "--disksizegib",
              description:
                "Specify the disk size (GB) for the Arc resource bridge on-premises appliance VM",
              args: { name: "disksizegib" },
            },
            {
              name: "--dnsservers",
              description:
                "IP address(es) of DNS server(s) used by Arc resource bridge on-premises appliance VM for DNS resolution. Appliance VM must be able to resolve external sites and internal endpoints. Enter multiple IP addresses as a comma-separated list",
              args: { name: "dnsservers" },
            },
            {
              name: "--folder",
              description:
                "Full path to the vSphere folder, including vSphere VM name and template folder. This is where the Arc resource bridge appliance VM will be deployed. Ex: /DatacenterA/vm/FolderA",
              args: { name: "folder" },
            },
            {
              name: "--gateway",
              description:
                "Static gateway IP address, must lie within the subnet range specified in the IP address prefix",
              args: { name: "gateway" },
            },
            {
              name: "--http",
              description:
                "HTTP proxy URL and port information entered as http://:. Example: http://192.168.0.10:80",
              args: { name: "http" },
            },
            {
              name: "--https",
              description:
                "HTTPS URL and port information entered as http://:. Example: https://192.168.0.10:443",
              args: { name: "https" },
            },
            {
              name: "--ipaddressprefix",
              description:
                "Arc resource bridge requires 3 IP addresses for the on-premises appliance VM (appliance VM IP, upgrade VM IP, control plane IP). All IPs should reside within the same subnet and fall within the range specified in the IP address prefix. IP address prefix is entered as the subnet's IP address range for the virtual network and subnet mask (IP Mask) in CIDR notation (ex: 192.168.7.1/24). An IP Subnet CIDR calculator can be used for this. Example: For IPs within a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "ipaddressprefix" },
            },
            {
              name: "--k8snodeippoolend",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the end range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolend" },
            },
            {
              name: "--k8snodeippoolstart",
              description:
                "Arc resource bridge on-premises appliance VM requires 2 IP addresses (appliance VM IP & upgrade VM IP) that should reside within the same subnet and fall within the range specified in the IP address prefix. IP addresses are specified as an IP range with a minimum size of 2 IP addresses. This parameter is to specify the start range IP. Example: For a subnet range of 192.168.7.1 - 192.168.7.254, the IP address prefix is 192.168.7.1/24. Within 192.168.7.1/24, set k8snodeippoolstart (appliance VM IP) to 192.168.7.2, k8snodeippoolend (upgrade VM IP) to 192.168.7.3 and control plane IP to 192.168.7.4",
              args: { name: "k8snodeippoolstart" },
            },
            {
              name: "--memorymib",
              description:
                "Specify the memory (MB) for the Arc resource bridge on-premises appliance VM",
              args: { name: "memorymib" },
            },
            {
              name: "--network",
              description:
                "Name of the virtual network or segment to connect Arc resource bridge on-premises appliance VM to. This network should allow the appliance VM to communicate with vCenter Server and the Azure endpoints (or internet)",
              args: { name: "network" },
            },
            {
              name: "--noproxy",
              description:
                "The list of comma separated entries for excluded networks, hosts, or domains from being accessed through the proxy server",
              args: { name: "noproxy" },
            },
            {
              name: "--numcpus",
              description:
                "Specify the number of CPUs to allocate to the Arc resource bridge on-premises appliance VM",
              args: { name: "numcpus" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for Arc resource bridge configuration files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--overwrite-existing",
              description:
                "Overwrite existing configuration files. Default: False",
            },
            {
              name: "--password",
              description:
                "Password for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "password" },
            },
            {
              name: "--resourcepool",
              description:
                "Full path to the vSphere resource pool where the on-premises appliance VM will be deployed. Ex: /DatacenterA/host/Cluster-1/Resources/ResourcePoolA",
              args: { name: "resourcepool" },
            },
            {
              name: "--username",
              description:
                "Username for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "username" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description:
        "Command group for deletion of an Arc resource bridge on-premises appliance VM and its Azure resource",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to delete the on-premises appliance VM on Azure Stack HCI and Arc resource bridge Azure resource",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to delete the on-premises appliance VM on SCVMM and Azure resource",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to delete the on-premises appliance VM and Azure resource for Arc resource bridge (Arc-enabled VMware)",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Command group for deployment of the Arc resource bridge on-premises appliance VM and creation of its corresponding Azure resource",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to deploy the Arc resource bridge's on-premises appliance VM on Azure Stack HCI and its corresponding Azure resource",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--outfile",
              description:
                "File output path for the kubeconfig, defaults to ./kubeconfig",
              args: { name: "outfile" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to deploy the Arc resource bridge's on-premises appliance VM and its Azure resource for Arc-enabled SCVMM",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--outfile",
              description:
                "File output path for the kubeconfig, defaults to ./kubeconfig",
              args: { name: "outfile" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to deploy the Arc resource bridge's on-premises appliance VM on VMWare and its corresponding Azure resource",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--outfile",
              description:
                "File output path for the kubeconfig, defaults to ./kubeconfig",
              args: { name: "outfile" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "get-credentials",
      description:
        "Command to get the on-premises infrastructure credentials used by Arc resource bridge to manage on-premises resources",
      options: [
        {
          name: "--config-file",
          description:
            "Path to Appliance Config File. This is required if name and resource group are not specified",
          args: { name: "config-file" },
        },
        {
          name: "--credentials-dir",
          description:
            "Specify a directory path where the log key, certificate output and kubeconfig are saved. If no value specified, for Darwin/Linux defaults to .kva/.ssh for keys and current directory for kubeconfig,for windows defaults to C:\\ProgramData\\kva.ssh for keys and current directory for kubeconfig",
          args: { name: "credentials-dir" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Arc resource bridge",
          args: { name: "name" },
        },
        {
          name: "--overwrite-existing",
          description: "Overwrite existing kubeconfig file. Default: False",
        },
        {
          name: "--partner",
          description:
            "Returns the credentials used by private cloud RP/service to access Arc Resource Bridge. Default: customer user credentials",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Do not prompt for confirmation to create credentials_dir if directory does not exist. Default is to prompt for directory creation",
        },
      ],
    },
    {
      name: "get-upgrades",
      description: "Command to fetch the available upgrades for an Appliance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Arc resource bridge",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "list",
      description: "Command to list Arc resource bridge resources",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "notice",
      description:
        "Command to display the EULA & Notice File link for Arc resource bridge",
    },
    {
      name: "show",
      description:
        "Command to provide information about an Arc resource bridge Azure resource. This is useful to monitor the status of the resource bridge",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Arc resource bridge",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "logs",
      description:
        "Command group for collecting logs for Arc resource bridge. Run get-credentials command before running logs command",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to collect logs for an Arc resource bridge's on-premises appliance VM on Azure Stack HCI",
          options: [
            {
              name: "--cloudagent",
              description:
                "FQDN or IP address of the Azure Stack HCI MOC cloud agent service used by Arc resource bridge. This can be found in the -infra.yaml configuration file stored locally on the HCI cluster",
              args: { name: "cloudagent" },
            },
            {
              name: "--credentials-dir",
              description:
                "Folder to read logging key and certificate from. If no value specified, defaults to .kva/.ssh for Darwin and Linux and C:\\ProgramData\\kva.ssh for Windows",
              args: { name: "credentials-dir" },
            },
            {
              name: "--ip",
              description:
                "Arc resource bridge on-premises appliance VM IP or its control plane IP",
              args: { name: "ip" },
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
            },
            {
              name: "--loginconfigfile",
              description:
                "File path for the Azure Stack HCI login configuration file, kvatoken.tok. By default, it is stored locally on the HCI cluster",
              args: { name: "loginconfigfile" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to collect logs for Arc resource bridge on SCVMM (Arc-enabled SCVMM)",
          options: [
            {
              name: "--credentials-dir",
              description:
                "Folder to read logging key and certificate from. If no value specified, defaults to .kva/.ssh for Darwin and Linux and C:\\ProgramData\\kva.ssh for Windows",
              args: { name: "credentials-dir" },
            },
            {
              name: "--ip",
              description:
                "Arc resource bridge on-premises appliance VM IP or its control plane IP",
              args: { name: "ip" },
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to collect logs for Arc resource bridge on VMware (Arc-enabled VMware)",
          options: [
            {
              name: "--address",
              description:
                "FQDN or IP address for vCenter Server instance. Ex: 10.160.0.1",
              args: { name: "address" },
            },
            {
              name: "--credentials-dir",
              description:
                "Folder to read logging key and certificate from. If no value specified, defaults to .kva/.ssh for Darwin and Linux and C:\\ProgramData\\kva.ssh for Windows",
              args: { name: "credentials-dir" },
            },
            {
              name: "--ip",
              description:
                "Arc resource bridge on-premises appliance VM IP or its control plane IP",
              args: { name: "ip" },
            },
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig, output from deploy command",
              args: { name: "kubeconfig" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--password",
              description:
                "Password for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "password" },
            },
            {
              name: "--username",
              description:
                "Username for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "username" },
            },
          ],
        },
      ],
    },
    {
      name: "prepare",
      description:
        "Command group for preparing for an Arc resource bridge deployment. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to prepare the on-premises Azure Stack HCI environment for an Arc resource bridge deployment. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to prepare for an Arc resource bridge deployment on SCVMM for Arc-enabled SCVMM. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to prepare for an Arc resource bridge deployment on VMware for Arc-enabled VMware. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description:
        "Command group for consecutively running the Arc resource bridge commands required for deployment. This command is idempotent",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to consecutively run the Arc resource bridge commands required for deployment on Azure Stack HCI. This command is idempotent",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridge Azure resource will be deployed. Must be set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--cloudagent",
              description:
                "FQDN or IP address of the Azure Stack HCI MOC cloud agent service used by Arc resource bridge. This can be found in the -infra.yaml configuration file stored locally on the HCI cluster",
              args: { name: "cloudagent" },
            },
            {
              name: "--force",
              description:
                "Delete Arc resource bridge on-premises appliance VM and Azure resource with the same name/id (if it exists) before continuing to the run command",
            },
            {
              name: "--loginconfigfile",
              description:
                "File path for the Azure Stack HCI login configuration file, kvatoken.tok. By default, it is stored locally on the HCI cluster",
              args: { name: "loginconfigfile" },
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to consecutively run the Arc resource bridge commands required for deployment on SCVMM. This command is idempotent",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridge Azure resource will be deployed. Must be set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "SCVMM Server FQDN(Role name in case of HAVMM) or IP address",
              args: { name: "address" },
            },
            {
              name: "--force",
              description:
                "Delete Arc resource bridge on-premises appliance VM and Azure resource with the same name/id (if it exists) before continuing to the run command",
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--password",
              description: "SCVMM Administrator Password",
              args: { name: "password" },
            },
            {
              name: "--port",
              description:
                "SCVMM server port (The default is 8100. This is the port number specified for VMM console to server connection e.g. vmmserver.constoso.com:8100)",
              args: { name: "port" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--username",
              description: "SCVMM Administrator Username (domain\\username)",
              args: { name: "username" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to consecutively run the Arc resource bridge commands required for deployment on VMware (Arc-enabled VMware). This command is idempotent",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The Azure location where the Arc resource bridge Azure resource will be deployed. Must be set to the same location as the resource group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "FQDN or IP address for vCenter Server instance. Ex: 10.160.0.1",
              args: { name: "address" },
            },
            {
              name: "--force",
              description:
                "Delete Arc resource bridge on-premises appliance VM and Azure resource with the same name/id (if it exists) before continuing to the run command",
            },
            {
              name: "--out-dir",
              description:
                "Output directory for on-premises appliance VM log files, defaults to ./ (current directory)",
              args: { name: "out-dir" },
            },
            {
              name: "--password",
              description:
                "Password for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "password" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--username",
              description:
                "Username for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "username" },
            },
            {
              name: "--working-dir",
              description:
                "Local directory path to store image & files downloaded for Arc resource bridge on-premises appliance VM deployment. If not specified, a default temp directory is used",
              args: { name: "working-dir" },
            },
          ],
        },
      ],
    },
    {
      name: "troubleshoot",
      description: "Command group for troubleshooting an Appliance cluster",
      subcommands: [
        {
          name: "command",
          description:
            "Command group for troubleshooting an Appliance cluster by executing a shell command",
          subcommands: [
            {
              name: "hci",
              description:
                "Command to execute a shell command on an HCI cluster for troubleshooting",
              options: [
                {
                  name: "--cloudagent",
                  description:
                    "FQDN or IP address of the Azure Stack HCI MOC cloud agent service used by Arc resource bridge. This can be found in the -infra.yaml configuration file stored locally on the HCI cluster",
                  args: { name: "cloudagent" },
                },
                {
                  name: "--command",
                  description: "This is the shell command to be executed",
                  args: { name: "command" },
                },
                {
                  name: "--credentials-dir",
                  description:
                    "This is the path to the log key directory, which stores credentials for your Resource Bridge. Once a scoped access key has been generated, use the az arcappliance get-credentials command to download it",
                  args: { name: "credentials-dir" },
                },
                {
                  name: "--ip",
                  description:
                    "Arc resource bridge on-premises appliance VM IP or its control plane IP",
                  args: { name: "ip" },
                },
                {
                  name: "--loginconfigfile",
                  description:
                    "File path for the Azure Stack HCI login configuration file, kvatoken.tok. By default, it is stored locally on the HCI cluster",
                  args: { name: "loginconfigfile" },
                },
              ],
            },
            {
              name: "scvmm",
              description:
                "Command to execute a shell command on an SCVMM cluster for troubleshooting",
              options: [
                {
                  name: "--command",
                  description: "This is the shell command to be executed",
                  args: { name: "command" },
                },
                {
                  name: "--credentials-dir",
                  description:
                    "This is the path to the log key directory, which stores credentials for your Resource Bridge. Once a scoped access key has been generated, use the az arcappliance get-credentials command to download it",
                  args: { name: "credentials-dir" },
                },
                {
                  name: "--ip",
                  description:
                    "Arc resource bridge on-premises appliance VM IP or its control plane IP",
                  args: { name: "ip" },
                },
              ],
            },
            {
              name: "vmware",
              description:
                "Command to execute a shell command on an VMWare cluster for troubleshooting",
              options: [
                {
                  name: "--address",
                  description:
                    "FQDN or IP address for vCenter Server instance. Ex: 10.160.0.1",
                  args: { name: "address" },
                },
                {
                  name: "--command",
                  description: "This is the shell command to be executed",
                  args: { name: "command" },
                },
                {
                  name: "--credentials-dir",
                  description:
                    "This is the path to the log key directory, which stores credentials for your Resource Bridge. Once a scoped access key has been generated, use the az arcappliance get-credentials command to download it",
                  args: { name: "credentials-dir" },
                },
                {
                  name: "--ip",
                  description:
                    "Arc resource bridge on-premises appliance VM IP or its control plane IP",
                  args: { name: "ip" },
                },
                {
                  name: "--password",
                  description:
                    "Password for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
                  args: { name: "password" },
                },
                {
                  name: "--username",
                  description:
                    "Username for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "update-infracredentials",
      description:
        "Command group for updating the on-premises infrastructure credentials used by Arc resource bridge to manage on-premises resources",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to update the on-premises infrastructure credentials for Azure Stack HCI used by Arc resource bridge",
          options: [
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: "--cloudagent",
              description:
                "FQDN or IP address of the Azure Stack HCI MOC cloud agent service used by Arc resource bridge. This can be found in the -infra.yaml configuration file stored locally on the HCI cluster",
              args: { name: "cloudagent" },
            },
            {
              name: "--loginconfigfile",
              description:
                "File path for the Azure Stack HCI login configuration file, kvatoken.tok. By default, it is stored locally on the HCI cluster",
              args: { name: "loginconfigfile" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to update the SCVMM credentials used by Arc resource bridge",
          options: [
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "SCVMM Server FQDN(Role name in case of HAVMM) or IP address",
              args: { name: "address" },
            },
            {
              name: "--password",
              description: "SCVMM Administrator Password",
              args: { name: "password" },
            },
            {
              name: "--port",
              description:
                "SCVMM server port (The default is 8100. This is the port number specified for VMM console to server connection e.g. vmmserver.constoso.com:8100)",
              args: { name: "port" },
            },
            {
              name: "--username",
              description: "SCVMM Administrator Username (domain\\username)",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to update the VMware credentials used by Arc resource bridge",
          options: [
            {
              name: "--kubeconfig",
              description: "Path to kubeconfig output from deploy command",
              args: { name: "kubeconfig" },
              isRequired: true,
            },
            {
              name: "--address",
              description:
                "FQDN or IP address for vCenter Server instance. Ex: 10.160.0.1",
              args: { name: "address" },
            },
            {
              name: "--password",
              description:
                "Password for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "password" },
            },
            {
              name: "--skipWait",
              description:
                "Use this flag to update the vCenter credentials without verification. This is only recommended if you are locked out of vSphere and validation is not possible until lockout period expires",
            },
            {
              name: "--username",
              description:
                "Username for vSphere account that Arc resource bridge uses for on-premises infrastructure guest management",
              args: { name: "username" },
            },
          ],
        },
      ],
    },
    {
      name: "upgrade",
      description: "Command group for upgrading an Appliance cluster",
      subcommands: [
        {
          name: "hci",
          description: "Command to upgrade an Appliance on Azure Stack HCI",
          options: [
            {
              name: "--config-file",
              description: "Path to Appliance Config File",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "scvmm",
          description: "Command to upgrade an Appliance on SCVMM",
          options: [
            {
              name: "--config-file",
              description: "Path to Appliance Config File",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "vmware",
          description: "Command to upgrade an Appliance on VMware",
          options: [
            {
              name: "--config-file",
              description: "Path to Appliance Config File",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "validate",
      description:
        "Command group to perform validations on Arc resource bridge configuration files and network settings",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to validate Arc resource bridge configuration files and network settings on Azure Stack HCI - should be done before 'prepare' command",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "scvmm",
          description:
            "Command to validate Arc resource bridge configuration files and network settings for Arc-enabled SCVMM  - should be done before 'prepare' command",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "vmware",
          description:
            "Command to validate Arc resource bridge configuration files and network settings for Arc-enabled VMware - should be done before 'prepare' command",
          options: [
            {
              name: "--config-file",
              description:
                "Path to the Arc resource bridge appliance config file, -appliance.yaml",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Arc resource bridge",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
