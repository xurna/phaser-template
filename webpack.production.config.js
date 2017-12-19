var path = require('path');
var node_module_dir = path.resolve(__dirname, 'node_module')
var webpack = require('webpack')
const autoprefixer = require('autoprefixer')

process.traceDeprecation = true
const NODE_ENV = process.env.NODE_ENV || 'development'
const __DEV__ = NODE_ENV === 'development'

module.exports = {
    entry: {
        app: [path.resolve(__dirname, 'static/app/main.js'),],
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.min.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.DefinePlugin(Object.assign({
            'process.env': {NODE_ENV: JSON.stringify(NODE_ENV)},
            __DEV__,
        }, {})),
        new webpack.optimize.UglifyJsPlugin({
            drop_console: true,
            minimize: true,
            output: {
                //去掉注释
                comments: false
            },
            compress: {
                //去掉warnings
                warnings: false,
                //去掉debugger
                drop_debugger: true,
                //去掉console
                drop_console: true
            }
        }),
    ],
    module: {
        rules: [
            {
                loader: "babel-loader",
                include: [path.resolve(__dirname, 'static')],
                exclude: [node_module_dir],
                test: /\.js?$/,
                options: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            },
        ]
    }
}
