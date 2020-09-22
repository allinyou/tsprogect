const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
    // 基本路径
    publicPath: '/admin',   // admin-mange-xuerun
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: config => {
      if (process.env.NODE_ENV=='production'){
        return {
          plugins:[new CompressionWebpackPlugin({
            test:/\.js$|\.html$|.\css/,
            threshold: 10240,//对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })]
        }
      }
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
     // 是否使用css分离插件 ExtractTextPlugin
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {
      less: {
        javascriptEnabled: true
      }
     },
     // 启用 CSS modules for all css / pre-processor files.
     requireModuleExtension: true
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
     open: true,
     host: '0.0.0.0',
     port: 8888,
     https: false,
     hotOnly: false,
     proxy: {
        '/api': {
            target: 'https://bjoa.auto400.com.cn/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/'
            }
          }
     }, // 设置代理
     before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    },
    transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ]
}