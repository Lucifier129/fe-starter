/**
    该文件将 webpack.config.js 里的 entry/output 配置抽离
    配置规则与 webpack 一致，支持 page 和 lib 两种打包模式
*/

var path = require('path')
var rootPath = path.dirname(__dirname)

// 打包每个页面 js 的配置
var pageConfigs = {
    test: {
        entry: './src/test/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: '[name]/bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.js-lazy', '.jsx-lazy'],
            root: rootPath,
            alias: {
                'react': 'react-lite',
                'react-dom': 'react-lite'
            }
        },
        // 特殊字段，页面js的库/框架依赖
        // libs: ['vendor'],
        // 特殊字段，生产环境的特殊配置
        productionConfig: {}
    },
    example: {
        entry: 'example/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: '[name]/bundle.js'
        }
    }
}

// 打包库的配置
var libConfigs = {
    vendor: {
        entry: './lib/index',
        output: {
            path: path.join(rootPath, 'dist'),
            filename: 'lib/[name].js',
            libraryTarget: 'umd'
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            root: rootPath,
            alias: {
                // 'react': path.join(rootPath, 'lib/react-lite.common'),
                // 'react-dom': path.join(rootPath, 'lib/react-lite.common')
            }
        },
        /*
         自定义的特殊字段，当打包方式为 production 生产模式时
         将 productionConfig 的 key/value 合并到 webpackConfig
         注意：它会覆盖之前的配置
        */
        productionConfig: {
            resolve: {
                extensions: ['', '.js', '.jsx'],
                root: rootPath,
                alias: {
                    // 'react': path.join(rootPath, 'lib/react-lite.common'),
                    // 'react-dom': path.join(rootPath, 'lib/react-lite.common')
                }
            }
        }
    }
}

// 为 lib 打上标记
Object.keys(libConfigs).forEach(function(moduleName) {
    libConfigs[moduleName].isLib = true
})

module.exports = Object.assign({}, libConfigs, pageConfigs)
