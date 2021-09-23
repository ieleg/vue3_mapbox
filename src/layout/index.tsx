import { defineComponent, SetupContext } from "vue"
import { RouterView } from "vue-router"
import SideBar from "./siderBar"
import "./index.scss"
export default defineComponent({
  name: "App",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(prop: {}, context: SetupContext) {
    return () => (
      <>
        <el-container>
          <el-aside width="auto">
            <SideBar />
          </el-aside>
          <el-container style="height: 100%; position: relative">
            {/* <el-header>Header</el-header> */}
            {/* <Map style="z-index: 991;position: absolute" /> */}
            <el-main>
              <RouterView />
            </el-main>
            {/* <el-footer>Footer</el-footer> */}
          </el-container>
        </el-container>
      </>
    )
  }
})
