const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'client/src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'client/dest'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}