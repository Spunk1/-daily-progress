const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlplu = new htmlWebpackPlugin({
    template: path.join(__dirname,"./src/index.html"),
    filename: 'index.html'
})

module.exports = {
    mode:"development",
    entry:path.join(__dirname,'./src/app.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: '[name]-[hash:4].bundle.js'
    },
    module:{
        rules:[
            {test: /\.css$/,use:['style-loader','css-loader']},
        ]
    },
    plugins:[
        htmlplu
    ]
}