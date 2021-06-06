const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractSass = new ExtractTextPlugin({
//     filename: 'dist/css/[name].[md5:contenthash:hex:20].css',
//     allChunks: true
// });

// module.exports = merge(common, {
//     output: {
//         publicPath: '.'
//     },

//     module: {
//         rules: [{
//             test: /\.scss$/,
//             use: extractSass.extract({
//                 use: [{
//                         loader: 'css-loader',
//                         options: { minimize: true }
//                     },
//                     { loader: 'sass-loader' }
//                 ]
//             })
//         }, {
//             test: /\.html$/,
//             use: [{
//                 loader: 'html-loader',
//                 options: { minimize: true, attributes: false }
//             }]
//         }]
//     },
//     plugins: [extractSass]
// });

///////////////////////////////////////////////////////////////////////////////

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJS = require('terser-webpack-plugin');


module.exports = merge(common, {

    plugins: [
        new MiniCssExtractPlugin(
            {
            filename: 'dist/css/[name].css'
        }
        )
    ],
    optimization: {
        minimize:true,
        minimizer: [
            new MiniCssExtractPlugin(),
            new TerserJS(), 
        ]
    },
    output: {
        publicPath: '.'
    },
    module: {
        rules: [{
                test: /\.(s*)css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader}, 
                    "style-loader",
                    "css-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                        //options: { attributes: false } //minimize: true,
                }
            }
        ],
    },
});