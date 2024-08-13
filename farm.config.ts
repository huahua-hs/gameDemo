import { defineConfig } from "@farmfe/core";
const path = require("path");

export default defineConfig({
  compilation: {
    resolve: {
      // 配置路径别名
      alias: {
        "@": path.join(process.cwd(), "src"),
      },
    },
  },
  plugins: ["@farmfe/plugin-react"],
  server: {
    port: 1420,
  },
});
