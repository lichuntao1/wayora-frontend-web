// packages/ui/webpack.remote.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 可选：本地预览
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',             // 可用 demo 启动预览；纯库可换成 './src/index.tsx'
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true
  },
  devServer: {
    port: 40100,
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' } // 允许被其它域加载 remoteEntry.js
  },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ui',                       // 远程容器的全局名：window.ui
      filename: 'remoteEntry.js',       // 远程清单文件
      exposes: {
        './Button': './src/components/Button',  // 导出一个组件
        './ThemeProvider': './src/theme/ThemeProvider'
      },
      remotes: {
        //ui: 'ui@http://localhost:40001/remoteEntry.js',       远程 UI 库 
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
      }
    }),
    new HtmlWebpackPlugin({ template: './demo/index.html', title: 'ui remote' })
  ],
  devtool: 'source-map'
};
