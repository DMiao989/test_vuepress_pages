import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vite/test_vite_vue3.html.vue"
const data = JSON.parse("{\"path\":\"/learn_vite/test_vite_vue3.html\",\"title\":\"vite + vue3 项目环境搭建\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"什么是Vite\",\"slug\":\"什么是vite\",\"link\":\"#什么是vite\",\"children\":[]},{\"level\":2,\"title\":\"创建vite3项目\",\"slug\":\"创建vite3项目\",\"link\":\"#创建vite3项目\",\"children\":[]}],\"git\":{\"updatedTime\":1726724335000,\"contributors\":[{\"name\":\"Ding Miao\",\"email\":\"dingmiao@hollysys.com\",\"commits\":1}]},\"filePathRelative\":\"learn_vite/test_vite_vue3.md\"}")
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
