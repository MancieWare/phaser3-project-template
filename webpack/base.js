/* jshint esversion: 6 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js',
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: './docs'
  },
  module: {
    // Module loaders can be chained - each one therein applying
    // transformations to the processed resource.  A chain is
    // executed in reverse order.
    // source: https://webpack.js.org/guides/asset-management/
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: [
          "file-loader",
        ],
      },
      // Adding in CSS
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../docs")
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      title: "Mancie's Playground",
      favicon: "./src/favicon/favicon.ico",
      template: "./src/index.html"
    })
  ]
};
