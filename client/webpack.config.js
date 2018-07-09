<<<<<<< HEAD

=======
>>>>>>> ea5552e03fff6b199adb530f7c566e8f6d8ea817
const path = require('path')

module.exports = {
  mode: 'development',
<<<<<<< HEAD
  entry: path.join(__dirname, '/index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
=======
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
>>>>>>> ea5552e03fff6b199adb530f7c566e8f6d8ea817
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
<<<<<<< HEAD
}
=======
}
>>>>>>> ea5552e03fff6b199adb530f7c566e8f6d8ea817
