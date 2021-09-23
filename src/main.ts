import { createApp } from "vue"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
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
