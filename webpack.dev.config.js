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
      NODE_ENV: 'dev'
    })
  ]

};