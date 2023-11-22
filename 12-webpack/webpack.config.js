const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function (env) {
    return {
        entry: './src/ui.js',
        module: {
            rules: [
                // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.js$/,   use: 'babel-loader' },
            ]
        },
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.[contenthash].js'
        },
        plugins: [
            new HtmlWebpackPlugin({ template : 'index.html'}),
            new CleanWebpackPlugin()
        ],
        mode: env.production ? 'production' : 'development'
    }
}