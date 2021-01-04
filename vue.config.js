const path = require("path");
const themePath = path.join(__dirname, "./src/assets/styles/theme.less");
module.exports = {
  // 基本路径 //baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath。
  publicPath: "/",

  // 输出文件目录
  outputDir: "dist",

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 修改webpack的配置
  // configureWebpack: {
  //   // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
  //   // https://cli.vuejs.org/zh/config/#configurewebpack
  // },
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },

  // css相关配置  --配置高于chainWebpack中关于styles、loader的配置
  css: {
    // css预设器配置项
    loaderOptions: {
      // 自定义vant主题
      less: {
        modifyVars: {
          // 通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      }
    }
  },

  // devServer 选项单独配置
  devServer: {
    port: 8088,
    // 跨域请求
    proxy: {
      "/api": {
        target: process.env.VUE_APP_URL,
        // ws: true, //如果要代理 websockets，配置这个参数
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "/api"
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: []
    }
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles/index.less")]
    });
}
