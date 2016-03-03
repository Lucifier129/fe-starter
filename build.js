var taskName = process.argv[2]
var moduleName = taskName.split(':')[0]
var mode = taskName.split(':')[1]

if (!moduleName) {
    throw new Error('expect a moduleName of modules.js file')
}

if (!mode) {
    throw new Error('expect a mode, it must be one of ["dev", "prod", "lib", "lib.dev"]')
}

var webpack = require('webpack')
var modules = require('./webpack/modules')
var webpackConfig = require('./webpack/webpack.config.' + mode)
// 是否打包库文件
var isLib = mode.indexOf('lib') !== -1
// 是否生产模式
var isProduction = mode === 'prod'

// handle tasks
if (moduleName === '*') {
    var promiseList = Object.keys(modules)
        .filter(function(moduleName) {
            return modules[moduleName] && !!modules[moduleName].isLib === isLib
        })
        .map(function(moduleName) {
            return runWebpack(moduleName, webpackConfig, isProduction)
        })
    Promise.all(promiseList).catch(logInfo)
} else if (modules[moduleName]) {
    var promises = []
    var libs = modules[moduleName].libs
    promises.push(runWebpack(moduleName, webpackConfig, isProduction))
    // 打包库文件
    if (libs) {
        libs = Array.isArray(libs) ? libs : [libs]
        var libsPromises = libs.map(function(libName) {
            var webpackLibConfigPath = './webpack/webpack.config.' + (isProduction ? 'lib' : 'lib.dev')
            var webpackLibConfig = require(webpackLibConfigPath)
            return runWebpack(libName, webpackLibConfig, isProduction)
        })
        promises = promises.concat(libsPromises)
    }
    Promise.all(promises).catch(logInfo)
}


function runWebpack(moduleName, baseConfig, isProduction) {
    var config = Object.create(baseConfig)
    var moduleConfig = modules[moduleName]
    var outputType = typeof moduleConfig.output

    // merge moduleConfit to config
    Object.assign(config, moduleConfig)

    // handle entry
    config.entry = {}
    config.entry[moduleName] = moduleConfig.entry

    // handle output
    if (outputType === 'string') {
        config.output = {}
        config.output.path = moduleConfig.output
    } else if (outputType === 'object') {
        config.output = Object.assign({}, config.output, moduleConfig.output)
    }

    // handle productionConfig
    if (isProduction && moduleConfig.productionConfig) {
        Object.assign(config, moduleConfig.productionConfig)
    }

    return new Promise(function(resolve, reject) {
        var count = 0
        webpack(config, function(err, stats) {
            if (err) {
                reject(err)
            }
            var info = stats.toString({
                // output options
                colors: true,
                chunks: false,
                cached: true
            })
            console.log(info)
            if (count === 0) {
                resolve(info)
            } else {
                console.log('change times: ' + count)
            }
            count += 1
        })
    })
}

function logInfo(message) {
    console.log(message)
}
