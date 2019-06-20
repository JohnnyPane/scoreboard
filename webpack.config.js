const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/office_scoreboard.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: false,
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
};


