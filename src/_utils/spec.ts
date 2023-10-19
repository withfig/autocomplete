// eslint-disable-next-line @withfig/fig-linter/no-missing-default-export
export const specToSuggestions = (spec: Fig.Spec): Fig.Suggestion => {
  return {
    name: spec.name,
    ...("icon" in spec && { icon: spec.icon }),
  };
};
