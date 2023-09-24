const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const routes = {
  "/users": "http://localhost:3000",
};

for (const route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}

const PORT = 8000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Loại bỏ tiền tố '/api' trong yêu cầu
    },
  })
);

app.listen(PORT, () => {
  console.log("Proxy server is running on port 3001");
});
