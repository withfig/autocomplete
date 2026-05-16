const FAVICONS = {
  vanilla:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433",
  "vanilla-ts": "https://www.typescriptlang.org/favicon-32x32.png",
  vue: "https://raw.githubusercontent.com/vuejs/art/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg",
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
  preact: "https://avatars.githubusercontent.com/u/26872990?s=200&v=4",
  svelte:
    "https://raw.githubusercontent.com/sveltejs/branding/2af7bc72f1bf5152dab89bee1ee2093b1be0824d/svelte-logo.svg",
  solid: "https://www.solidjs.com/img/logo/without-wordmark/logo.svg",
  lit: "https://avatars.githubusercontent.com/u/18489846?s=200&v=4",
  qwik: "https://qwik.builder.io/favicons/favicon.svg",
};

const iconWrap = (name: string): Fig.Suggestion => {
  const icon = FAVICONS[name] || FAVICONS[name.split("-")[0]];
  return { name, icon };
};

const spec: Fig.Spec = {
  name: "create-vite",
  description: "Create a new project powered by Vite",
  icon: "https://vitejs.dev/logo.svg",
  args: {
    name: "projectName",
    description: "Project name",
  },
  options: [
    {
      name: "--template",
      isRequired: true,
      args: {
        name: "template",
        suggestions: [
          iconWrap("vanilla"),
          iconWrap("vanilla-ts"),
          iconWrap("vue"),
          iconWrap("vue-ts"),
          iconWrap("react"),
          iconWrap("react-ts"),
          iconWrap("react-swc"),
          iconWrap("react-swc-ts"),
          iconWrap("preact"),
          iconWrap("preact-ts"),
          iconWrap("lit"),
          iconWrap("lit-ts"),
          iconWrap("svelte"),
          iconWrap("svelte-ts"),
          iconWrap("solid"),
          iconWrap("solid-ts"),
          iconWrap("qwik"),
          iconWrap("qwik-ts"),
        ],
      },
    },
  ],
};

export default spec;
