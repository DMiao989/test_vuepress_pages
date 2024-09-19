import{_ as e,c as n,a,o as i}from"./app-DEJ3BKcF.js";const t={};function l(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="vuex中存什么" tabindex="-1"><a class="header-anchor" href="#vuex中存什么"><span>vuex中存什么？</span></a></h1><p>多个组件共享数据，才能存在vuex中。 某个组件中的私有数据，依旧存在data中。 例如:</p><ul><li>登录的用户名 在首页、个人中心、结算页面使用，所以用户名应该存在vuex中；</li><li>文章的详情数据，只有在文章详情页查看，在自身的data中声明。</li></ul><h1 id="安装-vuex-下载" tabindex="-1"><a class="header-anchor" href="#安装-vuex-下载"><span>安装 vuex（下载）</span></a></h1><p>npm install vuex@next --save</p><h1 id="创建-store实例-初始化仓库" tabindex="-1"><a class="header-anchor" href="#创建-store实例-初始化仓库"><span>创建 store实例/初始化仓库</span></a></h1><p>src/store/index.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import {createStore} from &#39;vuex&#39;</span>
<span class="line"></span>
<span class="line">const store = createStore({</span>
<span class="line">    &lt;!-- 状态 --&gt;</span>
<span class="line">    state:{</span>
<span class="line">        </span>
<span class="line">    },</span>
<span class="line">    &lt;!-- 更改状态,更改状态的唯一方法：提交mutations --&gt;</span>
<span class="line">    mutations:{</span>
<span class="line">        </span>
<span class="line">    },</span>
<span class="line">    &lt;!-- 状态的计算属性 --&gt;</span>
<span class="line">    getters:{</span>
<span class="line">        </span>
<span class="line">    },</span>
<span class="line">    &lt;!--  类似于mutations，但是提交的是mutations,而不是直接变更状态 </span>
<span class="line">        传入的参数是，与store实例具有相同方法和属性的context对象，所以调用context.commit()提交一个mutation，或者使用 context.state()和context.getters()获取state和getters。</span>
<span class="line">    --&gt;</span>
<span class="line">    actions:{</span>
<span class="line">        </span>
<span class="line">    },</span>
<span class="line">    &lt;!-- 将store分解成多个模块，每个模块都有 state,mutaitons, getters, actions, modules  --&gt;</span>
<span class="line">    modules:{</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="全局安装store插件-引入-注册" tabindex="-1"><a class="header-anchor" href="#全局安装store插件-引入-注册"><span>全局安装store插件 （引入+注册）</span></a></h1><p>main.ts中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import store from &#39;./store&#39;</span>
<span class="line"></span>
<span class="line">app.use(store)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="如何在vue组件中修改state" tabindex="-1"><a class="header-anchor" href="#如何在vue组件中修改state"><span>如何在vue组件中修改state？</span></a></h1><ul><li>1 引入 useStore 模块 import { useStore } from &#39;vuex&#39;</li><li>2 使用 useStore 函数来访问和操作store const store = useStore()</li><li>3 获取 store中的state store.state. 获取 store中的getters store.getters. 修改 store中的state store.commit(&#39;mutaitons中的方法名称&#39;) 修改 store中的actions store.dispatch(&#39;actions中的方法名称&#39;, playload（可选）) dispatch分发action，这些action通常包含一些异步操作或业务逻辑，然后可能会调用mutations来修改Vuex store的状态。</li></ul><p><strong>注意</strong>：</p><p>需要理解的是：<code>app.use(store)</code>全局注册store，只是将store实例作为插件注册到Vue应用中，使得整个应用都能访问Vuex store；</p><p>全局状态管理：使得任何组件都能使用<code>this.$store</code>或 <code>usestore()</code>函数来访问和操作 Vuex store，从而实现全局管理。</p>`,16)]))}const d=e(t,[["render",l],["__file","learn_vuex.html.vue"]]),p=JSON.parse('{"path":"/learn_vue/learn_vuex.html","title":"vuex中存什么？","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1726724335000,"contributors":[{"name":"Ding Miao","email":"dingmiao@hollysys.com","commits":1}]},"filePathRelative":"learn_vue/learn_vuex.md"}');export{d as comp,p as data};
