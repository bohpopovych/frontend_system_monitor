'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    path = require('path');

module.exports = {
    context: path.resolve(__dirname + "/app"),

    resolveLoader: {
        alias: {
            'copy': 'file-loader?name=[path][name].[ext]&context=./app/public'
        }
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        javascript: "./index.jsx",
        html: "./public/index.html"
    },

    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
        path: path.resolve(__dirname + "/dist")
    },

    devServer: {
        host: '0.0.0.0',
        contentBase: './app/public',
        stats: 'minimal',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [ autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'iOS 7', 'iOS 8', 'ie 11', 'Safari 8'] }) ]
        //     }
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css'
        })
    ],

    module: {
        rules: [{
            // JS LOADER
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            // ASSET LOADER
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader'
        }, {
            // SASS LOADER
            test: /\.scss$/,
            exclude: '/node_modules/',
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }, {
            // HTML LOADER
            test: /\.html$/,
            loader: 'html-loader'
        }]
    }
};