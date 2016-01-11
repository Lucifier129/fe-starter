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
            loaders: ['eslint', 'babel-loader']
        }],
        postLoaders: [{
            test: /\.jsx?$/,
            // babel-rumtime 也有 a.default 形式的代码，不能排除
            //exclude: /node_modules/,
            loaders: ['es3ify-loader']
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
