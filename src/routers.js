// 路由懒加载
// ->当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
// 我们要做的就是把路由对应的组件定义成异步组件
// 结合 Vue 的 异步组件 和 Webpack 的 code splitting feature, 轻松实现路由组件的懒加载。
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'))
  })
}

const List = resolve => {
  require.ensure(['./views/list.vue'], () => {
    resolve(require('./views/list.vue'))
  })
}

const routers = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/cnodevue',
  name: 'cnodevue',
  component: Home
}, {
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/topic/:id',
  name: 'topic',
  component (resolve) {
    require.ensure(['./views/topic.vue'], () => {
      resolve(require('./views/topic.vue'))
    })
  }
}, {
  path: '/add',
  name: 'add',
  component (resolve) {
    require.ensure(['./views/new.vue'], () => {
      resolve(require('./views/new.vue'))
    })
  },
  meta: {
    requiresAuth: true
  }
}, {
  path: '/message',
  name: 'message',
  component (resolve) {
    require.ensure(['./views/message.vue'], () => {
      resolve(require('./views/message.vue'))
    })
  },
  meta: {
    requiresAuth: true
  }
}, {
  path: '/user/:loginname',
  name: 'user',
  component (resolve) {
    require.ensure(['./views/user.vue'], () => {
      resolve(require('./views/user.vue'))
    })
  }
}, {
  path: '/about',
  name: 'about',
  component (resolve) {
    require.ensure(['./views/about.vue'], () => {
      resolve(require('./views/about.vue'))
    })
  }
}, {
  path: '/login',
  name: 'login',
  component (resolve) {
    require.ensure(['./views/login.vue'], () => {
      resolve(require('./views/login.vue'))
    })
  }
}, {
  path: '*',
  component: Home
}]

export default routers
