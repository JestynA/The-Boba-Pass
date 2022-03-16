const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
var bodyParser = require('body-parser');
var request = require('sync-request');
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
  })
    
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '/build'),
      publicPath: '/build'
    },
    proxy : {
      '/api/**' : {
      target: 'https://localhost:3000/',
      secure : false,
      }
    },        setup: function(app) {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({
          extended: true
      }));

      app.post(/^\/(URL1|URL2|URL3)\//, function(req, res) {
          var serviceCallResponse = request('POST', 'your app server url here' + req.originalUrl, {
              json:req.body
          });
          res.send(serviceCallResponse.getBody('utf8'));
      });
  },

  },

  
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "os": false,
      util: require.resolve("util/"),


  }
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["url-loader"],

      },   
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }
        ]
      },
      

    ],
  },
};