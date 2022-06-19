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
  }
]

const router = createRouter({
  history: createWebHistory("/vue3_mapbox/"),
  routes
})

export default router
