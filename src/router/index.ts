import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Layout from "../layout"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: () => import("../views/dashboard"),
        name: "dashboard"
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
