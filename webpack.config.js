const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJS = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'javascript/bundle.js'
    },
    
    stats:{
        children:true
    },
    optimization: {
        minimize:true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserJS(), 
        ]
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader}, 
                    "css-loader", 
                    "sass-loader"
                ],
                // use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: { name: '[hash].[ext]' }
                    }]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                        //options: { attributes: false } //minimize: true,
                }
            }
        ]
    },
    plugins:[
        htmlWebpack,
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
};