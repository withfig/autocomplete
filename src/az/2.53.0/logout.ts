const completion: Fig.Spec = {
  name: "logout",
  description: "Log out to remove access to Azure subscriptions",
  options: [
    {
      name: "--username",
      description:
        "Account user, if missing, logout the current active account",
      args: { name: "username" },
    },
  ],
};

export default completion;
