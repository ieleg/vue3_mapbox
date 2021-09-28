import axios, { AxiosRequestConfig } from "axios"
import { reactive, toRefs, watch } from "vue"

const baseURL = "/api"

const http = axios.create({
  withCredentials: true,
  //@ts-ignore
  crossDomain: true,
  baseURL: baseURL,
  timeout: 1000 * 60
})

export default (getConfig: () => AxiosRequestConfig) => {
  const state = reactive({
    data: null,
    loading: false
  })
  const config: AxiosRequestConfig = reactive(getConfig?.() || {})
  watch(getConfig, val => {
    Object.assign(config, { ...val })
  })
  const run = async (customConfig?: AxiosRequestConfig) => {
    try {
      state.loading = true
      const res = await http({
        method: config.method ?? "get",
        url: config.url,
        [["get", "GET"].indexOf(config.method ?? "") > -1 ? "params" : "data"]:
          config.data,
        ...customConfig
      })
      state.data = res.data
    } catch (e) {
      console.error(e)
    } finally {
      state.loading = false
    }
  }
  return {
    ...toRefs(state),
    run
  }
}
