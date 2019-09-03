const path = require("path");

module.exports = {
    mode: "development",
    entry: path.join(__dirname,'/src/app.js'),
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    devServer:{
        contentBase: path.join(__dirname,"src"),
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules:[
            {
                test:/\.jsx?&/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options:{
                            modules:true,
                        }
                    }
                ]
            }
        ]
    }
}