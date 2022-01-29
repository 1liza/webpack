const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].[ext]",
          //   },
          // },
          {
            loader: "url-loader",
            options: {
              limit: 4000000,
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { browsers: ["last 50 versions"] }]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
