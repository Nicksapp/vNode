<template>
<div class="iconfont icon-top" v-show="show" @click="goTop">
  &#xe611;</div>
</template>
<script>
import $ from 'webpack-zepto'
export default {
  replace: true,
  data () {
    return {
      show: false,
      timer: ''
    }
  },
  mounted () {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 100) {
        this.show = true
      } else {
        this.show = false
      }
    })
  },
  beforeDestory () {
    $(window).off('scroll')
  },
  methods: {
    goTop () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        const now = document.body.scrollTop || document.documentElement.scrollTop
        if (now === 0) {
          clearInterval(this.timer)
          return
        }
        const speed = Math.floor(-now / 10)
        document.body.scrollTop = document.documentElement.scrollTop = now + speed
      }, 15)
      this.show = false
    }
  }
}
</script>
<style lang="scss">
.icon-top {
  position: fixed;
  right: 10px;
  bottom: 80px;
  font-size: 50px;
  z-index: 9999;
  color: #42b983;
}
</style>
