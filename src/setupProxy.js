const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://test.daground.io/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
