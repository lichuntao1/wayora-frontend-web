// webpack.tokens.js
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: process.env.NODE_ENV || 'development',               // dev 环境请用 development
  entry: './src/index.ts',
  output: {
    clean: true,
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            // 想确保“越早插入越靠前”，可指定插入策略（可选）
            // options: { insert: (element) => document.head.prepend(element) }
          },
          'css-loader',
          // 如需 PostCSS 再处理（比如 preset-env/autoprefixer），在这里加 postcss-loader
          // { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'tokens',
      filename: 'remoteEntry.js',      // 远程清单文件
      exposes: {
        './Css': './src/index.ts'      // 宿主将 import('tokens/Css')
      },
      // tokens 不依赖 React，一般无需 shared
      shared: {}
    })
  ],
  devServer: {
    port: 40104,                       // 本地调试端口
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
