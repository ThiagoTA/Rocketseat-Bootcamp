const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // yarn webpack-dev-server --mode development
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        // yarn add style-loader css-loader
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            { loader: 'style-loader' }, // Ele vai pegar o css interpretado e vai enjetar dentro do HTML
            { loader: 'css-loader' } // Ler arquivo css e ler as importações
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, // i: se for maiúsculo
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
};