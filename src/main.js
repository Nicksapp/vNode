import Vue from 'vue'
import $ from 'webpack-zepto'
import VueRouter from 'vue-router'
import filters from './filters'
import routes from './routers'
import Alert from './libs/alert'
import store from './vuex/user'
import FastClick from 'fastclick' // FastClick消除点击延时提高程序的运行效率

Vue.use(VueRouter)
Vue.use(Alert)

$.ajaxSettings.crossDomain = true

// 实例化Vue的filter (过滤器)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 实例化VueRouter
// 路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
const router = new VueRouter({
  mode: 'history',
  routes
})
// 实例化 fastclick 在body元素的前面
FastClick.attach(document.body)

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
  store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user))
}

// 使用 router.beforeEach 注册一个全局的 before 钩子
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子,执行效果依赖 next 方法的调用参数。
// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
// next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  // 处理左侧滚动不影响右边
  $('html, body, #page').removeClass('scroll-hide')
  // 在全局导航钩子中检查 meta 字段
  // 一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航钩子中的 route 对象）的 $route.matched 数组
  // this route requires auth, check if logged in
  // if not, redirect to login page.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
