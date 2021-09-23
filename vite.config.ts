import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}
module.exports = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": pathResolve("./src")
    },
  },
  server: {
    port: 3333,
    open: false, //自动打开 
    base: "./ ", //生产环境路径
    proxy: { 
      '/api': {
        target: 'https://api.mapbox.com', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
