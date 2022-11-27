const completionSpec: Fig.Spec = {
  name: "afplay",
  description: "Audio File Play",
  args: {
    template: "filepaths",
    name: "play the song in the path",
  },
  options: [
    {
      name: ["-v", "--volume"],
      description: `Set the volume for playback of the file
Apple does not define a value range for this, but it appears to accept
0=silent, 1=normal (default) and then up to 255=Very loud.
The scale is logarithmic and in addition to (not a replacement for) other volume control(s)`,
      args: {
        name: "0 (silent) - 1 (normal) - 255 (very loud)",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: "--leaks",
      description: "Run leaks analysis",
    },
    {
      name: ["-t", "--time"],
      description: `Play for \`TIME\` seconds
>0 and < duration of \`audio_file\``,
      args: {
        name: "TIME",
        description: `A value greater than 0 but lower than the audio file length`,
      },
    },
    {
      name: ["-r", "--rate"],
      description: `Play at playback \`RATE\`.
practical limits are about 0.4 (slower) to 3.0 (faster)`,
      args: {
        name: "RATE",
        description: `0.4 (slower) - 3.0 (faster)`,
      },
    },
    {
      name: ["-q", "--rQuality"],
      description: `Set the quality used for rate-scaled playback (default is 0 - low quality, 1 - high quality)`,
      args: {
        name: "QUALITY",
        description: "0 (low) -1 (high)",
      },
    },
    {
      name: ["-d", "--debug"],
      description: `Debug print output`,
    },
  ],
};

export default completionSpec;
