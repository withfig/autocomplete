var completionSpec = {
    name: "dig",
    description: "Domain Information Groper",
    subcommands: [
      { name: "A", description: "Query Domain A Record" },
      { name: "NS", description: "Query MX Record" },
      { name: "SOA", description: "Query SOA Record" },
      { name: "TTL", description: "Query TTL Record" },
      { name: "ANY +noall +answer", description: "Query ALL DNS Records" },
      { name: "+nocomments +noquestion +noauthority +noadditional +nostats", description: "Query only answer section"}
    ],
  };
  