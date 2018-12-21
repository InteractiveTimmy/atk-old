const PATH = require( 'path' );
const HTMLWPP = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    index: './src/client/index.js'
  },
  output: {
    filename: './[name].js',
    path: PATH.join( __dirname, './build' )
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|eot|svg|ttf|woff2?|otf)$/,
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        } ]
      }
    ]
  },
  plugins: [
    new HTMLWPP( {
      template: './src/client/index.html'
    } )
  ],
  devServer: {
    historyApiFallback: true,
  }
}