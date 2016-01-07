var webpack = require('webpack')
var taskName = process.argv[2]
var entryName = taskName.split(':')[0]
var mode = taskName.split(':')[1] || 'dev'
var webpackConfig = require('./webpack.config.' + mode)
var config = Object.create(webpackConfig)

if (webpackConfig.entry[entryName]) {
    config.entry = {}
    config.entry[entryName] = webpackConfig.entry[entryName]
} else if (entryName) {
    console.error(entryName + ' 不在 webpack config 文件的 entry 对象中')
    return
}

webpack(config, function(err, stats) {
    if (err) {
        throw new gutil.PluginError("webpack", err)
    }
    var info = stats.toString({
        // output options
        colors: true,
        chunks: false,
        cached: true
    })
    console.log(info)
})
