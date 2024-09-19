import comp from "/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_git/learn_git.html.vue"
const data = JSON.parse("{\"path\":\"/learn_git/learn_git.html\",\"title\":\"推送本地代码到远程仓库的步骤\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726724335000,\"contributors\":[{\"name\":\"Ding Miao\",\"email\":\"dingmiao@hollysys.com\",\"commits\":1}]},\"filePathRelative\":\"learn_git/learn_git.md\"}")
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
