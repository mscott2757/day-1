const globals = require("globals");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");


module.exports = [
  {files: ["**/*.{js,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginReactConfig,
];
