# vuex中存什么？
多个组件共享数据，才能存在vuex中。
某个组件中的私有数据，依旧存在data中。
例如:
- 登录的用户名 在首页、个人中心、结算页面使用，所以用户名应该存在vuex中；
- 文章的详情数据，只有在文章详情页查看，在自身的data中声明。

# 安装 vuex（下载）
npm install vuex@next --save

# 创建 store实例/初始化仓库
src/store/index.ts
```
import {createStore} from 'vuex'

const store = createStore({
    <!-- 状态 -->
    state:{
        
    },
    <!-- 更改状态,更改状态的唯一方法：提交mutations -->
    mutations:{
        
    },
    <!-- 状态的计算属性 -->
    getters:{
        
    },
    <!--  类似于mutations，但是提交的是mutations,而不是直接变更状态 
        传入的参数是，与store实例具有相同方法和属性的context对象，所以调用context.commit()提交一个mutation，或者使用 context.state()和context.getters()获取state和getters。
    -->
    actions:{
        
    },
    <!-- 将store分解成多个模块，每个模块都有 state,mutaitons, getters, actions, modules  -->
    modules:{
        
    }
    
})
```



# 全局安装store插件 （引入+注册）
main.ts中
```
import store from './store'

app.use(store)
```

# 如何在vue组件中修改state？
- 1 引入 useStore 模块 
    import { useStore } from 'vuex'
- 2 使用 useStore 函数来访问和操作store
    const store = useStore()
- 3 获取 store中的state store.state.
    获取 store中的getters store.getters.
    修改 store中的state store.commit('mutaitons中的方法名称')
    修改 store中的actions store.dispatch('actions中的方法名称', playload（可选）) dispatch分发action，这些action通常包含一些异步操作或业务逻辑，然后可能会调用mutations来修改Vuex store的状态。
    
**注意**：

需要理解的是：`app.use(store)`全局注册store，只是将store实例作为插件注册到Vue应用中，使得整个应用都能访问Vuex store；

全局状态管理：使得任何组件都能使用`this.$store`或 `usestore()`函数来访问和操作 Vuex store，从而实现全局管理。

