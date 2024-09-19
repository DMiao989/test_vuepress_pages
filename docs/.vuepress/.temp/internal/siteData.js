export const siteData = JSON.parse("{\"base\":\"/test_vuepress_pages/\",\"lang\":\"en-US\",\"title\":\"丁苗的博客\",\"description\":\"个人学习网站，基于vuePress+gitHub_pages\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
