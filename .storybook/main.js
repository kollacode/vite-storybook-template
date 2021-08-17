const {plugins, alias} = require("../vite.config.shared")
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    Object.assign(config.resolve.alias, alias)
    config.plugins.push(...plugins)
    console.log(config.alias)
    return config;
  },
}