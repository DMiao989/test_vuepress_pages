import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vue/learn_vuex.html.vue"
const data = JSON.parse("{\"path\":\"/learn_vue/learn_vuex.html\",\"title\":\"vuex中存什么？\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726724335000,\"contributors\":[{\"name\":\"Ding Miao\",\"email\":\"dingmiao@hollysys.com\",\"commits\":1}]},\"filePathRelative\":\"learn_vue/learn_vuex.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
