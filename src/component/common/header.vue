<style>
</style>
<template>
  <header v-bind:style="childMsg">
        <nav class="flex">
            <div class="nav_icon flex">
                <img :src="icon"/>
                <span class="icon_font">{{icon_desc}}</span>
            </div>
            <div class="nav_menu flex">
                <router-link to="/home">首页</router-link>
                <router-link to="/aboutus">关于我们</router-link>
                <router-link to="/product">产品与服务</router-link>
                <router-link to="/showcase">案例展示</router-link>
                <router-link to="/newsinfor">新闻动态</router-link>
                <router-link to="/contactus">联系我们</router-link>
            </div>
        </nav>
    </header>
</template>
<script>
  export default {
    props: {
            childMsg: {
                type: Object,
                default: function () {
                    return {
                      background:'#fff',
                      color:'#000',
                    };
                }
            }
    },
    data () {
      return {
        msg:'text',
        icon:'images\/logo_icon.png',
        icon_desc:"维纳斯"
      }
    }
  }
</script>
