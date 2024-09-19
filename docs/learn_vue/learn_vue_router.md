# vue—router 能干什么？
当用户在应用中浏览不同页面时，URL 会随之更新，但页面不需要从服务器重新加载。
可以通过配置路由来告诉 Vue Router 为每个 URL 路径显示哪些组件。

组件 RouterView 和 RouterLink 都是全局注册的，因此它们不需要在组件模板中导入。但你也可以通过局部导入它们，例如 import { RouterLink } from 'vue-router'。

因此 `<RouterView> 和 <router-view>` 通常是等效的。此时应该遵循你自己项目中使用的约定。


以 router 作为路由器实例提及。即由 createRouter() 返回的对象。在应用中，访问该对象的方式取决于上下文。例如，在组合式 API 中，它可以通过调用 useRouter() 来访问。在选项式 API 中，它可以通过 this.$router 来访问。

类似地，当前路由会以 route 被提及。基于不同 API 风格的组件，它可以通过 useRoute() 或 this.$route 来访问。