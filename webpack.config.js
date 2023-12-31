const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const isDevelopment = process.env.NODE_ENV !== "production"

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },  
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
}
