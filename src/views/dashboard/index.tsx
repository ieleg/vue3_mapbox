import { defineComponent, reactive } from "vue"
import Map from "@/components/map/index.tsx"
import useRequset from "@/composition/useRequest"
import { useStore } from "vuex"
import { get } from "lodash-es"
import "./index.scss"
export default defineComponent({
  setup() {
    const store = useStore()
    const { token, center } = store.state
    const state = reactive({
      inputs: "",
      results: []
    })
    const {
      data,
      run: _getPos,
      loading
    } = useRequset(() => ({
      data: {
        language: "zh",
        access_token: token,
        worldview: "cn",
        limit: 9,
        country: "cn",
        fuzzyMatch: false,
        //使响应偏向于更接近此位置的结果
        proximity: center
      },
      method: "GET"
    }))

    const { data: reverseData, run: _getPosReverse } = useRequset(() => ({
      data: {
        language: "zh",
        access_token: token,
        worldview: "cn",
        country: "cn"
      },
      method: "GET"
    }))

    const getPos = async (text: string) => {
      await _getPos({
        url: `${api.map.pos}${text}.json`
      })
      console.log(data.value)

      if (data.value) {
        state.results = get(data.value!, ["features"], [])
      }
    }
    const getPosReverse = async (e: [number, number]) => {
      await _getPosReverse({
        url: `${api.map.pos}${e}.json`
      })
      if (reverseData.value) {
        state.inputs = get(reverseData.value!, "features[0].place_name").slice(
          7
        )
      }
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
            loading={loading.value}
            size="small"
          >
            {state.results.length &&
              state.results.map(item => {
                const { place_name, center } = item
                console.log(place_name)
                return (
                  <el-option
                    value={center}
                    key={place_name}
                    label={place_name}
                  ></el-option>
                )
              })}
          </el-select>
        </div>
        <Map end-pos={state.inputs} onGetPos={getPosReverse} />
      </div>
    )
  }
})
