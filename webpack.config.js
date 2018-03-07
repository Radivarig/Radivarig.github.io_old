module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  devServer: {
    host: "0.0.0.0",
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel', 'flowcheck', 'babel?blacklist=flow'], exclude: /node_modules/ }
    ]
  }
}
