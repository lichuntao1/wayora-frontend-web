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
    port: 40001,
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' } // 允许被其它域加载 remoteEntry.js
  },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader']}
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'],
             alias: { "@": require("path").resolve(__dirname, "src")  } 
            },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plan',                       // 远程容器的全局名：window.ui
      filename: 'remoteEntry.js',       // 远程清单文件
      exposes: {
        './Css': './src/plan-styles.ts',
        './Button': './src/components/Button',  // 导出一个组件
        './ThemeProvider': './src/theme/ThemeProvider'
      },
      remotes: {
        // 建议把版本放在路径里，便于缓存与灰度 如tokens所示
        tokens: 'tokens@https://cdn.example.com/tokens/v1/remoteEntry.js',
        ui: 'ui@http://localhost:40001/remoteEntry.js',       // 远程 UI 库 
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'clsx': { singleton: true },
        'tailwind-merge': { singleton: true },
        // 视实际组件使用情况共享 radix 包
        '@radix-ui/react-slot': { singleton: true, requiredVersion: deps['@radix-ui/react-slot'] }
      }
    }),
    new HtmlWebpackPlugin({ template: './demo/index.html', title: 'ui remote' })
  ],
  devtool: 'source-map'
};
