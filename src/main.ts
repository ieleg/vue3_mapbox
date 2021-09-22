import { createApp } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App"
import '@/api/index.ts'
import router from "./router"
import store from "./store"
import "@/style/index.scss"

const app = createApp(App);
app.use(ElementPlus);
app.use(router)
app.use(store)
app.mount("#app");
