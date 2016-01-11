var webpack = require('webpack')
var path = path = require('path')
var rootPath = path.dirname(__dirname)

module.exports = {
    debug: true,
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: rootPath,
        alias: {
            'polyfills': path.join(rootPath, 'lib/polyfills'),
            'json2': path.join(rootPath, 'lib/json2'),
            'requestAnimationFrame': path.join(rootPath, 'lib/requestAnimationFrame'),
            'react': path.join(rootPath, 'lib/react-lite.common'),
            'react-dom': path.join(rootPath, 'lib/react-lite.common')
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                unused: true,
                drop_console: true,
                drop_debugger: true,
                dead_code: true,
                properties: false,
                screw_ie8: true,
                warnings: false
            },
            minimize: true
        })
    ]
}
