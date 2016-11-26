<template>
  <div style="height: 100%;">
    <!-- HTML 特性不区分大小写。名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case（短横线隔开） -->
    <nv-head page-type="关于"
             :fix-head="true"
             :need-add="true">  <!--动态 Props,每当父组件的数据变化时，就会传导给子组件-->
    </nv-head> <!--父组件向子组件传递prop数据-->
    <dl class="about-info">
      <dt>关于项目</dt>
      <dd>该项目是基于cNode的API，采用vue2.0重些的webapp</dd>
      <dt>源码地址</dt>
      <dd>
        <a href="https://github.com/shinygang/Vue-cnodejs">
        https://github.com/shinygang/Vue-cnodejs</a>
      </dd>
    </dl>
  </div>
</template>

<script>
  import nvHead from '../components/header'
  export default {
    components: {
      nvHead
    }
  }
</script>
