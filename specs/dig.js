var completionSpec = {
  name: "dig",
  description: "Domain Information Groper",
  subcommands: [
    {
      name: "A",
      description: "Query Domain A Record",
      insertValue: "A ",
      options: [
        {
          name: ["+short", ""],
          insertValue: "+short {cursor}",
          description: "only print meaningful results",
          args: {},
        },
      ],
    },
    {
      name: "MX",
      description: "Query Domain MX Record",
      insertValue: "MX ",
      options: [
        {
          name: ["+short", ""],
          insertValue: "+short {cursor}",
          description: "only print meaningful results",
          args: {},
        },
      ],
    },
    {
      name: "NS",
      description: "Query MX Record",
      insertValue: "NS ",
      options: [
        {
          name: ["+short", ""],
          insertValue: "+short {cursor}",
          description: "only print meaningful results",
          args: {},
        },
      ],
    },
    {
      name: "SOA",
      description: "Query SOA Record",
      insertValue: "SOA ",
      options: [
        {
          name: ["+short", ""],
          insertValue: "+short {cursor}",
          description: "only print meaningful results",
          args: {},
        },
      ],
    },
    {
      name: "TTL",
      description: "Query TTL Record",
      insertValue: "TTL ",
      options: [
        {
          name: ["+short", ""],
          insertValue: "+short {cursor}",
          description: "only print meaningful results",
          args: {},
        },
      ],
    },
    {
      name: "ANY +noall +answer",
      description: "Query ALL DNS Records",
      insertValue: "ANY +noall +answer ",
    },
    {
      name: "+nocomments +noquestion +noauthority +noadditional +nostats",
      description: "Query only answer section",
      insertValue:
        "+nocomments +noquestion +noauthority +noadditional +nostats ",
    },
  ],
};
