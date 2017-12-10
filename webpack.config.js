const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js',
    ...glob.sync('./services/*.js'),
    ...glob.sync('./controllers/*.js') 
  ],
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist') 
  },
  plugins: [
    new CopyWebpackPlugin ([
        {from: "views/*.html"}, 
        {from: "index.html"}, 
        {from: "styles/main.css"}
    ]),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
