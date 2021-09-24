import { defineComponent } from "vue"
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    return () => (
      <>
        <el-submenu
          style="width: 200px"
          index={props.item.id.toString()}
          v-slots={{ title: () => props.item.name }}
        >
          {props.item.children &&
            props.item.children.map((item: { id: number; name: string }) => {
              return (
                <el-menu-item index={item.id.toString()}>
                  {item.name}
                </el-menu-item>
              )
            })}
        </el-submenu>
      </>
    )
  }
})
