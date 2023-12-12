module.exports = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true, // Make sure to use a colon here instead of a comma
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: ["index"],
      cssProp: true,
      namespace: "",
      minify: true,
      transpileTemplateLiterals: true,
      pure: true,
    },
    removeConsole: true,
  },
};
