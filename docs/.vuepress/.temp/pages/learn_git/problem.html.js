import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_git/problem.html.vue"
const data = JSON.parse("{\"path\":\"/learn_git/problem.html\",\"title\":\"搭建博客出现的问题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"问题1\",\"slug\":\"问题1\",\"link\":\"#问题1\",\"children\":[{\"level\":3,\"title\":\"解决方法：\",\"slug\":\"解决方法\",\"link\":\"#解决方法\",\"children\":[]}]},{\"level\":2,\"title\":\"问题2：\",\"slug\":\"问题2\",\"link\":\"#问题2\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"learn_git/problem.md\"}")
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
