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
var isLib = mode.indexOf('lib') !== -1


// handle tasks
if (moduleName === '*') {
    var promiseList = Object.keys(modules)
        .filter(function(moduleName) {
            return modules[moduleName] && !!modules[moduleName].isLib === isLib
        })
        .map(function(moduleName) {
            return runWebpack(moduleName, false).then(logInfo)
        })
    Promise.all(promiseList).catch(logInfo)
} else if (modules[moduleName]) {
    runWebpack(moduleName).then(logInfo, logInfo)
}


function runWebpack(moduleName, unwatch) {
    var config = Object.create(webpackConfig)
    var moduleConfig = modules[moduleName]
    var outputType = typeof moduleConfig.output

    if (unwatch === false) {
        config.watch = false
    }

    // handle entry
    config.entry = {}
    config.entry[moduleName] = moduleConfig.entry

    // handle output
    if (outputType === 'string') {
        config.output = Object.create(moduleConfig.output)
        config.output.path = moduleConfig.output
    } else if (outputType === 'object') {
        config.output = Object.assign({}, config.output, moduleConfig.output)
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
            if (count === 0) {
                resolve(info)
            } else {
                console.log(info)
                console.log('change times: ' + count)
            }
            count += 1
        })
    })
}

function logInfo(message) {
    console.log(message)
}
