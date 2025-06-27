const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
      template: "./src/template.html",
    })
    ],
     devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    port: 3000
  },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
  test: /\.html$/i,
  loader: "html-loader",
},
{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },


    ],
  }, 
};