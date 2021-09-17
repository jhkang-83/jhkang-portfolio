/* eslint-disable no-unused-vars */
const path = require('path')
const { config } = require('process')
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
  outputDir: 'dist',
  publicPath: '/',

  chainWebpack: config => {
    if (isAnalyze) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: '8888',
        openAnalyzer: true
      }))
    }

    config.plugins.delete('prefetch')
    config.output.filename('js/[name].[hash:8].js')
    config.output.chunkFilename('js/[name].[hash:8].js')
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 10240,
        name: 'images/[name].[hash:8].[ext]'
      }))
    config.module
      .rule('svg')
      .use('file-loader')
      .tap(options => Object.assign(options, {
        name: 'images/[name].[hash:8].[ext]'
      }))
    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('images/**/*')
      options[0].ignore.push('favicon.ico')
      options[0].ignore.push('robots.txt')
      options[0].ignore.push('service-worker.js')
      return [options]
    })
  }
}
