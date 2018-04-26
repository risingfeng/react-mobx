const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcPath = path.resolve(__dirname, './src');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: 'last 2 major versions',
                                    uglify: false
                                }
                            }],
                            'react',
                            'stage-2'
                        ],
                        plugins: [
                            'transform-decorators-legacy',
                        ]
                    }
                }
            }, {
                test: /\.css$/,
                include: path.join(srcPath, '/css'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: false,
                            localIdentName: '[name]__[local]--[hash:base64:6]',
                        }
                    },]
                })
            }, {
                test: /\.css$/,
                exclude: path.join(srcPath, '/css'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {}
                    },]
                })
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'all.css',
            allChunks: true,
            ignoreOrder: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}