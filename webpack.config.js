const path = require('path');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
  ],
  resolveLoader: {
    alias: {
      "tee-loader" : path.resolve(__dirname, 'tee-loader.js')
    }
  }

};

module.exports = function(env){
  if(env !== 'production'){
    return merge(baseConfig, require('./webpack.dev.config'));
  }
  else {
    return merge(baseConfig, require('./webpack.prod.config'));
  }
};
