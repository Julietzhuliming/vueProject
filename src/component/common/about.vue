<template>
    <section class="aboutUs" id="home_whoWe">
        <div class="aboutUs_container">
            <div class="img_box">
                <img :src="aboutus.img"/>
            </div>
            <div class="about_box">
                <p class="about_us">about us</p>
                <h2 class="who_we"><span class="we_font">我们</span>是谁</h2>
                <p class="desc_1">{{aboutus.desc1}}</p>
                <p class="desc_2">{{aboutus.desc2}}</p>
                <p class="desc_2">{{aboutus.desc3}}</p>
                <a href="#/aboutus"><span class="more_button">{{aboutus.learn_more}}</span></a>
            </div>
        </div>
    </section>
</template>
<script>
  export default {
    data () {
      return {
        aboutus:{
                learn_more:'了解更多',
                img:'images\/who_we.png',
                desc1:'“致力于城市智能保洁箱广告解决方案，创建绿色环保的智慧城市，促进城市环保公益”',
                desc2:'深圳市维纳斯互动娱乐有限公司成立于2013年6月，是一家从事互联网广告宣传与投放的传媒公司。',
                desc3:'2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。',
            }
      }
    }
  }
</script>


