const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "global.css",
})

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    devtool: 'inline-source-map',
   module: {
     rules: [
      {
        test: /\.js$/,
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
           'sass-loader'
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
    extractSass,
  ],
};