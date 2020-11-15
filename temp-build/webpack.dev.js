const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", //can also passed by cli: webpack --mode=production
  // devtool: 'eval-source-map',
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    contentBase: "dist",
    writeToDisk: true,
    publicPath: "/",
    compress: true,
    port: 8080,
    hot: true,
    inline: true,
    hotOnly: true,
    overlay: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
