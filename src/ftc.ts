//https://github.com/el2zay/freetranscli

const completionSpec: Fig.Spec = {
  name: "ftc",
  description: "FreeTransCLI is a CLI for uploading and downloading files through https://transfert.free.fr",
  subcommands: [
    {
      name: ["download", "d", "dld", "down"],
      description: "Télécharge depuis une url FreeTransfert",
      icon: "📥",
      args: {
        name: "url",
        description: "URL FreeTransfert",
      },
    },
    {
      name: "history",
      description: "Affiche l'historique",
      icon: "📜",
    },
    {
      name: ["issue", "bug", "github"],
      description: "Crée une issue GitHub",
      icon: "🐞",
    },
    {
      name: ["set", "config"],
      description: "Paramétrer le CLI",
      icon: "⚙️",
    },
    {
      name: ["upload", "u", "up"],
      description: "Upload un fichier",
      icon: "📤",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "uninstall",
      description: "Désinstalle le CLI",
      icon: "🚮",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Afficher l'aide pour freetransCLI",
    },
  ],
};
export default completionSpec;
