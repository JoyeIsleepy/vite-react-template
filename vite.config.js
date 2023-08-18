import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": "/src", // 这里设置别名 @ 指向 /src 目录
  },
  plugins: [react()],
});
