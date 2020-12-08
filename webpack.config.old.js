const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};

const GITHUB_KEY = process.env.GITHUB_KEY

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'uslugas.html',
      template:  path.join(__dirname, '/source/uslugas.html')
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'usluga-tree.html',
      template:  path.join(__dirname, '/source/usluga-tree.html')
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'usluga-arhitektyrni-oblik.html',
      template:  path.join(__dirname, '/source/usluga-arhitektyrni-oblik.html')
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'usluga-soglasovanie-sredstv.html',
      template:  path.join(__dirname, '/source/usluga-soglasovanie-sredstv.html')
    }),
    new CopyWebpackPlugin([
      { from: 'CNAME' },
      { from: 'docs', to: 'docs' },
      { from: 'yandex_e3636b02baeaa22b.html' },
      { from: 'robots.txt' },
      { from: 'googlefd0780166184dbcc.html' },
    ]),
    new GhPagesWebpackPlugin({
        path: PATHS.build,
        options: {
          branch: 'master',
          add: false,
          repo: 'https://antonypp:' + GITHUB_KEY + '@github.com/headmade/uslugi.headmade.pro.git',
          message: 'Update Page',
          user: {
              name: 'Headmade',
              email: 'Info@headmade.pro'
          }
        }
    })

  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            //attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
              options: {
                includePaths: [ path.resolve(__dirname, 'node_modules/foundation-sites/scss/'), path.resolve(__dirname, 'source/sass/base') ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
      {
        test: /\.(woff?2|eot|ttf|otf)$/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
        ]
      },
    ]
  }
};
