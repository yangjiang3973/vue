const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (p) => path.resolve(__dirname, "../", p);

module.exports = {
  entry: "./demo/todoApp/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "mini-vue.js",
    devtoolModuleFilenameTemplate: "file:///[absolute-resource-path]", // for vscode debugger to map source files
  },
  resolve: {
    extensions: [".js"],
    alias: {
      vue: resolve("src/platforms/web/entry-runtime-with-compiler"),
      compiler: resolve("src/compiler"),
      core: resolve("src/core"),
      shared: resolve("src/shared"),
      web: resolve("src/platforms/web"),
      weex: resolve("src/platforms/weex"),
      server: resolve("src/server"),
      entries: resolve("src/entries"),
      sfc: resolve("src/sfc"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: ['@babel/preset-env'],
          // },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(__dirname, "../index.html"),
    }), // generate html
  ],
};
