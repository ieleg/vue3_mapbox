import './measure.css';
import mapbox from 'mapbox-gl';
import turf from 'turf';
import { genID } from './util';

/**
 * 自定义控件——测量
 */
const interactions = [
  'scrollZoom',
  'boxZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'doubleClickZoom',
  'touchZoomRotate'
];
class MeasureLength {
  constructor(map) {
    this._suffx = genID();
    this.isMeasure = true;
    this.jsonPoint = {
      'type': 'FeatureCollection',
      'features': []
    };
    this.jsonLine = {
      'type': 'FeatureCollection',
      'features': []
    };
    this.points = [];
    this.markers = [];
    this.tooltip = null;
    this._clickHandler = this.clickHandler.bind(this);
    this._moveHandler = this.moveHandler.bind(this);
    this._dblclickHandler = this.dblclickHandler.bind(this);
    this.onAdd(map);
  }

  onAdd(map) {
    this._map = map;
    map.getCanvas().style.cursor = 'crosshair';

    const el = document.createElement('div');
    el.setAttribute('class', 'measure-result');
    const option = {
      element: el,
      anchor: 'left',
      offset: [8, 0]
    };
    this.tooltip = new mapbox.Marker(option)
      .setLngLat([0, 0])
      .addTo(map);
    var source = map.getSource('points' + this._suffx);
    if (source) {
      map.getSource('points' + this._suffx).setData(this.jsonPoint);
      map.getSource('line-move' + this._suffx).setData(this.jsonLine);
      map.getSource('line' + this._suffx).setData(this.jsonLine);
    } else {
      map.addSource('points' + this._suffx, {
        type: 'geojson',
        data: this.jsonPoint
      });
      map.addSource('line' + this._suffx, {
        type: 'geojson',
        data: this.jsonLine
      });
      map.addSource('line-move' + this._suffx, {
        type: 'geojson',
        data: this.jsonLine
      });
      map.addLayer({
        id: 'line-move' + this._suffx,
        type: 'line',
        source: 'line-move' + this._suffx,
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'line' + this._suffx,
        type: 'line',
        source: 'line' + this._suffx,
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'points' + this._suffx,
        type: 'circle',
        source: 'points' + this._suffx,
        paint: {
          'circle-color': '#ffffff',
          'circle-radius': 3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ff0000'
        }
      });
    }
    this.bindEvent();
    this._el = el;
    return el;
  }

  onRemove() {
    //this._el.parentNode.removeChild(this._el);
    const map = this._map;
    var source = map.getSource('points' + this._suffx);
    var json = {
      'type': 'FeatureCollection',
      'features': []
    };
    if (source) {
      map.getSource('points' + this._suffx).setData(json);
      map.getSource('line-move' + this._suffx).setData(json);
      map.getSource('line' + this._suffx).setData(json);
    }
    this.markers.forEach(marker => {
      marker.remove();
    });
    this.tooltip.remove();
    this.removeEvent();
    map.getCanvas().style.cursor = 'default';
  }

  clickHandler(_e) {
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      this.addMeasureRes(coords);
      this.addPoint(coords);
      this.points.push(coords);
    }
  }

  moveHandler(_e) {
    const map = this._map;
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      if (this.jsonPoint.features.length > 0) {
        var prev = this.jsonPoint.features[this.jsonPoint.features.length - 1];
        var json = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [prev.geometry.coordinates, coords]
          }
        };
        map.getSource('line-move' + this._suffx).setData(json);
        this._el.innerHTML = this.getLength(coords);

      } else {
        this._el.innerHTML = '点击地图开始测量';
      }
      this.tooltip.setLngLat(coords);
    }
  }

  dblclickHandler(_e) {
    const map = this._map;
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      this.addPoint(coords);
      this.isMeasure = false;
      map.getCanvas().style.cursor = '';
      this.jsonPoint.features = [];
      this.jsonLine.features = [];
      // this.tooltip.remove();
      // 添加关闭按钮
      const ele = document.createElement('div');
      ele.setAttribute('class', 'measure-result close');
      const option = {
        element: ele,
        anchor: 'bottom-left',
        offset: [-5, -10]
      };
      ele.innerHTML = '×';
      const marker = new mapbox.Marker(option)
        .setLngLat(coords)
        .addTo(map);
      ele.onclick = (__e) => {
        __e.stopPropagation();
        this.onRemove();
      };
      this.markers.push(marker);
    }
  }

  bindEvent() {
    //注册事件
    const map = this._map;
    map.on('click', this._clickHandler);

    map.on('mousemove', this._moveHandler);

    map.on('dblclick', this._dblclickHandler);
  }

  removeEvent() {
    const map = this._map;
    map.off('click', this._clickHandler);

    map.off('mousemove', this._moveHandler);

    map.off('dblclick', this._dblclickHandler);
  }

  addPoint(coords) {
    if (this.jsonPoint.features.length > 0) {
      var prev = this.jsonPoint.features[this.jsonPoint.features.length - 1];
      this.jsonLine.features.push({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [prev.geometry.coordinates, coords]
        }
      });
      this._map.getSource('line' + this._suffx).setData(this.jsonLine);
    }
    this.jsonPoint.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: coords
      }
    });
    this._map.getSource('points' + this._suffx).setData(this.jsonPoint);
  }

  getLength(coords) {
    var _points = this.points.concat([coords]);
    var line = turf.lineString(_points);
    var len = turf.lineDistance(line);
    if (len < 1) {
      len = Math.round(len * 1000) + 'm';
    } else {
      len = len.toFixed(2) + 'km';
    }
    return len;
  }

  addMeasureRes(coords) {
    const ele = document.createElement('div');
    ele.setAttribute('class', 'measure-result');
    ele.innerHTML = this.points.length === 0 ? '起点' : this.getLength(coords);
    const option = {
      element: ele,
      anchor: 'left',
      offset: [8, 0]
    };
    const marker = new mapbox.Marker(option)
      .setLngLat(coords)
      .addTo(this._map);
    this.markers.push(marker);
  }
}
class MeasureArea {
  constructor(map) {
    this.isMeasure = true;
    this._suffx = genID();
    this.jsonPoint = {
      'type': 'FeatureCollection',
      'features': []
    };
    this.jsonLine = {
      'type': 'FeatureCollection',
      'features': []
    };
    this.points = [];
    this.markers = [];
    this.tooltip = null;
    this._map = map;
    this._clickHandler = this.clickHandler.bind(this);
    this._moveHandler = this.moveHandler.bind(this);
    this._dblclickHandler = this.dblclickHandler.bind(this);
    this.onAdd();
  }

  onAdd() {
    const map = this._map;
    map.getCanvas().style.cursor = 'crosshair';

    const el = document.createElement('div');
    el.setAttribute('class', 'measure-result');
    const option = {
      element: el,
      anchor: 'left',
      offset: [8, 0]
    };
    this.tooltip = new mapbox.Marker(option)
      .setLngLat([0, 0])
      .addTo(map);
    var source = map.getSource('points-area' + this._suffx);
    if (source) {
      map.getSource('points-area' + this._suffx).setData(this.jsonPoint);
      map.getSource('line-area' + this._suffx).setData(this.jsonLine);
    } else {
      map.addSource('points-area' + this._suffx, {
        type: 'geojson',
        data: this.jsonPoint
      });
      map.addSource('line-area' + this._suffx, {
        type: 'geojson',
        data: this.jsonLine
      });
      map.addLayer({
        id: 'line-area' + this._suffx,
        type: 'fill',
        source: 'line-area' + this._suffx,
        paint: {
          'fill-color': '#ff0000',
          'fill-opacity': 0.1
        }
      });
      map.addLayer({
        id: 'line-area-stroke' + this._suffx,
        type: 'line',
        source: 'line-area' + this._suffx,
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'points-area' + this._suffx,
        type: 'circle',
        source: 'points-area' + this._suffx,
        paint: {
          'circle-color': '#ffffff',
          'circle-radius': 3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ff0000'
        }
      });
    }
    this.bindEvent();
    this._el = el;
    return el;
  }

  onRemove() {
    const map = this._map;
    var json = {
      'type': 'FeatureCollection',
      'features': []
    };
    var sourceArea = map.getSource('points-area' + this._suffx);
    if (sourceArea) {
      map.getSource('points-area' + this._suffx).setData(json);
      map.getSource('line-area' + this._suffx).setData(json);
    }

    this.markers.forEach(marker => {
      marker.remove();
    });
    this.removeEvent();
    this.tooltip.remove();
    map.getCanvas().style.cursor = 'default';
  }

  clickHandler(_e) {
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      this.points.push(coords);
      this.addPoint(coords);
    }
  }

  moveHandler(_e) {
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      var len = this.jsonPoint.features.length;
      if (len === 0) {
        this._el.innerHTML = '点击地图开始测量';
      } else if (len === 1) {
        this._el.innerHTML = '点击地图继续绘制';
        var json1 = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [this.points[0], coords]
          }
        };
        this._map.getSource('line-area' + this._suffx).setData(json1);
      } else {
        var pts = this.points.concat([coords]);
        pts = pts.concat([this.points[0]]);
        var json = {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [pts]
          }
        };
        this._map.getSource('line-area' + this._suffx).setData(json);
        this._el.innerHTML = this.getArea(coords);
      }
      this.tooltip.setLngLat(coords);
    }
  }

  dblclickHandler(_e) {
    if (this.isMeasure) {
      var coords = [_e.lngLat.lng, _e.lngLat.lat];
      this.points.push(coords);
      this.isMeasure = false;
      // this._el.innerHTML = this.getArea(coords);
      // this.tooltip.setLngLat(coords);

      // 添加关闭按钮
      var _ele = document.createElement('div');
      _ele.setAttribute('class', 'measure-result close');
      var option = {
        element: _ele,
        anchor: 'bottom-left',
        offset: [-5, -10]
      };
      _ele.innerHTML = '×';
      const mark = new mapbox.Marker(option)
        .setLngLat(coords)
        .addTo(this._map);
      _ele.onclick = (__e) => {
        __e.stopPropagation();
        this.onRemove();
      };
      this.markers.push(mark);
    }
  }

  bindEvent() {
    //注册事件
    const map = this._map;
    map.on('click', this._clickHandler);

    map.on('mousemove', this._moveHandler);

    map.on('dblclick', this._dblclickHandler);
  }

  removeEvent() {
    const map = this._map;
    map.off('click', this._clickHandler);

    map.off('mousemove', this._moveHandler);

    map.off('dblclick', this._dblclickHandler);
  }

  getArea(coords) {
    var pts = this.points.concat([coords]);
    pts = pts.concat([this.points[0]]);
    var polygon = turf.polygon([pts]);
    var area = turf.area(polygon);
    if (area < 1000) {
      area = Math.round(area) + 'm²';
    } else {
      area = (area / 1000000).toFixed(2) + 'km²';
    }
    return area;
  }
  addPoint(coords) {
    this.jsonPoint.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: coords
      }
    });
    this._map.getSource('points-area' + this._suffx).setData(this.jsonPoint);
  }
}
export default class Measure {
  constructor() {
    this.instances = [];
    this._mapInitialConfig = [];
    this._clickHandler = this.clickHandler.bind(this);
  }
  onAdd(map) {
    this._map = map;
    const el = document.createElement("div");
    el.className = 'mapboxgl-ctrl-group mapboxgl-ctrl';
    el.style.cssText = "pointer-events: all;";
    el.innerHTML = '<button class="mapbox-gl-measure_ctrl-draw-btn mapbox-gl-measure_line" title="LineString tool "></button><button class="mapbox-gl-measure_ctrl-draw-btn mapbox-gl-measure_polygon" title="Polygon tool "></button><button class="mapbox-gl-measure_ctrl-draw-btn mapbox-gl-measure_trash" title="Delete"></button>';
    this._el = el;
    this.storeMapConfig();
    this.bindEvent();
    return el;
  }

  onRemove() {
    this.removeEvent();
    this._el.parentNode.removeChild(this._el);
    this._map = null;
    return this;
  }

  clickHandler(e) {
    var target = e.target;
    if (target.tagName !== 'BUTTON') return;
    if (target.className.includes('_line')) {
      const line = new MeasureLength(this._map);
      this.instances.push(line);
    } else if (target.className.includes('_polygon')) {
      const area = new MeasureArea(this._map);
      this.instances.push(area);
    } else if (target.className.includes('_trash')) {
      this.instances.forEach(instance => {
        instance.onRemove();
      });
    }
  }

  removeEvent() {
    this._el.removeEventListener("click", this._clickHandler);
  }

  bindEvent() {
    this._el.addEventListener("click", this._clickHandler);
  }


  storeMapConfig() {
    interactions.forEach((interaction) => {
      const interactionSet = this._map[interaction];
      if (interactionSet) {
        this._mapInitialConfig[interaction] = this._map[interaction].isEnabled();
      }
    });
  }

  enable() {
    setTimeout(() => {
      const ctx = this;
      // First check we've got a map and some context.
      if (!ctx._map || !ctx._map.doubleClickZoom) return;
      // Now check initial state wasn't false (we leave it disabled if so)
      if (!ctx._mapInitialConfig['doubleClickZoom']) return;
      ctx._map.doubleClickZoom.enable();
    }, 0);
  }

  disable() {
    const ctx = this;
    setTimeout(() => {
      if (!ctx._map || !ctx._map.doubleClickZoom) return;
      // Always disable here, as it's necessary in some cases.
      // console.log(ctx._map.doubleClickZoom.disable);
      ctx._map.doubleClickZoom.disable();
    }, 0);
  }
}