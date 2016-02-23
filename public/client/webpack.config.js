var path = require('path');
module.exports = {
    entry: './src/app.js',
    devtool : 'source-map',
    output: {
        path: 'out',
        filename: 'app.bundle.js'
    },
    resolve: {
        root: '../../',
        modulesDirectories: ['public/client/src', 'node_modules']
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    //cache: false
};