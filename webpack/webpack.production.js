const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('foobar'),
      'process.env.city': JSON.stringify('tokyo'),
    })
  ]
}
