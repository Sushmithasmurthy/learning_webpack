const path = require('path');
const webpack = require('webpack');

console.log('-- using webpack.dev.config.js --');
module.exports = {
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