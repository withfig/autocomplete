const completionSpec: Fig.Spec = {
  name: "eks-auth",
  description:
    "The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent",
  subcommands: [
    {
      name: "assume-role-for-pod-identity",
      description:
        "The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent. We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if credentials from an EKS Pod Identity association are available in the pod, the latest versions of the SDKs use them automatically",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description:
            "The token of the Kubernetes service account for the pod",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
