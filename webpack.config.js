const srcPath = require('path').resolve(__dirname, 'src')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      '@': srcPath,
      '~': srcPath,
      '@@': srcPath,
      '~~': srcPath
    }
  }
}
