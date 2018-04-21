const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const webpack = require('webpack');

const extractSass = new MiniCssExtractPlugin({
  filename: "css/global.css",
})

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
         test: /\.scss$/,
         use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
          
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      failOnError: false,
      quiet: false,
      syntax: 'scss',
  }),
    extractSass,
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    // port: 9000,
    // hot: true
  }
};