const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [/src/,
          /node_modules\/react-infinite-any-height\/src\/Viewer.jsx/,
          /node_modules\/react-drag-range\/src\/Viewer.jsx/,
          /node_modules\/react-speed-reader\/src\/Viewer.jsx/,
          /node_modules\/react-popups\/src\/Viewer.jsx/,
        ],
        use: {
          loader: "babel-loader",
        }
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: { fix: true }
          },
        ],
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          }
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    })
  ],
}
