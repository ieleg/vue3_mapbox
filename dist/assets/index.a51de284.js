import {
  d as e,
  c as t,
  R as r,
  F as i,
  r as a,
  a as n,
  i as o,
  b as c,
  e as d,
  f as p,
  w as l,
  g as s,
  h as u,
  E as m
} from "./vendor.d4ff2420.js"
!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)")
  } catch (r) {
    const i = new URL(e, location),
      a = e => {
        URL.revokeObjectURL(e.src), e.remove()
      }
    ;(self[t] = e =>
      new Promise((r, n) => {
        const o = new URL(e, i)
        if (self[t].moduleMap[o]) return r(self[t].moduleMap[o])
        const c = new Blob(
            [`import * as m from '${o}';`, `${t}.moduleMap['${o}']=m;`],
            { type: "text/javascript" }
          ),
          d = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(c),
            onerror() {
              n(new Error(`Failed to import: ${e}`)), a(d)
            },
            onload() {
              r(self[t].moduleMap[o]), a(d)
            }
          })
        document.head.appendChild(d)
      })),
      (self[t].moduleMap = {})
  }
})("/assets/")
var h = e({ name: "App", setup: () => () => t(r, null, null) }),
  f = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: {
      map: {
        route: "/directions/v5/mapbox/cycling/",
        pos: "/geocoding/v5/mapbox.places/"
      }
    }
  })
const g = {},
  _ = { "./modules/map.ts": f }
Object.keys(_).forEach(e => {
  const t = _[e]
  Object.assign(g, t.default || t)
})
const y = e =>
    new Proxy(e, {
      get: (e, t) =>
        (e => "[object Object]" === Object.prototype.toString.call(e))(e[t])
          ? y(e[t])
          : e[t],
      set: (e, t, r) => (console.log("不能对[" + t.toString() + "]赋值."), !0)
    }),
  k = y(g)
let v
window.api = k
const T = {}
var b = e({
    props: { item: { type: Object, default: () => {} } },
    setup: e => () =>
      t(i, null, [
        t(
          a("el-submenu"),
          { style: "width: 200px", index: e.item.id.toString() },
          {
            default: () => [
              e.item.children &&
                e.item.children.map(e =>
                  t(
                    a("el-menu-item"),
                    { index: e.id.toString() },
                    { default: () => [e.name] }
                  )
                )
            ],
            title: () => e.item.name
          }
        )
      ])
  }),
  M = [
    {
      appId: 2,
      checked: !1,
      children: null,
      code: "index",
      createTime: "2020-12-17 10:29:34",
      danger: !1,
      icon: "",
      id: 734,
      level: 1,
      name: "首页",
      order: 65,
      path: "",
      pid: 0,
      remark: "首页",
      type: "MENU",
      updateTime: "2020-12-17 10:33:38"
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "estimate_long_period_task",
          createTime: "2021-04-30 09:38:38",
          danger: !1,
          icon: "",
          id: 8440,
          level: 2,
          name: "长周期预估",
          order: 0,
          path: "EstimateLongPeriodTask",
          pid: 8439,
          remark: "预估呈现",
          type: "MENU",
          updateTime: "2021-07-08 11:03:24"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_kpi_monthPredictTabs",
          createTime: "2020-12-18 11:36:32",
          danger: !1,
          icon: "",
          id: 793,
          level: 2,
          name: "月度预估",
          order: 1,
          path: "operateApplyMoney",
          pid: 8439,
          remark: "预估呈现",
          type: "MENU",
          updateTime: "2021-07-08 16:06:09"
        }
      ],
      code: "predict",
      createTime: "2021-04-30 09:36:13",
      danger: !1,
      icon: "iconpingtaizonglancopy",
      id: 8439,
      level: 1,
      name: "预估",
      order: 70,
      path: "",
      pid: 0,
      remark: "预估呈现",
      type: "MENU",
      updateTime: "2021-07-08 14:20:36",
      remarkList: ["预估呈现"]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_activity_center_actList",
          createTime: "2020-12-18 10:49:56",
          danger: !1,
          icon: "",
          id: 752,
          level: 2,
          name: "2C活动中心",
          order: 1,
          path: "actList",
          pid: 12081,
          remark: "2C活动",
          type: "MENU",
          updateTime: "2021-07-08 11:35:01"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "tc_act_list",
          createTime: "2021-04-26 13:47:26",
          danger: !1,
          icon: "",
          id: 8422,
          level: 2,
          name: "2C活动统筹",
          order: 2,
          path: "tcActList",
          pid: 12081,
          remark: "2C活动",
          type: "MENU",
          updateTime: "2021-07-08 11:33:50"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "act_settings",
          createTime: "2021-06-21 10:27:26",
          danger: !1,
          icon: "",
          id: 10162,
          level: 2,
          name: "2C活动配置",
          order: 3,
          path: "wordsSettings",
          pid: 12081,
          remark: "2C活动",
          type: "MENU",
          updateTime: "2021-07-08 11:35:09"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_act_estimate_2BEstimateTask",
          createTime: "2020-12-18 11:23:21",
          danger: !1,
          icon: "",
          id: 773,
          level: 2,
          name: "2B活动中心",
          order: 4,
          path: "2BEstimateTask",
          pid: 12081,
          remark: "2B活动",
          type: "MENU",
          updateTime: "2021-07-08 11:35:25"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_act_estimate_2BEstimateOperation",
          createTime: "2020-12-18 11:22:58",
          danger: !1,
          icon: "",
          id: 772,
          level: 2,
          name: "2B活动统筹",
          order: 5,
          path: "2BEstimateOperation",
          pid: 12081,
          remark: "2B活动",
          type: "MENU",
          updateTime: "2021-07-08 11:35:42"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "prepack_Plan_tab",
          createTime: "2021-07-29 09:56:44",
          danger: !1,
          icon: "",
          id: 14287,
          level: 2,
          name: "预包计划",
          order: 6,
          path: "prepackPlanTab",
          pid: 12081,
          remark: "活动预包",
          type: "MENU",
          updateTime: "2021-08-06 09:24:46"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "uppack_plan_tab",
          createTime: "2021-07-21 13:32:00",
          danger: !1,
          icon: "",
          id: 13082,
          level: 2,
          name: "拆包计划",
          order: 7,
          path: "uppackPlanTab",
          pid: 12081,
          remark: "活动预包",
          type: "MENU",
          updateTime: "2021-07-21 13:32:00"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "prepack_inventory",
          createTime: "2021-09-02 14:05:37",
          danger: !1,
          icon: "",
          id: 16794,
          level: 2,
          name: "预包库存",
          order: 8,
          path: "prepackInventory",
          pid: 12081,
          remark: "活动预包",
          type: "MENU",
          updateTime: "2021-09-02 14:05:37"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "prepack_set_menu",
          createTime: "2021-07-19 16:08:55",
          danger: !1,
          icon: "",
          id: 12551,
          level: 2,
          name: "预包配置",
          order: 9,
          path: "prepackSetMenu",
          pid: 12081,
          remark: "活动预包",
          type: "MENU",
          updateTime: "2021-07-19 16:08:55"
        }
      ],
      code: "activity",
      createTime: "2021-07-08 10:54:11",
      danger: !1,
      icon: "iconhuodong",
      id: 12081,
      level: 1,
      name: "活动",
      order: 71,
      path: "",
      pid: 0,
      remark: "2C活动,2B活动,活动预包",
      type: "MENU",
      updateTime: "2021-07-19 16:07:59",
      remarkList: ["2C活动", "2B活动", "活动预包"]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_prepackaged_plan",
          createTime: "2020-12-18 11:28:34",
          danger: !1,
          icon: "",
          id: 777,
          level: 2,
          name: "预包计划",
          order: 0,
          path: "prepackagedPlan",
          pid: 742,
          remark: "",
          type: "MENU",
          updateTime: "2021-07-08 11:19:16"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_activity_purchase",
          createTime: "2020-12-18 10:54:45",
          danger: !1,
          icon: "",
          id: 757,
          level: 2,
          name: "选品分仓设置",
          order: 1,
          path: "purchase",
          pid: 742,
          remark: "",
          type: "MENU",
          updateTime: "2021-07-08 11:23:16"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_daily_goods_reserve",
          createTime: "2020-12-18 11:27:33",
          danger: !1,
          icon: "",
          id: 776,
          level: 2,
          name: "日常商品预留",
          order: 1,
          path: "dailyGoodsReserve",
          pid: 742,
          remark: "",
          type: "MENU",
          updateTime: "2020-12-18 11:27:33"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_automatic_setting",
          createTime: "2020-12-18 11:29:20",
          danger: !1,
          icon: "",
          id: 778,
          level: 2,
          name: "预打包配置",
          order: 3,
          path: "automaticSetTab",
          pid: 742,
          remark: "",
          type: "MENU",
          updateTime: "2021-07-28 11:35:01"
        }
      ],
      code: "prepack",
      createTime: "2020-12-18 10:41:37",
      danger: !1,
      icon: "iconpack",
      id: 742,
      level: 1,
      name: "预包",
      order: 75,
      path: "",
      pid: 0,
      remark: "",
      type: "MENU",
      updateTime: "2021-07-08 11:17:22",
      remarkList: [""]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "qc_shop_info_set",
          createTime: "2021-06-08 10:38:45",
          danger: !1,
          icon: "",
          id: 10060,
          level: 2,
          name: "质检店铺建档",
          order: 0,
          path: "qcShopInfoSet",
          pid: 743,
          remark: "配置",
          type: "MENU",
          updateTime: "2021-07-08 11:41:13"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "qc_ad_ban_words",
          createTime: "2021-07-08 13:58:51",
          danger: !1,
          icon: "",
          id: 12098,
          level: 2,
          name: "广告法违禁词",
          order: 1,
          path: "adLawBanWordTab",
          pid: 743,
          remark: "配置",
          type: "MENU",
          updateTime: "2021-07-08 16:04:48"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "ad_law_list",
          createTime: "2021-04-26 12:16:18",
          danger: !1,
          icon: "",
          id: 8420,
          level: 2,
          name: "天猫日常质检",
          order: 2,
          path: "qcTmallDailyMenu",
          pid: 743,
          remark: "天猫",
          type: "MENU",
          updateTime: "2021-09-10 16:08:31"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "tmall_big_sale_menu",
          createTime: "2021-09-10 09:18:20",
          danger: !1,
          icon: "",
          id: 16966,
          level: 2,
          name: "天猫大促质检",
          order: 13,
          path: "qcTmallBigSaleMenu",
          pid: 743,
          remark: "天猫",
          type: "MENU",
          updateTime: "2021-09-14 17:52:39"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "qc_tiktok_daily",
          createTime: "2021-07-08 16:03:44",
          danger: !1,
          icon: "",
          id: 12112,
          level: 2,
          name: "抖音日常质检",
          order: 14,
          path: "tikTokDailyMenu",
          pid: 743,
          remark: "抖音",
          type: "MENU",
          updateTime: "2021-07-12 15:04:40"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_activity_priceMonitor",
          createTime: "2020-12-18 11:23:45",
          danger: !1,
          icon: "",
          id: 774,
          level: 2,
          name: "底价监控",
          order: 15,
          path: "priceMonitor",
          pid: 743,
          remark: "猫超",
          type: "MENU",
          updateTime: "2020-12-18 11:23:45"
        }
      ],
      code: "qc",
      createTime: "2020-12-18 10:42:27",
      danger: !1,
      icon: "iconfont iconquality",
      id: 743,
      level: 1,
      name: "质检",
      order: 76,
      path: "",
      pid: 0,
      remark: "配置，天猫，抖音，猫超",
      type: "MENU",
      updateTime: "2021-07-08 14:34:50",
      remarkList: ["配置", "天猫", "抖音", "猫超"]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_activity_predictiveCheck_predictiveCheckTabs",
          createTime: "2020-12-18 11:10:58",
          danger: !1,
          icon: "",
          id: 765,
          level: 2,
          name: "预估校验",
          order: 0,
          path: "predictiveCheckTabs",
          pid: 12082,
          remark: "活动监控",
          type: "MENU",
          updateTime: "2020-12-18 11:10:58"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_activity_prepack_prepackTabs",
          createTime: "2020-12-18 11:20:41",
          danger: !1,
          icon: "",
          id: 768,
          level: 2,
          name: "预包监控",
          order: 1,
          path: "prepackTabs",
          pid: 12082,
          remark: "预包监控",
          type: "MENU",
          updateTime: "2020-12-18 11:20:41"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "prepack_monitor_menu",
          createTime: "2021-08-23 14:26:15",
          danger: !1,
          icon: "",
          id: 15964,
          level: 2,
          name: "新预包监控",
          order: 2,
          path: "prepackMonitorMenu",
          pid: 12082,
          remark: "预包监控",
          type: "MENU",
          updateTime: "2021-08-23 14:26:15"
        }
      ],
      code: "monitor",
      createTime: "2021-07-08 10:55:40",
      danger: !1,
      icon: "iconxitong6",
      id: 12082,
      level: 1,
      name: "监控",
      order: 77,
      path: "",
      pid: 0,
      remark: "活动监控，预包监控",
      type: "MENU",
      updateTime: "2021-07-08 16:30:46",
      remarkList: ["活动监控", "预包监控"]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "ep_op_log",
          createTime: "2021-06-29 11:31:17",
          danger: !1,
          icon: "",
          id: 10286,
          level: 2,
          name: "运营日志",
          order: 0,
          path: "opLog",
          pid: 10285,
          remark: "",
          type: "MENU",
          updateTime: "2021-06-29 11:31:38"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_kpi_orderPredictAccuracy",
          createTime: "2020-12-18 11:37:29",
          danger: !1,
          icon: "",
          id: 795,
          level: 2,
          name: "预估准确率",
          order: 1,
          path: "orderPredictAccuracy",
          pid: 10285,
          remark: "",
          type: "MENU",
          updateTime: "2020-12-18 11:37:29"
        }
      ],
      code: "ep_review",
      createTime: "2021-06-29 11:30:57",
      danger: !1,
      icon: "iconxitong1",
      id: 10285,
      level: 1,
      name: "复盘",
      order: 78,
      path: "",
      pid: 0,
      remark: "",
      type: "MENU",
      updateTime: "2021-07-08 16:31:52",
      remarkList: [""]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "home_page_setting",
          createTime: "2021-06-30 10:32:53",
          danger: !1,
          icon: "",
          id: 10307,
          level: 2,
          name: "首页配置",
          order: 0,
          path: "homePageSetting",
          pid: 9886,
          remark: "",
          type: "MENU",
          updateTime: "2021-06-30 10:32:53"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "alert_setting",
          createTime: "2021-05-17 16:56:12",
          danger: !1,
          icon: "",
          id: 8917,
          level: 2,
          name: "预警配置",
          order: 1,
          path: "alertSetting",
          pid: 9886,
          remark: "",
          type: "MENU",
          updateTime: "2021-05-17 16:56:12"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "log_options",
          createTime: "2021-05-31 14:06:59",
          danger: !1,
          icon: "",
          id: 9887,
          level: 2,
          name: "日志配置",
          order: 1,
          path: "opLogOptions",
          pid: 9886,
          remark: "",
          type: "MENU",
          updateTime: "2021-05-31 14:06:59"
        }
      ],
      code: "operation_log",
      createTime: "2021-05-31 14:05:44",
      danger: !1,
      icon: "iconxitong",
      id: 9886,
      level: 1,
      name: "系统",
      order: 84,
      path: "",
      pid: 0,
      remark: "",
      type: "MENU",
      updateTime: "2021-07-08 14:37:27",
      remarkList: [""]
    },
    {
      appId: 2,
      checked: !1,
      children: [
        {
          appId: 2,
          checked: !1,
          children: [
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_overall_set",
              createTime: "2020-12-18 11:31:12",
              danger: !1,
              icon: "",
              id: 781,
              level: 3,
              name: "质检详情设置",
              order: 0,
              path: "overallSet",
              pid: 780,
              remark: "",
              type: "MENU",
              updateTime: "2020-12-18 11:31:12"
            },
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_common_progress",
              createTime: "2020-12-18 11:31:35",
              danger: !1,
              icon: "",
              id: 782,
              level: 3,
              name: "报名进度查看",
              order: 1,
              path: "overallProgress",
              pid: 780,
              remark: "",
              type: "MENU",
              updateTime: "2021-01-14 11:21:49"
            },
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_overall_whitelist",
              createTime: "2020-12-18 11:31:56",
              danger: !1,
              icon: "",
              id: 783,
              level: 3,
              name: "白名单管理",
              order: 2,
              path: "overallWhitelist",
              pid: 780,
              remark: "",
              type: "MENU",
              updateTime: "2021-01-14 11:22:00"
            },
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_overall_result",
              createTime: "2021-01-14 17:52:21",
              danger: !1,
              icon: "",
              id: 2321,
              level: 3,
              name: "质检结果查看",
              order: 3,
              path: "overallResult",
              pid: 780,
              remark: "",
              type: "MENU",
              updateTime: "2021-01-14 17:52:21"
            }
          ],
          code: "dic_overall",
          createTime: "2020-12-18 11:30:47",
          danger: !1,
          icon: "",
          id: 780,
          level: 2,
          name: "统筹大促质检",
          order: 0,
          path: "",
          pid: 12083,
          remark: "质检管理",
          type: "MENU",
          updateTime: "2020-12-18 11:30:47"
        },
        {
          appId: 2,
          checked: !1,
          children: [
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_daily_result",
              createTime: "2020-12-18 11:33:29",
              danger: !1,
              icon: "",
              id: 786,
              level: 3,
              name: "日常质检",
              order: 0,
              path: "dailyResult",
              pid: 785,
              remark: "",
              type: "MENU",
              updateTime: "2020-12-18 11:33:29"
            },
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_daily_common",
              createTime: "2020-12-18 11:33:52",
              danger: !1,
              icon: "",
              id: 787,
              level: 3,
              name: "聚划算/淘抢购",
              order: 1,
              path: "dailyCommon",
              pid: 785,
              remark: "",
              type: "MENU",
              updateTime: "2020-12-18 11:33:52"
            },
            {
              appId: 2,
              checked: !1,
              children: null,
              code: "dic_daily_promotion",
              createTime: "2020-12-18 11:34:19",
              danger: !1,
              icon: "",
              id: 788,
              level: 3,
              name: "非统筹官方活动",
              order: 2,
              path: "dailyPromotion",
              pid: 785,
              remark: "",
              type: "MENU",
              updateTime: "2020-12-18 11:34:19"
            }
          ],
          code: "dic_daily",
          createTime: "2020-12-18 11:33:01",
          danger: !1,
          icon: "",
          id: 785,
          level: 2,
          name: "店铺日常质检",
          order: 1,
          path: "",
          pid: 12083,
          remark: "质检管理",
          type: "MENU",
          updateTime: "2020-12-18 11:33:01"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "qc_log",
          createTime: "2021-01-22 14:58:59",
          danger: !1,
          icon: "",
          id: 3117,
          level: 2,
          name: "日志统计",
          order: 2,
          path: "qcLog",
          pid: 12083,
          remark: "质检管理",
          type: "MENU",
          updateTime: "2021-01-22 14:58:59"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_kpi_orderFacilityScale",
          createTime: "2020-12-18 11:37:01",
          danger: !1,
          icon: "",
          id: 794,
          level: 2,
          name: "订单分仓比设置",
          order: 3,
          path: "orderFacilityScale",
          pid: 12083,
          remark: "系统设置",
          type: "MENU",
          updateTime: "2021-07-15 19:45:41"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "strategic_kpi_salePredictTabsMonthlyPredict",
          createTime: "2020-12-18 11:36:11",
          danger: !1,
          icon: "",
          id: 792,
          level: 2,
          name: "销售/请款预估查看",
          order: 4,
          path: "salePredictTabsMonthlyPredict",
          pid: 12083,
          remark: "KPI管理",
          type: "MENU",
          updateTime: "2020-12-18 11:36:11"
        },
        {
          appId: 2,
          checked: !1,
          children: null,
          code: "kpi_monthPredict",
          createTime: "2021-07-08 15:47:43",
          danger: !1,
          icon: "",
          id: 12111,
          level: 2,
          name: "月度目标预估",
          order: 5,
          path: "monthPredictTabs",
          pid: 12083,
          remark: "KPI管理",
          type: "MENU",
          updateTime: "2021-07-08 16:02:00"
        }
      ],
      code: "old_version",
      createTime: "2021-07-08 11:01:53",
      danger: !1,
      icon: "icongongneng",
      id: 12083,
      level: 1,
      name: "旧版",
      order: 85,
      path: "",
      pid: 0,
      remark: "质检管理，KPI管理，系统设置",
      type: "MENU",
      updateTime: "2021-07-08 16:33:14",
      remarkList: ["质检管理", "系统设置", "KPI管理"]
    }
  ]
var E = e({
  setup() {
    const e = n(M[2].id)
    console.log(e.value)
    const r = (e, t) => {
      console.log(e, t)
    }
    return () => {
      let e
      return t(i, null, [
        t(
          a("el-menu"),
          {
            backgroundColor: "#304156",
            "text-color": "#bfcbd9",
            "unique-opened": !0,
            "active-text-color": "#409EFF",
            "collapse-transition": !0,
            mode: "vertical",
            onSelect: r
          },
          ((n = e = M.map(e => t(b, { item: e }, null))),
          "function" == typeof n ||
          ("[object Object]" === Object.prototype.toString.call(n) && !o(n))
            ? e
            : { default: () => [e] })
        )
      ])
      var n
    }
  }
})
const I = [
    {
      path: "/",
      redirect: "/dashboard",
      component: e({
        name: "App",
        props: { msg: { type: String, default: "" } },
        setup: (e, n) => () =>
          t(i, null, [
            t(a("el-container"), null, {
              default: () => [
                t(
                  a("el-aside"),
                  { width: "auto" },
                  { default: () => [t(E, null, null)] }
                ),
                t(
                  a("el-container"),
                  { style: "height: 100%; position: relative" },
                  {
                    default: () => [
                      t(a("el-main"), null, {
                        default: () => [t(r, null, null)]
                      })
                    ]
                  }
                )
              ]
            })
          ])
      }),
      children: [
        {
          path: "dashboard",
          component: () =>
            (function (e, t) {
              if (!t) return e()
              if (void 0 === v) {
                const e = document.createElement("link").relList
                v =
                  e && e.supports && e.supports("modulepreload")
                    ? "modulepreload"
                    : "preload"
              }
              return Promise.all(
                t.map(e => {
                  if (e in T) return
                  T[e] = !0
                  const t = e.endsWith(".css"),
                    r = t ? '[rel="stylesheet"]' : ""
                  if (document.querySelector(`link[href="${e}"]${r}`)) return
                  const i = document.createElement("link")
                  return (
                    (i.rel = t ? "stylesheet" : v),
                    t || ((i.as = "script"), (i.crossOrigin = "")),
                    (i.href = e),
                    document.head.appendChild(i),
                    t
                      ? new Promise((e, t) => {
                          i.addEventListener("load", e),
                            i.addEventListener("error", t)
                        })
                      : void 0
                  )
                })
              ).then(() => e())
            })(
              () => __import__("./index.4ef2c626.js"),
              [
                "/assets/index.4ef2c626.js",
                "/assets/index.42797d8b.css",
                "/assets/vendor.d4ff2420.js"
              ]
            ),
          name: "dashboard"
        }
      ]
    }
  ],
  U = c({ history: d(), routes: I })
function N(e) {
  return void 0 === e && (e = null), p(null !== e ? e : "store")
}
var w = (
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {}
).__VUE_DEVTOOLS_GLOBAL_HOOK__
function O(e, t) {
  Object.keys(e).forEach(function (r) {
    return t(e[r], r)
  })
}
var C = function (e, t) {
    ;(this.runtime = t),
      (this._children = Object.create(null)),
      (this._rawModule = e)
    var r = e.state
    this.state = ("function" == typeof r ? r() : r) || {}
  },
  j = { namespaced: { configurable: !0 } }
;(j.namespaced.get = function () {
  return !!this._rawModule.namespaced
}),
  (C.prototype.addChild = function (e, t) {
    this._children[e] = t
  }),
  (C.prototype.removeChild = function (e) {
    delete this._children[e]
  }),
  (C.prototype.getChild = function (e) {
    return this._children[e]
  }),
  (C.prototype.hasChild = function (e) {
    return e in this._children
  }),
  (C.prototype.update = function (e) {
    ;(this._rawModule.namespaced = e.namespaced),
      e.actions && (this._rawModule.actions = e.actions),
      e.mutations && (this._rawModule.mutations = e.mutations),
      e.getters && (this._rawModule.getters = e.getters)
  }),
  (C.prototype.forEachChild = function (e) {
    O(this._children, e)
  }),
  (C.prototype.forEachGetter = function (e) {
    this._rawModule.getters && O(this._rawModule.getters, e)
  }),
  (C.prototype.forEachAction = function (e) {
    this._rawModule.actions && O(this._rawModule.actions, e)
  }),
  (C.prototype.forEachMutation = function (e) {
    this._rawModule.mutations && O(this._rawModule.mutations, e)
  }),
  Object.defineProperties(C.prototype, j)
var L = function (e) {
  this.register([], e, !1)
}
function P(e, t, r) {
  if ((t.update(r), r.modules))
    for (var i in r.modules) {
      if (!t.getChild(i)) return
      P(e.concat(i), t.getChild(i), r.modules[i])
    }
}
;(L.prototype.get = function (e) {
  return e.reduce(function (e, t) {
    return e.getChild(t)
  }, this.root)
}),
  (L.prototype.getNamespace = function (e) {
    var t = this.root
    return e.reduce(function (e, r) {
      return e + ((t = t.getChild(r)).namespaced ? r + "/" : "")
    }, "")
  }),
  (L.prototype.update = function (e) {
    P([], this.root, e)
  }),
  (L.prototype.register = function (e, t, r) {
    var i = this
    void 0 === r && (r = !0)
    var a = new C(t, r)
    0 === e.length
      ? (this.root = a)
      : this.get(e.slice(0, -1)).addChild(e[e.length - 1], a)
    t.modules &&
      O(t.modules, function (t, a) {
        i.register(e.concat(a), t, r)
      })
  }),
  (L.prototype.unregister = function (e) {
    var t = this.get(e.slice(0, -1)),
      r = e[e.length - 1],
      i = t.getChild(r)
    i && i.runtime && t.removeChild(r)
  }),
  (L.prototype.isRegistered = function (e) {
    var t = this.get(e.slice(0, -1)),
      r = e[e.length - 1]
    return !!t && t.hasChild(r)
  })
var S = function (e) {
    var t = this
    void 0 === e && (e = {})
    var r = e.plugins
    void 0 === r && (r = [])
    var i = e.strict
    void 0 === i && (i = !1),
      (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new L(e)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null))
    var a = this,
      n = this.dispatch,
      o = this.commit
    ;(this.dispatch = function (e, t) {
      return n.call(a, e, t)
    }),
      (this.commit = function (e, t, r) {
        return o.call(a, e, t, r)
      }),
      (this.strict = i)
    var c = this._modules.root.state
    q(this, c, [], this._modules.root),
      R(this, c),
      r.forEach(function (e) {
        return e(t)
      }),
      (void 0 === e.devtools || e.devtools) &&
        (function (e) {
          w &&
            ((e._devtoolHook = w),
            w.emit("vuex:init", e),
            w.on("vuex:travel-to-state", function (t) {
              e.replaceState(t)
            }),
            e.subscribe(
              function (e, t) {
                w.emit("vuex:mutation", e, t)
              },
              { prepend: !0 }
            ),
            e.subscribeAction(
              function (e, t) {
                w.emit("vuex:action", e, t)
              },
              { prepend: !0 }
            ))
        })(this)
  },
  x = { state: { configurable: !0 } }
function B(e, t, r) {
  return (
    t.indexOf(e) < 0 && (r && r.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e)
      r > -1 && t.splice(r, 1)
    }
  )
}
function G(e, t) {
  ;(e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null))
  var r = e.state
  q(e, r, [], e._modules.root, !0), R(e, r, t)
}
function R(e, t, r) {
  var i = e._state
  ;(e.getters = {}), (e._makeLocalGettersCache = Object.create(null))
  var a = e._wrappedGetters,
    n = {}
  O(a, function (t, r) {
    ;(n[r] = (function (e, t) {
      return function () {
        return e(t)
      }
    })(t, e)),
      Object.defineProperty(e.getters, r, {
        get: function () {
          return n[r]()
        },
        enumerable: !0
      })
  }),
    (e._state = s({ data: t })),
    e.strict &&
      (function (e) {
        l(
          function () {
            return e._state.data
          },
          function () {},
          { deep: !0, flush: "sync" }
        )
      })(e),
    i &&
      r &&
      e._withCommit(function () {
        i.data = null
      })
}
function q(e, t, r, i, a) {
  var n = !r.length,
    o = e._modules.getNamespace(r)
  if (
    (i.namespaced &&
      (e._modulesNamespaceMap[o], (e._modulesNamespaceMap[o] = i)),
    !n && !a)
  ) {
    var c = A(t, r.slice(0, -1)),
      d = r[r.length - 1]
    e._withCommit(function () {
      c[d] = i.state
    })
  }
  var p = (i.context = (function (e, t, r) {
    var i = "" === t,
      a = {
        dispatch: i
          ? e.dispatch
          : function (r, i, a) {
              var n = D(r, i, a),
                o = n.payload,
                c = n.options,
                d = n.type
              return (c && c.root) || (d = t + d), e.dispatch(d, o)
            },
        commit: i
          ? e.commit
          : function (r, i, a) {
              var n = D(r, i, a),
                o = n.payload,
                c = n.options,
                d = n.type
              ;(c && c.root) || (d = t + d), e.commit(d, o, c)
            }
      }
    return (
      Object.defineProperties(a, {
        getters: {
          get: i
            ? function () {
                return e.getters
              }
            : function () {
                return (function (e, t) {
                  if (!e._makeLocalGettersCache[t]) {
                    var r = {},
                      i = t.length
                    Object.keys(e.getters).forEach(function (a) {
                      if (a.slice(0, i) === t) {
                        var n = a.slice(i)
                        Object.defineProperty(r, n, {
                          get: function () {
                            return e.getters[a]
                          },
                          enumerable: !0
                        })
                      }
                    }),
                      (e._makeLocalGettersCache[t] = r)
                  }
                  return e._makeLocalGettersCache[t]
                })(e, t)
              }
        },
        state: {
          get: function () {
            return A(e.state, r)
          }
        }
      }),
      a
    )
  })(e, o, r))
  i.forEachMutation(function (t, r) {
    !(function (e, t, r, i) {
      ;(e._mutations[t] || (e._mutations[t] = [])).push(function (t) {
        r.call(e, i.state, t)
      })
    })(e, o + r, t, p)
  }),
    i.forEachAction(function (t, r) {
      var i = t.root ? r : o + r,
        a = t.handler || t
      !(function (e, t, r, i) {
        ;(e._actions[t] || (e._actions[t] = [])).push(function (t) {
          var a,
            n = r.call(
              e,
              {
                dispatch: i.dispatch,
                commit: i.commit,
                getters: i.getters,
                state: i.state,
                rootGetters: e.getters,
                rootState: e.state
              },
              t
            )
          return (
            ((a = n) && "function" == typeof a.then) ||
              (n = Promise.resolve(n)),
            e._devtoolHook
              ? n.catch(function (t) {
                  throw (e._devtoolHook.emit("vuex:error", t), t)
                })
              : n
          )
        })
      })(e, i, a, p)
    }),
    i.forEachGetter(function (t, r) {
      !(function (e, t, r, i) {
        if (e._wrappedGetters[t]) return
        e._wrappedGetters[t] = function (e) {
          return r(i.state, i.getters, e.state, e.getters)
        }
      })(e, o + r, t, p)
    }),
    i.forEachChild(function (i, n) {
      q(e, t, r.concat(n), i, a)
    })
}
function A(e, t) {
  return t.reduce(function (e, t) {
    return e[t]
  }, e)
}
function D(e, t, r) {
  var i
  return (
    null !== (i = e) &&
      "object" == typeof i &&
      e.type &&
      ((r = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: r }
  )
}
;(S.prototype.install = function (e, t) {
  e.provide(t || "store", this), (e.config.globalProperties.$store = this)
}),
  (x.state.get = function () {
    return this._state.data
  }),
  (x.state.set = function (e) {}),
  (S.prototype.commit = function (e, t, r) {
    var i = this,
      a = D(e, t, r),
      n = a.type,
      o = a.payload,
      c = { type: n, payload: o },
      d = this._mutations[n]
    d &&
      (this._withCommit(function () {
        d.forEach(function (e) {
          e(o)
        })
      }),
      this._subscribers.slice().forEach(function (e) {
        return e(c, i.state)
      }))
  }),
  (S.prototype.dispatch = function (e, t) {
    var r = this,
      i = D(e, t),
      a = i.type,
      n = i.payload,
      o = { type: a, payload: n },
      c = this._actions[a]
    if (c) {
      try {
        this._actionSubscribers
          .slice()
          .filter(function (e) {
            return e.before
          })
          .forEach(function (e) {
            return e.before(o, r.state)
          })
      } catch (p) {}
      var d =
        c.length > 1
          ? Promise.all(
              c.map(function (e) {
                return e(n)
              })
            )
          : c[0](n)
      return new Promise(function (e, t) {
        d.then(
          function (t) {
            try {
              r._actionSubscribers
                .filter(function (e) {
                  return e.after
                })
                .forEach(function (e) {
                  return e.after(o, r.state)
                })
            } catch (p) {}
            e(t)
          },
          function (e) {
            try {
              r._actionSubscribers
                .filter(function (e) {
                  return e.error
                })
                .forEach(function (t) {
                  return t.error(o, r.state, e)
                })
            } catch (p) {}
            t(e)
          }
        )
      })
    }
  }),
  (S.prototype.subscribe = function (e, t) {
    return B(e, this._subscribers, t)
  }),
  (S.prototype.subscribeAction = function (e, t) {
    return B(
      "function" == typeof e ? { before: e } : e,
      this._actionSubscribers,
      t
    )
  }),
  (S.prototype.watch = function (e, t, r) {
    var i = this
    return l(
      function () {
        return e(i.state, i.getters)
      },
      t,
      Object.assign({}, r)
    )
  }),
  (S.prototype.replaceState = function (e) {
    var t = this
    this._withCommit(function () {
      t._state.data = e
    })
  }),
  (S.prototype.registerModule = function (e, t, r) {
    void 0 === r && (r = {}),
      "string" == typeof e && (e = [e]),
      this._modules.register(e, t),
      q(this, this.state, e, this._modules.get(e), r.preserveState),
      R(this, this.state)
  }),
  (S.prototype.unregisterModule = function (e) {
    var t = this
    "string" == typeof e && (e = [e]),
      this._modules.unregister(e),
      this._withCommit(function () {
        delete A(t.state, e.slice(0, -1))[e[e.length - 1]]
      }),
      G(this)
  }),
  (S.prototype.hasModule = function (e) {
    return "string" == typeof e && (e = [e]), this._modules.isRegistered(e)
  }),
  (S.prototype.hotUpdate = function (e) {
    this._modules.update(e), G(this, !0)
  }),
  (S.prototype._withCommit = function (e) {
    var t = this._committing
    ;(this._committing = !0), e(), (this._committing = t)
  }),
  Object.defineProperties(S.prototype, x)
var F = new S({
  state: {
    token:
      "pk.eyJ1IjoiaWVsZWciLCJhIjoiY2t0bDg0a3JnMDR4eDJ3bzVtemVqb2lrMyJ9.B49go6JT4o2VhRsTxz3uSQ",
    center: [120.1988, 30.1879]
  },
  mutations: {},
  actions: {},
  modules: {}
})
const V = u(h)
V.use(m), V.use(U), V.use(F), V.mount("#app")
export { N as u }
