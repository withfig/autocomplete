const completionSpec: Fig.Spec = {
  name: "managedblockchain",
  description:
    "Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as CreateMember and DeleteMember do not apply to Ethereum. The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated",
  subcommands: [
    {
      name: "create-member",
      description:
        "Creates a member within a Managed Blockchain network. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--invitation-id",
          description:
            "The unique identifier of the invitation that is sent to the member to join the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-id",
          description:
            "The unique identifier of the network in which the member is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-configuration",
          description: "Member configuration parameters",
          args: {
            name: "structure",
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
    {
      name: "create-network",
      description:
        "Creates a new blockchain network using Amazon Managed Blockchain. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework",
          description: "The blockchain framework that the network uses",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-version",
          description:
            "The version of the blockchain framework that the network uses",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-configuration",
          description:
            "Configuration properties of the blockchain framework relevant to the network configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--voting-policy",
          description:
            "The voting rules used by the network to determine if a proposal is approved",
          args: {
            name: "structure",
          },
        },
        {
          name: "--member-configuration",
          description:
            "Configuration properties for the first member within the network",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to assign to the network. Each tag consists of a key and optional value. When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
          args: {
            name: "map",
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
    {
      name: "create-node",
      description:
        "Creates a node on the specified blockchain network. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-id",
          description:
            "The unique identifier of the network for the node. Ethereum public networks have the following NetworkIds:    n-ethereum-mainnet     n-ethereum-rinkeby     n-ethereum-ropsten",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member that owns this node. Applies only to Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-configuration",
          description: "The properties of a node configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to assign to the node. Each tag consists of a key and optional value. When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
          args: {
            name: "map",
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
    {
      name: "create-proposal",
      description:
        "Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-id",
          description:
            "The unique identifier of the network for which the proposal is made",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description:
            "The type of actions proposed, such as inviting a member or removing a member. The types of Actions in a proposal are mutually exclusive. For example, a proposal with Invitations actions cannot also contain Removals actions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            'A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."',
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to assign to the proposal. Each tag consists of a key and optional value. When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource. If the proposal is for a network invitation, the invitation inherits the tags added to the proposal. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
          args: {
            name: "map",
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
    {
      name: "delete-member",
      description:
        "Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last AWS account, the network is deleted also. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network from which the member is removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The unique identifier of the member to remove",
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
    {
      name: "delete-node",
      description:
        "Deletes a node that your AWS account owns. All data on the node is lost and cannot be recovered. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network that the node is on. Ethereum public networks have the following NetworkIds:    n-ethereum-mainnet     n-ethereum-rinkeby     n-ethereum-ropsten",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member that owns this node. Applies only to Hyperledger Fabric and is required for Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description: "The unique identifier of the node",
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
    {
      name: "get-member",
      description:
        "Returns detailed information about a member. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network to which the member belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The unique identifier of the member",
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
    {
      name: "get-network",
      description:
        "Returns detailed information about a network. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network to get information about",
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
    {
      name: "get-node",
      description:
        "Returns detailed information about a node. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network that the node is on",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member that owns the node. Applies only to Hyperledger Fabric and is required for Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description: "The unique identifier of the node",
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
    {
      name: "get-proposal",
      description:
        "Returns detailed information about a proposal. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network for which the proposal is made",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposal-id",
          description: "The unique identifier of the proposal",
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
    {
      name: "list-invitations",
      description:
        "Returns a list of all invitations for the current AWS account. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of invitations to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-members",
      description:
        "Returns a list of the members in a network and properties of their configurations. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network for which to list members",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The optional name of the member to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "An optional status specifier. If provided, only members currently in this status are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-owned",
          description:
            "An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (true) or that other AWS accounts own (false). If omitted, all members are listed",
        },
        {
          name: "--no-is-owned",
          description:
            "An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (true) or that other AWS accounts own (false). If omitted, all members are listed",
        },
        {
          name: "--max-results",
          description: "The maximum number of members to return in the request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-networks",
      description:
        "Returns information about the networks in which the current AWS account participates. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--name",
          description: "The name of the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework",
          description:
            "An optional framework specifier. If provided, only networks of this framework type are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "An optional status specifier. If provided, only networks currently in this status are listed. Applies only to Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of networks to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-nodes",
      description:
        "Returns information about the nodes within a network. Applies to Hyperledger Fabric and Ethereum",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network for which to list nodes",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member who owns the nodes to list. Applies only to Hyperledger Fabric and is required for Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "An optional status specifier. If provided, only nodes currently in this status are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of nodes to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-proposal-votes",
      description:
        "Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description: "The unique identifier of the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposal-id",
          description: "The unique identifier of the proposal",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of votes to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-proposals",
      description:
        "Returns a list of proposals for the network. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description: "The unique identifier of the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of proposals to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
    {
      name: "list-tags-for-resource",
      description:
        "Returns a list of tags for the specified resource. Each tag consists of a key and optional value. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the AWS General Reference",
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
    {
      name: "reject-invitation",
      description:
        "Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--invitation-id",
          description: "The unique identifier of the invitation to reject",
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
    {
      name: "tag-resource",
      description:
        "Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value. When you specify a tag key that already exists, the tag value is overwritten with the new value. Use UntagResource to remove tag keys. A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the AWS General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags to assign to the specified resource. Tag values can be empty, for example, "MyTagKey" : "". You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource',
          args: {
            name: "map",
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
    {
      name: "untag-resource",
      description:
        "Removes the specified tags from the Amazon Managed Blockchain resource. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the AWS General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
          args: {
            name: "list",
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
    {
      name: "update-member",
      description:
        "Updates a member configuration with new parameters. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the Managed Blockchain network to which the member belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The unique identifier of the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-publishing-configuration",
          description:
            "Configuration properties for publishing to Amazon CloudWatch Logs",
          args: {
            name: "structure",
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
    {
      name: "update-node",
      description:
        "Updates a node configuration with new parameters. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description:
            "The unique identifier of the network that the node is on",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The unique identifier of the member that owns the node. Applies only to Hyperledger Fabric",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description: "The unique identifier of the node",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-publishing-configuration",
          description:
            "Configuration properties for publishing to Amazon CloudWatch Logs",
          args: {
            name: "structure",
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
    {
      name: "vote-on-proposal",
      description:
        "Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId, must be in the same AWS account as the principal that calls the action. Applies only to Hyperledger Fabric",
      options: [
        {
          name: "--network-id",
          description: "The unique identifier of the network",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposal-id",
          description: "The unique identifier of the proposal",
          args: {
            name: "string",
          },
        },
        {
          name: "--voter-member-id",
          description: "The unique identifier of the member casting the vote",
          args: {
            name: "string",
          },
        },
        {
          name: "--vote",
          description: "The value of the vote",
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
