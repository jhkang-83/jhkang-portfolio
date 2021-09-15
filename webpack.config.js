const srcPath = require('path').resolve(__dirname, 'src')

module.exports = {
  resolve: {
    alias: {
      '@': srcPath,
      '~': srcPath,
      '@@': srcPath,
      '~~': srcPath
    }
  }
}
