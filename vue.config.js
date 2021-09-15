/* eslint-disable no-unused-vars */
const path = require('path')
const { ContextReplacementPlugin } = require('webpack')

// analyzer 실행 여부 체크
const args = process.argv.slice(2)
const isAnalyze = args.filter(arg => arg === '--analyze').length
// 경로 선언
const appPath = {
  src: path.resolve(__dirname, 'src'),
  assets: path.resolve(__dirname, 'src/assets')
}

module.exports = {
  outputDir: './dist',
  assetsDir: './',
  publicPath: '/jhkang-portfolio/',

  chainWebpack: (config) => {
    if (isAnalyze) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: '8888',
        openAnalyzer: true
      }))
    }

    config.output.filename('js/[name].[hash:8].js')
    config.output.chunkFilename('js/[name].[hash:8].js')
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  }
}
