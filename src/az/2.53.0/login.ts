const completion: Fig.Spec = {
  name: "login",
  description: "Log in to Azure",
  options: [
    {
      name: "--allow-no-subscriptions",
      description:
        "Support access tenants without subscriptions. It's uncommon but useful to run tenant level commands, such as 'az ad'",
    },
    {
      name: "--federated-token",
      description: "Federated token that can be used for OIDC token exchange",
      args: { name: "federated-token" },
    },
    {
      name: ["--identity", "-i"],
      description: "Log in using the Virtual Machine's identity",
    },
    {
      name: ["--password", "-p"],
      description:
        "Credentials like user password, or for a service principal, provide client secret or a pem file with key and public certificate. Will prompt if not given",
      args: { name: "password" },
    },
    {
      name: "--scope",
      description:
        "Used in the /authorize request. It can cover only one static resource",
      args: { name: "scope" },
    },
    {
      name: "--service-principal",
      description: "The credential representing a service principal",
      args: { name: "service-principal" },
    },
    {
      name: ["--tenant", "-t"],
      description: "The AAD tenant, must provide when using service principals",
      args: { name: "tenant" },
    },
    {
      name: "--use-cert-sn-issuer",
      description:
        "Used with a service principal configured with Subject Name and Issuer Authentication in order to support automatic certificate rolls",
      args: { name: "use-cert-sn-issuer" },
    },
    {
      name: "--use-device-code",
      description:
        "Use CLI's old authentication flow based on device code. CLI will also use this if it can't launch a browser in your behalf, e.g. in remote SSH or Cloud Shell",
    },
    {
      name: ["--username", "-u"],
      description:
        "User name, service principal, or managed service identity ID",
      args: { name: "username" },
    },
  ],
};

export default completion;
