<style>
</style>
<template>
  <header>
        <nav class="flex">
            <div class="nav_menu flex">
                <router-link to="/home">首页</router-link>
                <router-link to="/about">关于我们</router-link>
                <router-link to="/product">产品与服务</router-link>
                <router-link to="/showcase">案例展示</router-link>
                <router-link to="/news">新闻动态</router-link>
                <router-link to="/contact">联系我们</router-link>
            </div>
        </nav>
    </header>
</template>
<script>
  export default {
    data () {
      return {
        msg:'text'
      }
    }
  }
</script>
