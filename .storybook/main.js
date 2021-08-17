const global_plugins = require("../plugins").default
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

    // customize the Vite config here
    // config.resolve.alias.foo = 'bar';
    console.log(global_plugins.length)
    // return the customized config
    return {
      ...config,
      plugins: [
        ...config.plugins,
        ...global_plugins
      ]
    };
  },
}