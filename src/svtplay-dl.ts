const svtplayDlGenerators: Record<string, Fig.Generator> = {
  listClipboard: {
    script: ["pbpaste"],
    postProcess: function (out) {
      const regex = new RegExp(
        "^(https?://)?(www.)?(aftonbladet.se|dbtv.no|di.se|dn.se|dr.dk|efn.se|expressen.se|filmarkivet.se|flowonline.tv|nickelodeon.nl|nickelodeon.no|nickelodeon.se|nrk.se|oppetarkiv.se|pokemon.com|ruv.is|riksdagen.se|svd.se|sverigesradio.se|svtplay.se|viafree.se|viafree.no|viafree.dk|tv3play.ee|tv3play.it|tv3play.lv|tv4.se|tv4play.se|twitch.tv|ur.se|urplay.se|vg.no|viagame.com|viasat4play.no|viasatsport.se)/.+$"
      );
      try {
        if (regex.test(out))
          return [
            {
              name: out,
              description: "Clipboard",
              icon: "fig://template?badge=🔗",
            },
          ];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "svtplay-dl",
  description: "Download videos from your favourite play services",
  args: {
    name: "urls",
    description: "URLs for the videos you want to download",
    generators: svtplayDlGenerators.listClipboard,
    isVariadic: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for svtplay-dl",
    },
    {
      name: "--version",
      description: "Show program's version number and exit",
    },
    {
      name: ["-o", "--output"],
      description: "Outputs to the given filename or folder",
    },
    {
      name: "--subfolder",
      description:
        "Create a subfolder titled as the show, non-series gets in folder movies",
    },
    {
      name: "--config",
      args: { name: "configfile" },
      description: "Specify configuration file",
    },
    {
      name: ["-f", "--force"],
      description: "Overwrite if file exists already",
    },
    {
      name: ["-r", "--resume"],
      description: "Resume a download (RTMP obsolete)",
    },
    {
      name: ["-l", "--live"],
      description: "Enable for live streams (RTMP based ones)",
    },
    {
      name: ["-c", "--capture_time"],
      args: { name: "capture_time" },
      description: "Define capture time in minutes of a live stream",
    },
    {
      name: ["-s", "--silent"],
      description: "Be less verbose",
    },
    {
      name: "--silent-semi",
      description: "Only show a message when the file is downloaded",
    },
    {
      name: ["-u", "--username"],
      args: { name: "username" },
      description: "Username (if applicable)",
    },
    {
      name: ["-p", "--password"],
      args: { name: "password" },
      description: "Password (if applicable)",
    },
    {
      name: ["-t", "--thumbnail"],
      description: "Download thumbnail from the site if available",
    },
    {
      name: ["-g", "--get-url"],
      description: "Do not download any video, but instead print the URL",
    },
    {
      name: "--get-only-episode-url",
      description: "Do not get video URLs, only print the episode URL",
    },
    {
      name: "--dont-verify-ssl-cert",
      description: "Don't attempt to verify SSL certificates",
    },
    {
      name: "--http-header",
      args: { name: "header1=value;header2=value2" },
      description: "A header to add to each HTTP request",
    },
    {
      name: "--cookies",
      args: { name: "cookie1=value;cookie2=value2" },
      description: "A cookies to add to each HTTP request",
    },
    {
      name: "--exclude",
      args: { name: "WORD1,WORD2,..." },
      description:
        "Exclude videos with the WORD(s) in the filename. Comma separated",
    },
    {
      name: "--after-date",
      args: { name: "yyyy-MM-dd" },
      description: "Only videos published on or after this date",
    },
    {
      name: "--proxy",
      args: { name: "proxy" },
      description:
        "Use the specified HTTP/HTTPS/SOCKS proxy. To enable experimental SOCKS proxy, specify a proper scheme. For example socks5://127.0.0.1:1080/",
    },
    {
      name: ["-v", "--verbose"],
      description: "Explain what is going on",
    },
    {
      name: "--nfo",
      description: "Create a NFO file",
    },
    {
      name: "--force-nfo",
      description: "Download only NFO if used with --nfo",
    },
    {
      name: "--only-audio",
      description: "Only download audio if audio and video is separated",
    },
    {
      name: "--only-video",
      description: "Only download video if audio and video is separated",
    },
    {
      name: ["-q", "--quality"],
      args: { name: "quality" },
      description:
        "Choose what format to download based on bitrate/video resolution. It will download the best format by default",
    },
    {
      name: ["-Q", "--flexible-quality"],
      args: { name: "amount" },
      description: "Allow given quality (as above) to differ by an amount",
    },
    {
      name: ["-P", "--preferred"],
      args: { name: "preferred" },
      description: "Preferred download method (dash, hls, or http)",
    },
    {
      name: "--list-quality",
      description: "List the quality for a video",
    },
    {
      name: "--stream-priority",
      args: { name: "dash,hls,http" },
      description:
        "If two streams have the same quality, choose the one you prefer",
    },
    {
      name: "--format-preferred",
      args: { name: "h264,h264-51" },
      description:
        "Choose the format you prefer, use --list-quality to show which one to choose from",
    },
    {
      name: "--audio-language",
      args: { name: "AUDIO_LANGUAGE" },
      description:
        "Choose the language of the audio (it can override the default one), use --list-quality to show which one to choose from",
    },
    {
      name: "--audio-role",
      args: { name: "AUDIO_ROLE" },
      description:
        "Choose the role of the audio (it can override the default one), use --list-quality to show which one to choose from",
    },
    {
      name: ["-S", "--subtitle"],
      description: "Download subtitle from the site if available",
    },
    {
      name: ["-M", "--merge-subtitle"],
      description:
        "Merge subtitle with video/audio file with corresponding ISO639-3 language code. This invokes --remux automatically",
    },
    {
      name: "--force-subtitle",
      description: "Download only subtitle if its used with -S",
    },
    {
      name: "--require-subtitle",
      description: "Download only if a subtitle is available",
    },
    {
      name: "--all-subtitles",
      description: "Download all available subtitles for the video",
    },
    {
      name: "--raw-subtitles",
      description: "Also download the subtitles in their native format",
    },
    {
      name: "--convert-subtitle-colors",
      description: `Converts the color information in subtitles, to <font color=""> tags`,
    },
    {
      name: ["-A", "--all-episodes"],
      description: "Try to download all episodes",
    },
    {
      name: "--all-last",
      args: { name: "NN" },
      description: "Get last NN episodes instead of all episodes",
    },
    {
      name: "--include-clips",
      description: "Include clips from websites when using -A",
    },
    {
      name: "--cmore-operatorlist",
      description: "Show operatorlist for cmore",
    },
    {
      name: "--cmore-operator",
      args: { name: "operator" },
    },
    {
      name: "--no-remux",
      description: "Do not automatically remux to mp4",
    },
    {
      name: "--no-merge",
      description:
        "Do not automatically merge video, audio and possibly also subtitle(s) together",
    },
    {
      name: "--no-postprocess",
      description: "Do not postprocess anything",
    },
    {
      name: "--keep-original",
      description: "Do postprocessing while also keeping original files",
    },
    {
      name: "--output-format",
      args: { name: "mp4,mkv" },
      description:
        "Format you want resulting file in (mkv or mp4), mp4 is default",
    },
  ],
};
export default completionSpec;
