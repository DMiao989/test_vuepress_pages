import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '丁苗的博客',
  description: '个人学习网站，基于vuePress+gitHub_pages',
  base: '/test_vuepress_pages/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  bundler: viteBundler(),
  theme: defaultTheme({
    // subSidebar: 'auto',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '其他学习账户',
        children: [
          // 外部链接
          { text: 'CSDN', link: 'https://blog.csdn.net/weixin_43143635?type=blog' },
          { text: 'Github', link: 'https://github.com/DMiao989' },
          { text: '掘金', link: 'https://juejin.cn/user/1533173972349197' }
        ]
      }
    ],
    sidebar: [
      {
        text: '首页',
        link: '/',
        collapsable: false, // 不折叠
      },
      {
        text: '发现问题',
        prefix: '/problem/',
        children: [
          'problem.md',
        ],
      },
      {
        text: '学习vue3',
        prefix: '/learn_vue/',
        children: [
          'learn_vuex.md',
          'learn_vue_router.md',
          'learn_export.md'
        ]
      },
      {
        text: '学习git',
        prefix: '/learn_git/',
        children: [
          'learn_git.md',
        ]
      },
      {
        text: '学习vite',
        prefix: '/learn_vite/',
        children: [
          'test_vite_vue3.md',
        ]
      },
    ],
  }),
})