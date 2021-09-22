import { defineComponent } from "vue"
import Map from "@/components/map/index.tsx"

import './index.scss'
export default defineComponent({
  setup() {
    return () => (
      <div class="dashboard">
        <Map />
      </div>
    )
  }
})
