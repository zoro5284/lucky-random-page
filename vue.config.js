const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  publicPath: '/lucky-random-page/dist/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: `
        @import "~@/styles/reset.less";
        @import "~@/styles/variables.less";
      `
      }
    }
  },
  pwa: {
    name: 'lucky random',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc: './src/service-worker.js'
    }
  }
})
