<template>
  <section class="swiper_slider">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliders.data">
                <img :src="item.img" width="100%" height="100%" />
                <div class="slide1_content">
                    <h2>{{item.text.title}}</h2>
                    <h3>{{item.text.desc1}}</h3>
                    <span>{{item.text.desc2}}</span>
                    <p>
                        <span>{{item.text.desc3}}</span>
                    </p>
                    <p>
                        <span>累计为<span>4000</span>客户提供<span>201552</span>次城市环保箱广告解决方案</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
            sliders:{
                title:'',
                data:[
                        {
                            img:'images\/banner_01.jpg',
                            text:{
                                title:'城市智能保洁箱广告',
                                desc1:'解决方案领导者',
                                desc2:'创建绿色环保的智慧城市，促进城市环保公益',
                                desc3:'北京、上海、广州、深圳全覆盖',
                                desc4:''
                            }
                        }
                ]
            }
        }
    }
  }
</script>