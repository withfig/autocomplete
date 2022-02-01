import type { ScriptsConfiguration } from "https://deno.land/x/velociraptor@1.3.0/mod.ts";

export default <ScriptsConfiguration> {
  scripts: {
    build: {
      cmd: "mod.ts",
      allow: ["all"],
      desc: "Just build the spec",
    },
    copy: {
      cmd:
        "cp ffmpeg.ts ~/.fig/autocomplete/src && cd ~/.fig/autocomplete && npm run build",
      desc: "Copy the built spec to Fig",
    },
  },
};
