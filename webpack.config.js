const path = require('path');

module.exports = {
    entry: './index.js',    // main file
    mode: 'development',    // 
    output: {   // where to put the final bundle
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts.js'
    },
    target: 'web',
    devServer: {    // serve live in dev
        port: '3000',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true, // open the browser
        hot: true,  // hot module replacement, improves performance 
        liveReload: true,   
    },
    resolve: {  // extensions to consider in the bundle
        extensions: ['.js', '.jsx', '.json']
    },
    module: {   // How to handle different files,
        rules: [
            {
                test: /\.(js|jsx)$/,    // is this JS or JSX?
                exclude: /node_modules/,    // pls ignore the black hole
                use: 'babel-loader' // use this loader then, 
            }
        ]
    },
    plugins: [] // extra stuff
}