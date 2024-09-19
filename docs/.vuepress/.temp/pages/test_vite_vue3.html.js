import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/test_vite_vue3.html.vue"
const data = JSON.parse("{\"path\":\"/test_vite_vue3.html\",\"title\":\"vite + vue3 项目环境搭建\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vite\",\"slug\":\"vite\",\"link\":\"#vite\",\"children\":[]},{\"level\":2,\"title\":\"什么是Vite\",\"slug\":\"什么是vite\",\"link\":\"#什么是vite\",\"children\":[]},{\"level\":2,\"title\":\"1、创建vite3项目\",\"slug\":\"_1、创建vite3项目\",\"link\":\"#_1、创建vite3项目\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"test_vite_vue3.md\"}")
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
