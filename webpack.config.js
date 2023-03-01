const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    // new CleanWebpackPlugin({
    //     cleanOnceBeforeBuildPatterns: [
    //         '**/*'
    //     ]
    // }),
    // new HTMLWebpackPlugin({
    //     title: "vocalizer"
    // })
  ],
};
