// Completion spec for fly, alias to the flyctl CLI.
// See completion spec in the ./flyctl.ts file

// Note: Most installations of flyctl also alias flyctl to fly as a command
// name and this will become the default name in the future. During the
// transition, note that where you see flyctl as a command it can be replaced
// with fly.

import completionSpec from "./flyctl";

export default {
  ...completionSpec,
  name: "fly",
};
