var webpack = require('webpack')
var path = path = require('path')
var rootPath = path.dirname(__dirname)
var banner = 'lastmodify: ' + new Date().toLocaleString()

module.exports = {
    module: {
        loaders: [{
            test: /\.(js|jsx)(-lazy)?$/,
            exclude: /node_modules/,
            loaders: ['eslint', 'babel-loader']
        }],
        postLoaders: [{
            test: /\.(js|jsx)(-lazy)?$/,
            // babel-rumtime 也有 a.default 形式的代码，不能排除
            //exclude: /node_modules/,
            loaders: ['es3ify-loader']
        }, {
            test: /\.(js|jsx)-lazy$/,
            exclude: /node_modules/,
            // 懒加载的 bundle-loader 配置
            loader: 'bundle-loader?lazy&name=[name]!es3ify-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.js-lazy', '.jsx-lazy'],
        root: rootPath,
        alias: {}
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner, {
            entryOnly: true
        })
    ]
}