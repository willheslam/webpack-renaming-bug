const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  target: 'web',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
