var path = require('path');
var node_module_dir = path.resolve(__dirname, 'node_module')
var webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'
const __DEV__ = NODE_ENV === 'development'
module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'static/app/main.js'),],
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 3001,
        //代理
        proxy: {
            "/api": { //匹配的url
                target: "http://localhost:3002",
                // pathRewrite: {'^/api' : ''},
                changeOrigin: true,
                secure: false,
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin(Object.assign({
            'process.env': {NODE_ENV: JSON.stringify(NODE_ENV)},
            __DEV__,
        }, {})),
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
