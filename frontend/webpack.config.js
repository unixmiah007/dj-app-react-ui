const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for builds
  entry: './src/index.js', // Main JS entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/',
  },
  devtool: 'source-map', // Enable source maps
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JS & JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/, // Images
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/, // ✅ Ignore source maps in node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // So you can import without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
      favicon: './public/favicon.ico', // Optional
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    historyApiFallback: true, // For React Router
    open: true,
    hot: true,
  },
};
