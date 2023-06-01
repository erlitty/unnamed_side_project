const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    devServer: {
        host: "localhost",
        port: 8081,
        historyApiFallback: { index: "/", disableDotRule: true },
        open: true,
        https: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
