// https://github.com/hnarayanan/shpotify
const completionSpec: Fig.Spec = {
  name: "spotify",
  description: "CLI to use Spotify from the terminal",
  subcommands: [
    {
      name: "play",
      description: "Resume playback where Spotify last left off",
      args: {
        name: "song name",
        description: "The name of the song to start playing",
        isOptional: true,
      },
      subcommands: [
        {
          name: "album",
          description: "Find an album by name and play it",
          args: {
            name: "album name",
            description: "The album name you want to play",
          },
        },
        {
          name: "artist",
          description: "Find an artist by name and play it",
          args: {
            name: "artist name",
            description: "The artist name you want to play",
          },
        },
        {
          name: "list",
          description: "Find a playlist by name and plays it",
          args: {
            name: "playlist name",
            description: "The playlist name you want to play",
          },
        },
        {
          name: "uri",
          description: "Play songs from specific uri",
          args: {
            name: "uri",
            description: "The uri of the song you want to play",
          },
        },
      ],
    },
    {
      name: "next",
      description: "Skip to the next song in a playlist",
    },
    {
      name: "prev",
      description: "Return to the previous song in a playlist",
    },
    {
      name: "replay",
      description: "Replay the current track from the beginning",
    },
    {
      name: "pos",
      description: "Jump to a time (in secs) in the current song",
      args: {
        name: "time",
        description: "Exact time in secs to jump in",
      },
    },
    {
      name: "pause",
      description: "Pause (or resume) Spotify playback",
    },
    {
      name: "stop",
      description: "Stop playback",
    },
    {
      name: "quit",
      description: "Stop playback and quit Spotify",
    },
    {
      name: "vol",
      description: "Show the current Spotify volume",
      args: {
        name: "amount",
        description: "Set the volume to an amount between 0 and 100",
        isOptional: true,
        suggestions: [
          { name: "up", description: "Increase the volume by 10%" },
          { name: "down", description: "Decrease the volume by 10%" },
        ],
      },
    },
    {
      name: "status",
      description: "Show the current player status",
      subcommands: [
        { name: "artist", description: "Show the currently playing artist" },
        { name: "album", description: "Show the currently playing album" },
        { name: "track", description: "Show the currently playing track" },
      ],
    },
    {
      name: "share",
      description: "Display the current song's Spotify URL and URI",
      subcommands: [
        {
          name: "url",
          description:
            "Display the current song's Spotify URL and copies it to the clipboard",
        },
        {
          name: "uri",
          description:
            "Display the current song's Spotify URI and copies it to the clipboard",
        },
      ],
    },
    {
      name: "toggle",
      subcommands: [
        { name: "shuffle", description: "Toggle shuffle playback mode" },
        { name: "repeat", description: "Toggle repeat playback mode" },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for spotify",
    },
  ],
};
export default completionSpec;
