import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vue_router.html.vue"
const data = JSON.parse("{\"path\":\"/learn_vue_router.html\",\"title\":\"vue—router 能干什么？\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"learn_vue_router.md\"}")
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
