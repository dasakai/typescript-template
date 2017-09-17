const path = require('path');

module.exports = {
    entry: {
        'app': './src/app.ts'
    },
    output: {
        filename: '[name].bundle.js'
    },
    resolve: {
        extenstions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.jon$/,
                loader: 'json-loader'
            }
        ]
    }
}