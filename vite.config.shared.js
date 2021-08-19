
const styleImport = require('vite-plugin-style-import').default
const vueJsx = require('@vitejs/plugin-vue-jsx').default
const Path = require("path")
module.exports.plugins = [
  vueJsx(),
  styleImport({
    libs: [{
      libraryName: 'element-plus',
      styleLibraryName: "~theme",
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `../src/theme/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      }
    }]
  })
]

module.exports.alias = {
  "@": Path.resolve(__dirname, "src")
}