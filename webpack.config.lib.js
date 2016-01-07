var webpack = require('webpack')
var path = path = require('path')

module.exports = {
    debug: true,
    entry: {
        'vendor': './lib/index'
    },
    output: {
        publicPath: '',
        path: path.join(__dirname, 'dist/lib'),
        chunkFilename: '[name].js',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'polyfills': path.join(__dirname, 'lib/polyfills'),
            'json2': path.join(__dirname, 'lib/json2'),
            'requestAnimationFrame': path.join(__dirname, 'lib/requestAnimationFrame'),
            'react': path.join(__dirname, 'lib/react-lite.common'),
            'react-dom': path.join(__dirname, 'lib/react-lite.common')
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
