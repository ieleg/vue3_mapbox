export default class LngLat {
  constructor() {
  }

  onAdd(map) {
    this._map = map;
    const el = document.createElement("div");
    el.className = 'mouse-position';
    el.style.cssText = "position: absolute; bottom: 5px; z-index: 1; top: 20px; right: 20px; color: blue;font-size: 16px; width: 210px; height: 20px;";
    this.bindEvent();
    this._el = el;
    return el;
  }

  onRemove() {
    this._map.off('mousemove', this.update);
    this._el.parentNode.removeChild(this._el);
    this._map = null;
    return this;
  }

  bindEvent() {
    //注册鼠标移动事件
    this._map.on('mousemove', this.update.bind(this));
  }

  update(e) {
    this._el.innerHTML =
      '经度：' +
      e.lngLat.lng.toFixed(2) +
      '，纬度：' +
      e.lngLat.lat.toFixed(2);
  }
}
