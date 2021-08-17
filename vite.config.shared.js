
const styleImport = require('vite-plugin-style-import').default
const Path = require("path")
module.exports.plugins = [
  styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })
]

module.exports.alias = {
  "@": Path.resolve(__dirname, "src")
}