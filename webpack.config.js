const path = require('path');

module.exports = {
    entry: {
        'app': './src/app.ts'
    },
    output: {
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
}