import { defineComponent, reactive } from "vue"
import Map from "@/components/map/index.tsx"
import useRequset from "@/composition/useRequest"
import { useStore } from "vuex"

import "./index.scss"
export default defineComponent({
  setup() {
    const { data, get } = useRequset()
    const store = useStore()
    const { token, center } = store.state
    const state = reactive({
      inputs: "",
      results: [],
      loading: false
    })
    const getPos = async (text: string) => {
      state.loading = true
      await get(`${api.map.pos}${text}.json`, {
        language: "zh",
        access_token: token,
        worldview: "cn",
        limit: 9,
        country: "cn",
        fuzzyMatch: false,
        //使响应偏向于更接近此位置的结果
        proximity: center
      })
      state.results = data.value.features
      state.loading = false
    }
    const getPosReverse = async (e: [number, number]) => {
      await get(`${api.map.pos}${e}.json`, {
        language: "zh",
        access_token: token,
        worldview: "cn",
        country: "cn",
      })
      state.inputs = data.value.features[0].place_name.slice(7)
    }
    const remoteMethod = async (query: string) => {
      if (query) {
        getPos(query)
      }
    }
    return () => (
      <div class="dashboard">
        <div class="dashboard-search">
          <span>目的地路线查询:</span>
          <el-select
            v-model={state.inputs}
            filterable
            remote-method={remoteMethod}
            remote
            loading={state.loading}
            size="small"
          >
            {state.results.map(item => {
              const { place_name, center } = item
              return <el-option value={center} label={place_name}></el-option>
            })}
          </el-select>
        </div>
        <Map end-pos={state.inputs} onGetPos={getPosReverse} />
      </div>
    )
  }
})
