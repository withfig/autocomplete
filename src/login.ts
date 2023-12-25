const completionSpec: Fig.Spec = {
  name: "login",
  description: "Begin session on the system",
  options: [
    {
      name: "-p",
      description: "Preserve environment",
    },
    {
      name: "-r",
      description: "Perform autologin protocol for rlogin",
    },
    {
      name: "-h",
      description: "Specify host",
      args: {
        name: "host",
      },
    },
    {
      name: "-f",
      description: "Don't authenticate user, user is preauthenticated",
    },
  ],
  args: {
    name: "username",
    generators: {
      script: ["cat", "/etc/passwd"],
      postProcess: (out) => {
        return out.split("\n").map((line) => {
          const [username] = line.split(":");
          return {
            name: username,
            icon: "👤",
          };
        });
      },
    },
  },
};
export default completionSpec;
