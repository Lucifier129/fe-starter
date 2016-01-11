/**
    该文件将 webpack.config.js 里的 entry/output 配置抽离
    配置规则与 webpack 一致，支持 page 和 lib 两种打包模式
*/

var path = require('path')
var rootPath = path.dirname(__dirname)

// 打包库的配置
var libConfigs = {
    vendor: {
        entry: './lib/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: 'lib/[name].js',
            libraryTarget: 'umd'
        }
    }
}

// 打包每个页面 js 的配置
var pageConfigs = {
    test: {
        entry: 'test/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: '[name]/bundle.js'
        }
    },
    example: {
        entry: 'example/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: '[name]/bundle.js'
        }
    }
}

// 为 lib 打上标记
Object.keys(libConfigs).forEach(function(moduleName) {
    libConfigs[moduleName].isLib = true
})

module.exports = Object.assign({}, libConfigs, pageConfigs)
