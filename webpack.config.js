'use strict';
var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var SRC = path.resolve(__dirname, "src"); 
var BUILD = path.resolve(__dirname, "build");
module.exports = {
    entry: SRC+"/main.js",
    output: {
        path: BUILD,
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    node: {
      fs: "empty"
    }
};