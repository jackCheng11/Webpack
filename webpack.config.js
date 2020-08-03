const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "dest"),
        filename: "[hash]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {loader: "babel-loader"},
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
            filename: "index.html"
        })
    ]
}