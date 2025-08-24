// packages/web/shell/webpack.host.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/main.tsx', 
  target: "web",       // 启动文件分离，利于 MF 先初始化
  output: { path: path.resolve(__dirname, 'dist'), publicPath: "/", chunkFormat: "array-push" , clean: true },
  devServer: { port: 40000, hot: true, historyApiFallback: true },
  module: {
    rules: [
     {test: /\.[jt]sx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { bugfixes: true, modules: false }],
              ['@babel/preset-react', { runtime: 'automatic', development: process.env.NODE_ENV !== 'production' }],
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-transform-runtime', { corejs: false, helpers: true, regenerator: true }]
            ]
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader']}
    ]
  },
  resolve: { extensions: ['.ts','.tsx','.js','.jsx','.json'],
             alias: { "@": path.resolve(__dirname, "src"), }
  },
  plugins: [
     new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        // 建议把版本放在路径里，便于缓存与灰度 如tokens所示
        //tokens: 'tokens@https://cdn.example.com/tokens/v1/remoteEntry.js',
        //ui: 'ui@http://localhost:40100/remoteEntry.js',       // 远程 UI 库
        //hotel: 'hotel@http://localhost:40002/remoteEntry.js'  // 远程应用
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
    new HtmlWebpackPlugin({ template: 'src/index.html', title: 'shell',inject: 'body'})
  ],
  devtool: 'source-map'
};