// packages/web/shell/webpack.host.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/bootstrap.tsx',       // 启动文件分离，利于 MF 先初始化
  output: { path: path.resolve(__dirname, 'dist'), publicPath: 'auto', clean: true },
  devServer: { port: 40000, hot: true, historyApiFallback: true },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        ui: 'ui@http://localhost:40100/remoteEntry.js',       // 远程 UI 库
        hotel: 'hotel@http://localhost:40002/remoteEntry.js'  // 远程应用
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html', title: 'shell' })
  ],
  devtool: 'source-map'
};