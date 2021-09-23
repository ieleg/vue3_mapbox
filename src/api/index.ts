declare const window: Window & typeof globalThis & { api: any }
// declare const ImportMeta & { globEager: any }
const _api = {}
const requireModule = import.meta.globEager("./modules/*.ts|js")

Object.keys(requireModule).forEach(fileName => {
  const componentConfig = requireModule[fileName]
  Object.assign(_api, componentConfig.default || componentConfig)
})

const isObj = (obj: Object) =>
  Object.prototype.toString.call(obj) === "[object Object]"
const createPrivateObject: (obj: Record<any, any>) => Record<any, any> =
  obj => {
    return new Proxy(obj, {
      get(target: Record<any, any>, key: string) {
        // 深层数据也设为只读
        if (isObj(target[key])) {
          return createPrivateObject(target[key])
        }
        return target[key]
      },
      set(target, key, value) {
        console.log("不能对[" + key.toString() + "]赋值.")
        return true
      }
    })
  }

const api = createPrivateObject(_api)
window.api = api
