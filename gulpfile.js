var gulp = require('gulp')
var gutil = require("gulp-util")
var path = require('path')
var plumber = require('gulp-plumber')
var webpack = require('webpack')

var taskName = process.argv[2]
var entryName = taskName.split(':')[0]
var mode = taskName.split(':')[1] || 'dev'
var webpackConfig = require('./webpack.config.' + mode)

gulp.task(taskName, function(callback) {
    var config = Object.create(webpackConfig)
    if (webpackConfig.entry[entryName]) {
        config.entry = {}
        config.entry[entryName] = webpackConfig.entry[entryName]
    } else if (entryName) {
        console.error(entryName + ' 不在 webpack config 文件的 entry 对象中')
        callback()
        return
    }
    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err)
        }
        gutil.log("[webpack]", stats.toString({
            // output options
            colors: true,
            chunks: false,
            cached: true
        }))
    })
})

gulp.task('default', function() {
    console.error('请输出一个在 webpack config 文件里存在的 entry 名: gulp entryName')
})
