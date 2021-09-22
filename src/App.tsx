import { defineComponent } from "vue"
import {  RouterView } from "vue-router"
import "./style/main.scss"
import "./style/element-ui.scss"

export default defineComponent({
  name: "App",
  setup() {
    return () => <RouterView />
  }
})
