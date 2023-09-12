import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
   // 主要是这一段
   css: {
    preprocessorOptions: {
      // 全局样式引入
      scss: {
        // 文件路径，注意最后需要添加 ';'
        additionalData: '@import "@/styles/mixin.scss";',
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    react(),
    /* legacy 为传统浏览器提供支持(如何不需要支持低版本浏览器可以删除该插件)
    * targets 配置的值可以是一个字符串或一个对象，用于指定要支持的浏览器版本。
    *"defaults": 代表默认的浏览器目标，通常是最新版本的浏览器。
      "last 1 version": 代表最新的浏览器版本。
      "not IE 11": 代表排除 IE 11。
      "not dead": 代表不支持任何已经不再维护的浏览器。
    */
    legacy({
      targets: ["defaults", "not IE 11"],
      // polyfills当es6某些api不可用的时候，legacy提供支持
      polyfills: [
        "es.symbol",
        "es.array.filter",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.for-each",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all",
      ],
    }),
  ],
  server: {
    port: 1988,
    open: true,
    host: "0.0.0.0", //ip地址
  },
});
