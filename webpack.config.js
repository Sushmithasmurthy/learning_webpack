const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//const devWebpack = require('./webpack.dev.config');
//const prodWebPack = require('./webpack.prod.config');

console.log('-- using webpack.config.js --');

const baseConfig = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      //Rule object - A Rule helps webpack match up a module with loaders
      {
        include: /\.js$/,  //regex - that matches with only files ending with .js
        use: {
          loader: 'babel-loader',
          options: {}
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      filename: './index.html'
    })
  ]

};

const devPack = {
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/dist/',
    watchContentBase: false,
    hotOnly:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      APP_ENV: 'dev'
    })
  ]

};

module.exports = function(env){
  const isDevelopment = env === 'development';
  if(isDevelopment){
    console.log('This is set to isDevelopment = true');
    return merge(baseConfig, devPack);
  }
  return baseConfig;
};


/*var path = require('path');
var merge = require('webpack-merge');

var baseConfig = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      //Rule object - A Rule helps webpack match up a module with loaders
      {
        include: /\.js$/,  //regex - that matches with only files ending with .js
        use: {
          loader: 'babel-loader',
          options: {}
        },
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = function(env){
  if(env === 'development')
    return merge(baseConfig, require('./webpack.dev.config'));
  else
    return merge(baseConfig, require('./webpack.prod.config'));
};


module.exports = function(env){
  const isDevelopment = env === 'development';
  if(isDevelopment)
    return merge(baseConfig, devWebpack);
  else
    return merge(baseConfig, prodWebPack);
};
*/