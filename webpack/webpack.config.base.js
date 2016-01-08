var webpack = require('webpack')
var path = path = require('path')
var rootPath = path.dirname(__dirname)
var banner = 'lastmodify: ' + new Date().toLocaleString()

module.exports = {
    entry: {
        'test': 'test/index',
        'example': 'example/index'
    },
    output: {
        publicPath: '/dist/',
        path: path.join(rootPath, 'dist'),
        filename: '[name]/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'eslint']
        }],
        postLoaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['es3ify-loader'],
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(rootPath, 'src'),
        alias: {}
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner, {
            entryOnly: true
        })
    ]
}
