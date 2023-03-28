const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://openapi.seoul.go.kr:8088",
      changeOrigin: true,
      pathRewrite: {
        "^/api": `/${process.env.REACT_APP_KINDERINFO_KEY}/json/ChildCareInfo/1/1000/`,
      },
    })
  );
};
