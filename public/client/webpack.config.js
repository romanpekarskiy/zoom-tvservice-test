var path = require('path');
module.exports = {
    entry: path.resolve('./src/app.js'),
    devtool : 'source-map',
    output: {
        path: 'out',
        filename: 'app.bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('../../node_modules')
        ]
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: [path.resolve('../../node_modules/babel-preset-es2015')]
                }
            }
        ]
    },
    //cache: false
};