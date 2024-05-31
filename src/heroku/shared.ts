export const getAppGenerator: Fig.Generator = {
  script: ["heroku", "apps", "--all", "--json"],
  cache: {
    strategy: "stale-while-revalidate",
  },
  scriptTimeout: 15000,
  postProcess: function (out) {
    try {
      return JSON.parse(out).map((app) => {
        return {
          name: app.name,
          description: app.name,
          icon: "https://www.herokucdn.com/favicon.ico",
        };
      });
    } catch (e) {
      return [];
    }
  },
};

export default {};
