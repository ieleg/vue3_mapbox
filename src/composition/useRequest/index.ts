import axios from "axios"
import { reactive, toRefs } from "vue"

const state = reactive({
  data: null,
  loading: false
})
const baseURL = "/api"

const http = axios.create({
  withCredentials: true,
  //@ts-ignore
  crossDomain: true,
  baseURL: baseURL,
  timeout: 1000 * 60
})

const get = async (url: string, params: Record<string, any>) => {
  state.loading = true
  const res = await http({
    method: "GET",
    url,
    params: params
  })
  state.loading = false
  state.data = res.data
}

const post = async (url: string, params: Record<string, any>) => {
  state.loading = true
  const res = await http({
    method: "GET",
    url,
    params: params
  })
  state.loading = false
  state.data = res.data
}

export default function () {
  console.log(123)

  return {
    ...toRefs(state),
    get,
    post
  }
}

// export default useRequset
