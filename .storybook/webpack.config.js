module.exports = {
  module: {
    rules: [
      // ShadowDom inline string styles
      {
        test: /\.shadow\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      // Css
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /\.shadow\.css$/
      }
    ]
  }
}
