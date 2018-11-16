const path = require('path');
const webpack = require('webpack');

console.log('-- using webpack.prod.config.js --');
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/dist/',
    watchContentBase: false,
    hotOnly:false
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_ENV: 'prod'
    })
  ]
};