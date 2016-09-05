var path = require("path");

var webpack = require('webpack');

module.exports = {
    entry: './scripts/index.tsx',
    output: {
        filename: '../web/js/app.js',
        publicPath: '/web'
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve('../')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: 'ts-loader' },
          { test: /\.json$/, loader: 'json' },
        ]
    }
}