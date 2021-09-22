import { defineComponent, ref } from "vue"
import SidebarItem from "./item"
import NavList from "./mock.js"
export default defineComponent({
  setup() {
    const curIndex = ref(NavList[2].id)
    console.log(curIndex.value)
    const handleClick = (index: number, path: number[]) => {
        console.log(index, path)
    }
    return () => (
      <>
        <el-menu
          backgroundColor="#304156"
          text-color="#bfcbd9"
          unique-opened={true}
          active-text-color="#409EFF"
          collapse-transition={true}
          mode="vertical"
          onSelect={handleClick}
        >
          {NavList.map(item => {
            return <SidebarItem item={item}></SidebarItem>
          })}
        </el-menu>
      </>
    )
  }
})
