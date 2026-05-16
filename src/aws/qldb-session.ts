const completionSpec: Fig.Spec = {
  name: "qldb-session",
  description:
    "The transactional data APIs for Amazon QLDB  Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.   If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this QLDB Session data plane and manages SendCommand API calls for you. For information and a list of supported programming languages, see Getting started with the driver in the Amazon QLDB Developer Guide.   If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see Accessing Amazon QLDB using the QLDB shell",
  subcommands: [
    {
      name: "send-command",
      description:
        "Sends a command to an Amazon QLDB ledger.  Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.   If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this QLDB Session data plane and manages SendCommand API calls for you. For information and a list of supported programming languages, see Getting started with the driver in the Amazon QLDB Developer Guide.   If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see Accessing Amazon QLDB using the QLDB shell",
      options: [
        {
          name: "--session-token",
          description:
            "Specifies the session token for the current command. A session token is constant throughout the life of the session. To obtain a session token, run the StartSession command. This SessionToken is required for every subsequent command that is issued during the current session",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-session",
          description:
            "Command to start a new session. A session token is obtained as part of the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--start-transaction",
          description: "Command to start a new transaction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--end-session",
          description: "Command to end the current session",
          args: {
            name: "structure",
          },
        },
        {
          name: "--commit-transaction",
          description: "Command to commit the specified transaction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--abort-transaction",
          description: "Command to abort the current transaction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execute-statement",
          description:
            "Command to execute a statement in the specified transaction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fetch-page",
          description: "Command to fetch a page",
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
  ],
};
export default completionSpec;
