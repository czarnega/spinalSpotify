'use strict';

var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8081',
      'webpack/hot/dev-server',
      './client/index.js'
    ]
  },

  output: {
    // Where to build results
    path: __dirname + '/client/dist',

    // Filename to use in HTML
    filename: 'bundle.js',

    // Path to use in HTML
    publicPath: '/dist/'
  },

  resolve: {
    // Absolute path that contains modules
    root: __dirname + '/client/',

    // Directory names to be searched for modules
    modulesDirectories: ['collections', 'models', 'views', 'node_modules'],

    // Replace modules with other modules or paths for compatibility or convenience
    alias: {
      'underscore': 'lodash'
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
    ]
  },

  devtool: '#inline-source-map',
};