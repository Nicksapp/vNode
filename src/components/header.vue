<template lang="html">
  <div class="">
    <div class="page-cover"
         v-if="show && fixHead"
         @click="showMenus">
    </div>
    <header :class="{ 'show': show && fixHead, 'fix-header': fixHead, 'no-fix': !fixHead}" id="hd">
      <div class="nv-toolbar">
        <div class="toolbar-nav"
             @click="openMenu"
             v-if="fixHead">
        </div>
        <span v-text="pageType"></span>
        <i class="num" v-if="messageCount > 0">{{ messageCount }}</i>
        <router-link to="/add">
          <i v-if="needAdd" v-show="!messageCount || messageCount <= 0" class="iconfont add-icon">&#xe60f;</i>
        </router-link>
      </div>
    </header>
    <nv-menu :show-menu="show"
             :page-type="pageType"
             :nick-name="nickname"
             :profile-url="profileimgurl"
             v-if="fixHead"></nv-menu>
  </div>
</template>

<script>
import $ from 'webpack-zepto'
export default {
  replace: true,
  // 使用 Props 传递数据 组件实例的作用域是孤立的。
  // 这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
  // “prop” 是组件数据的一个字段，期望从父组件传下来。子组件需要显式地用 props 选项 声明 props
  props: {
    pageType: String,
    fixHead: Boolean,
    messageCount: Number,
    needAdd: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      nickname: '',
      profileimgurl: '',
      show: false
    }
  },
  methods: {
    openMenu () {
      $('html, body, #page').addClass('scroll-hide')
      this.show = !this.show
    },
    showMenus () {
      this.show = !this.show
      $('html, body, #page').removeClass('scroll-hide')
    }
  },
  components: {
    'nvMenu': require('./menu.vue')
  }
}
</script>
