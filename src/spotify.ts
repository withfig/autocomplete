// https://github.com/hnarayanan/shpotify
const completionSpec: Fig.Spec = {
  name: "spotify",
  description: "CLI to use Spotify from the terminal",
  subcommands: [
    {
      name: "play",
      description: "Resumes playback where Spotify last left off",
      args: {
        name: "song name",
        description: "The name of the song to start playing",
        isOptional: true,
      },
      subcommands: [
        {
          name: "album",
          description: "Finds an album by name and plays it",
          args: {
            name: "album name",
            description: "The album name you want to play",
          },
        },
        {
          name: "artist",
          description: "Finds an artist by name and plays it",
          args: {
            name: "artist name",
            description: "The artist name you want to play",
          },
        },
        {
          name: "list",
          description: "Finds a playlist by name and plays it",
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
      description: "Skips to the next song in a playlist",
    },
    {
      name: "prev",
      description: "Returns to the previous song in a playlist",
    },
    {
      name: "replay",
      description: "Replays the current track from the beginning",
    },
    {
      name: "pos",
      description: "Jumps to a time (in secs) in the current song",
      args: {
        name: "time",
        description: "Exact time in secs to jump in",
      },
    },
    {
      name: "pause",
      description: "Pauses (or resumes) Spotify playback",
    },
    {
      name: "stop",
      description: "Stops playback",
    },
    {
      name: "quit",
      description: "Stops playback and quits Spotify",
    },
    {
      name: "vol",
      description: "Shows the current Spotify volume",

      args: {
        name: "amount",
        description: "Sets the volume to an amount between 0 and 100",
        isOptional: true,
        suggestions: [
          { name: "up", description: "Increases the volume by 10%" },
          { name: "down", description: "Decreases the volume by 10%" },
        ],
      },
    },
    {
      name: "status",
      description: "Shows the current player status",
      subcommands: [
        { name: "artist", description: "Shows the currently playing artist" },
        { name: "album", description: "Shows the currently playing album" },
        { name: "track", description: "Shows the currently playing track" },
      ],
    },
    {
      name: "share",
      description: "Displays the current song's Spotify URL and URI",
      subcommands: [
        {
          name: "url",
          description:
            "Displays the current song's Spotify URL and copies it to the clipboard",
        },
        {
          name: "uri",
          description:
            "Displays the current song's Spotify URI and copies it to the clipboard",
        },
      ],
    },
    {
      name: "toggle",
      subcommands: [
        { name: "shuffle", description: "Toggles shuffle playback mode" },
        { name: "repeat", description: "Toggles repeat playback mode" },
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
