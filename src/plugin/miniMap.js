import turf from 'turf';
import mapbox from 'mapbox-gl';
import { genID } from './util';

/**
 * 自定义控件——鹰眼地图
 */
export default class MiniMap {
  constructor(accessToken) {
    this._mapX = null; //地图的x坐标
    this._mapY = null; //地图的y坐标
    this._mapZoom = null; //地图的比例尺
    this._overView = null;
    this._map = null;
    this._accessToken = accessToken;
    this._onMove = this.onMove.bind(this);
    this._mapdrag = this.mapdrag.bind(this);
    this._mapzoom = this.mapzoom.bind(this);
    this._onUp = this.onUp.bind(this);
  }
  onAdd(map) {
    this._map = map;
    const el = document.createElement("div");
    const id = "over_view_" + genID();
    el.style.cssText = "position: absolute;bottom:0px;right: 0px;z-index: 200;width: 308px;height:208px;background-color: #fff;border: 1px solid #555;border-radius: 1px;pointer-events: all;";
    el.innerHTML = '<div id="' + id + '" style="background-color: #fff;width:300px;height:200px;margin: 3px 3px 3px 3px;border:1px solid #7b98bc"></div>';
    setTimeout(() => {
      this.initMap(id);
    }, 1000);
    this._el = el;
    return el;
  }

  onRemove() {
    this._el.parentNode.removeChild(this._el);
    this._map = null;
    return this;
  }

  initMap(container) {
    //初始化地图
    mapbox.accessToken = this._accessToken;
    const map = this._map;
    const overView = new mapbox.Map({
      container,
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [120.1988, 30.1879],
      zoom: 11.6,
      dragPan: false,
      doubleClickZoom: false,
      scrollZoom: false
    });

    this._overView = overView;
    this.initextent();

    map.on('drag', this._mapdrag);
    map.on('zoom', this._mapzoom);

    const canvas = map.getCanvasContainer();
    overView.on('mousedown', 'maine', (e) => {
      e.preventDefault();
      canvas.style.cursor = 'grab';
      overView.on('mousemove', this._onMove);
      overView.once('mouseup', this._onUp);
    });
  }

  initextent() {
    const map = this._map;
    const overview = this._overView;
    const extent = map.getBounds();
    const coor = [
      [
        [extent._sw.lng, extent._ne.lat],
        [extent._ne.lng, extent._ne.lat],
        [extent._ne.lng, extent._sw.lat],
        [extent._sw.lng, extent._sw.lat],
        [extent._sw.lng, extent._ne.lat],
      ],
    ];
    const polygon = turf.polygon(coor);
    overview.on('load', function () {
      overview.addSource('maine', {
        type: 'geojson',
        data: polygon,
      });
      overview.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine',
        paint: {
          'fill-color': 'red',
          'fill-opacity': 0.2,
          'fill-outline-color': 'red',
        },
        layout: {
          visibility: 'visible',
        },
      });
    });
  }

  // 拖拽
  mapdrag() {
    const map = this._map;
    const overview = this._overView;
    this._mapX = map.getCenter().lng;
    this._mapY = map.getCenter().lat;
    overview.setCenter([this._mapX, this._mapY]);
    this.extent();
  }

  // 放大缩小
  mapzoom() {
    const map = this._map;
    const overview = this._overView;
    this._mapZoom = map.getZoom();
    overview.setZoom(this._mapZoom - 4);
    this._mapX = map.getCenter().lng;
    this._mapY = map.getCenter().lat;
    overview.setCenter([this._mapX, this._mapY]);
    this.extent();
  }

  //移动大图，鹰眼始终在中间
  extent() {
    const map = this._map;
    const overview = this._overView;
    var extent = map.getBounds();
    var coor = [
      [
        [extent._sw.lng, extent._ne.lat],
        [extent._ne.lng, extent._ne.lat],
        [extent._ne.lng, extent._sw.lat],
        [extent._sw.lng, extent._sw.lat],
        [extent._sw.lng, extent._ne.lat],
      ],
    ];
    var polygon = turf.polygon(coor);
    if (overview.getSource('maine')) {
      overview.getSource('maine').setData({
        type: 'FeatureCollection',
        features: [polygon],
      });
    }
  }

  onMove(e) {
    const map = this._map;
    var coords = e.lngLat;
    var canvas = map.getCanvasContainer();
    canvas.style.cursor = 'grab';
    map.setCenter(coords);
    this.extent();
  }

  onUp(/* e */) {
    const overview = this._overView;
    // const map = this._map;
    // const coords = e.lngLat;
    // const canvas = map.getCanvasContainer();
    overview.off('mousemove', this._onMove);
    overview.off('touchmove', this._onMove);
  }
}