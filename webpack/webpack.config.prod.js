var webpack = require('webpack')
var baseConfig = require('./webpack.config.base')
var prodConfig = Object.create(baseConfig)

prodConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            unused: true,
            drop_console: true,
            drop_debugger: true,
            dead_code: true,
            properties: false,
            screw_ie8: true,
            warnings: false
        },
        minimize: true
    })
)

module.exports = prodConfig
