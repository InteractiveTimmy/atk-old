const PATH = require('path');
const HTMLWPP = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/client/index.jsx',
  },
  output: {
    filename: './[name].js',
    path: PATH.join(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWPP({
      template: './src/client/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
