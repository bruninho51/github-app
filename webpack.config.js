'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
   mode: 'development',
   devtool: 'source-map',
   entry: [
      path.join(__dirname, 'src', 'index'),
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
   ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin()
   ],
   module: {
      rules: [
      {
         // set up standard-loader as a preloader
         enforce: 'pre',
         test: /\.js$/,
         use: {
            loader: 'standard-loader',
            options: {
               // config options to be passed through to standard e.g.
               parser: 'babel-eslint'
            }
         },
         include: [/src/],
         exclude: [/node_modules/]
      },
      {
         test: /\.js$/,
         exclude: [/node_modules/],
         include: [/src/],
         use: {
            loader: 'babel-loader'
         }
      }
    ],
   }
}
