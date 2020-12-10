const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './demo/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'mini-vue.js',
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]', // for vscode debugger to map source files
    },
    resolve: {
        // modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        extensions: ['.js'],
        alias: {
            vue: path.resolve(
                __dirname,
                '../src/entries/web-runtime-with-compiler'
            ),
            compiler: path.resolve(__dirname, '../src/compiler'),
            core: path.resolve(__dirname, '../src/core'),
            shared: path.resolve(__dirname, '../src/shared'),
            web: path.resolve(__dirname, '../src/platforms/web'),
            server: path.resolve(__dirname, '../src/server'),
            entries: path.resolve(__dirname, '../src/entries'),
            sfc: path.resolve(__dirname, '../src/sfc'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    // },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, '../index.html'),
        }), // generate html
    ],
};
