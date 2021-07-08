const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/javascript/entry.js',
    // output: {
    //     publicPath: '/',
    //     path: path.join(__dirname, '..'),
    //     filename: 'dist/javascript/bundle.js'
    // },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: 'dist/javascript/bundle.js',
        clean: true,
    },
    module: {
        rules: [{
            test: /\.(svg|png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.template.html',
            filename: 'index.html',
            // title: 'Production'
        })
    ]
};