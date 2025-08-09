// babel.config.js
/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  const isDev = api.env('development');
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: false,           // 让 Webpack 做 tree-shaking
        // targets 将自动读取 package.json 的 "browserslist"（推荐在下方说明里加上）
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',     // React 17+ 新 JSX 运行时
        development: isDev,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,            // polyfill 交给浏览器/应用层，避免全局污染
        helpers: true,
        regenerator: true,
      },
    ],
  ];

  // 仅开发环境启用 fast refresh（与 ReactRefreshWebpackPlugin 配合）
  if (isDev) {
    plugins.push(require.resolve('react-refresh/babel'));
  }

  return { presets, plugins };
};
