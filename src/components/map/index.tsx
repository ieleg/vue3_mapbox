//@ts-nocheck
import "mapbox-gl/dist/mapbox-gl.css"
import mapbox from "mapbox-gl"
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css"
import MapboxDraw from "@mapbox/mapbox-gl-draw"
import MiniMap from "@/plugin/miniMap"
import useRequset from "@/composition/useRequest"
import turf from "turf"
// import LngLat from "@/plugin/LngLat"

import { defineComponent, onMounted, ref, reactive, watch, PropType } from "vue"
import { useStore } from "vuex"
import "./index.scss"
type EndPosType = PropType<[number, number]>
export default defineComponent({
  props: {
    endPos: {
      type: [Array as EndPosType, String]
    }
  },
  emits: ["getPos"],
  setup(props, context) {
    const map = ref(null)
    const walkInfo = reactive({
      steps: [],
      time: "",
      total: ""
    })
    const { data, run } = useRequset()
    const store = useStore()
    const { token, center } = store.state
    const start: [number, number] = [120.20305951013802, 30.186618156061]
    const getSource = (mapApp: Object, geojson: any) => {
      if (mapApp.getSource("route")) {
        console.log(11, geojson.geometry.coordinates)
        mapApp.getSource("route").setData(geojson)
      } else {
        console.log(22)
        mapApp.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#fff",
            "line-width": 8,
            "line-opacity": 0.75
          }
        })
      }
    }
    const getRoute = async (end: [number, number], map: any) => {
      console.log("end", end)
      await run({
        url: `${api.map.route}${start[0]},${start[1]};${end[0]},${end[1]}`,
        params: {
          geometries: "geojson",
          access_token: token,
          steps: true
        }
      })
      console.log(data.value)

      if (data.value.code === "Ok") {
        const route = data.value.routes[0].geometry.coordinates
        walkInfo.steps = data.value.routes[0].legs[0].steps
        walkInfo.time = Math.floor(data.value.routes[0].duration / 60)
        walkInfo.total = getDistance(route)
        const geojson = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: route
          }
        }
        getSource(map, geojson)
      }
    }
    watch(
      () => props.endPos,
      val => {
        if (Array.isArray(val)) {
          getRoute(val, map.value)
          map.value.panTo(val, { duration: 5000 })
        }
      }
    )
    const getPos = () => {}
    onMounted(() => {
      // get the sidebar and add the instructions
      mapbox.accessToken = token
      // map???????????????????????????????????????
      const mapApp = new mapbox.Map({
        container: "map-app",
        //????????????????????????
        style: "mapbox://styles/ieleg/cktp6c0641xh118kkis5ec4ew",
        // style: "mapbox://styles/mapbox/light-v10",
        center,
        zoom: 15.6,
        pitch: 60,
        bearing: -60
      })
      console.log(333, mapApp)

      // ????????????
      mapApp.addControl(new MiniMap(mapbox.accessToken), "bottom-right")

      //??????????????????
      const draw = new MapboxDraw({
        //?????????????????????????????????
        keybindings: false,
        //?????????ture????????????shift+?????????????????????
        boxSelect: true,
        //????????????????????????????????????????????????
        clickBuffer: 5,
        //??????????????????????????????????????????true????????????????????????????????????
        displayControlsDefault: false,
        //???????????????????????????
        controls: {
          //???????????????
          line_string: true,
          //?????????????????????
          polygon: true,
          //???????????????
          point: true,
          //??????????????????
          trash: true
        }
      })
      //?????????????????????????????????
      mapApp.addControl(draw, "top-right")
      mapApp.on("load", () => {
        const layers = mapApp.getStyle().layers
        const labelLayerId = layers.find(
          (layer: { type: string; layout: { [x: string]: any } }) =>
            layer.type === "symbol" && layer.layout["text-field"]
        ).id
        mapApp.addLayer(
          {
            id: "add-3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": "#aaa",

              // Use an 'interpolate' expression to
              // add a smooth transition effect to
              // the buildings as the user zooms in.
              "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "height"]
              ],
              "fill-extrusion-base": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "min_height"]
              ],
              "fill-extrusion-opacity": 0.6
            }
          },
          labelLayerId
        )
        getRoute(start, mapApp)
        mapApp.addLayer({
          id: "point",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: start
                  }
                }
              ]
            }
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be"
          }
        })
      })
      mapApp.on("click", ({ lngLat }) => {
        const coords = Object.keys(lngLat).map(key => lngLat[key])
        console.log(123, coords)

        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords
              }
            }
          ]
        }
        if (mapApp.getLayer("end")) {
          mapApp.getSource("end").setData(end)
        } else {
          mapApp.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                ...end
              }
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30"
            }
          })
        }
        context.emit("getPos", coords)
        getRoute(coords, mapApp)
      })
      map.value = mapApp
    })
    const getLength = (str: string): number => {
      const reg = /^[\u4e00-\u9fa5]+$/
      let num = 0
      for (let i of str) {
        if (reg.test(i)) {
          num += 2
        } else {
          num += 1
        }
      }
      return num + 1
    }
    const getDistance = (lines: Array<[number, number]>): string => {
      let distance = ""
      const line = turf.lineString(lines)
      const len = turf.lineDistance(line)

      if (len < 1) {
        distance = Math.round(len * 1000) + "m"
      } else {
        distance = len.toFixed(2) + "km"
      }
      return "??????????????????" + distance
    }
    return () => (
      <>
        <div id="map-app"></div>
        {walkInfo.time > 0 && (
          <div id="instructions">
            {walkInfo.steps.map(item => {
              return (
                <div
                  style={{ width: `${getLength(item.maneuver.instruction)}ch` }}
                >
                  {item.maneuver.instruction}
                </div>
              )
            })}
            <div style={{ width: `${getLength(walkInfo.total)}ch` }}>
              {walkInfo.total}
            </div>
          </div>
        )}
      </>
    )
  }
})
