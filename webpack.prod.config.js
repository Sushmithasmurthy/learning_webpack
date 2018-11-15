var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/dist/',
    watchContentBase: false,
    hotOnly: false
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'prod'
    })
  ]
};