import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  // Display all the files Webpack is bundling.
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  // change target to 'node' or electron if building to other environemntsssssss
  target: 'web',
  // webpack won't generate physical files like bundle.js for
  // dev build. It will serve build from memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};
