export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"页面配置的需求分析"} }],
  ["/learn_vite/test_vite_vue3.html", { loader: () => import(/* webpackChunkName: "learn_vite_test_vite_vue3.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vite/test_vite_vue3.html.js"), meta: {"title":"vite + vue3 项目环境搭建"} }],
  ["/problem/problem.html", { loader: () => import(/* webpackChunkName: "problem_problem.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/problem/problem.html.js"), meta: {"title":"搭建博客出现的问题"} }],
  ["/learn_git/learn_git.html", { loader: () => import(/* webpackChunkName: "learn_git_learn_git.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_git/learn_git.html.js"), meta: {"title":"推送本地代码到远程仓库的步骤"} }],
  ["/learn_vue/learn_export.html", { loader: () => import(/* webpackChunkName: "learn_vue_learn_export.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vue/learn_export.html.js"), meta: {"title":"export 和export default 的区别"} }],
  ["/learn_vue/learn_vue_router.html", { loader: () => import(/* webpackChunkName: "learn_vue_learn_vue_router.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vue/learn_vue_router.html.js"), meta: {"title":"vue—router 能干什么？"} }],
  ["/learn_vue/learn_vuex.html", { loader: () => import(/* webpackChunkName: "learn_vue_learn_vuex.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/learn_vue/learn_vuex.html.js"), meta: {"title":"vuex中存什么？"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/dingmiao/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
