var completionSpec = {
  name: 'knex',
  description: 'SQL in JavaScript',
  subcommands: [
    {
      name: 'migrate:',
      description: 'Traverse your database',
      args: {},
      options: [
        {
          name: ['up'],
          description: 'Traverse your database one up',
          args: {
            name: 'up',
          },
        },
      ],
    },
  ],
};
