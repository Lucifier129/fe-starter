var config = require('./webpack.config.lib')
var devConfig = Object.create(config)
devConfig.plugins = config.plugins.slice(0, config.plugins.length - 1)

module.exports = devConfig