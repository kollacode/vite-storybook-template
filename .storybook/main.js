const {plugins, alias} = require("../vite.config.shared")
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-jest'
  ],
  "core": {
    "builder": "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    Object.assign(config.resolve.alias, alias, {
      path: require.resolve('path-browserify'),
    })
    config.plugins.push(...plugins)
    return config;
  },
}