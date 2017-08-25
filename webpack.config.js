'use strict';
var vue = require('vue-loader');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");// 引入css 单独打包插件
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
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ 
                fallback:'style-loader',
                use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/, loader: 'file-loader',options: {name: '[name].[ext]?[hash]'}}
        ]
    },
    plugins:  [
        new ExtractTextPlugin({ filename: './[name].min.css', disable: false, allChunks: true })
    ],
    node: {
      fs: "empty"
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};