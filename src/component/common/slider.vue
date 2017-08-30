<template>
  <section class="swiper_slider">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliders.data">
                <img :src="item.accessUrl" width="100%" height="100%"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
export default {
    mounted: function() {
        this.init();
        this.swiperFun();        
    },
    methods:{
        init:function(){
            var that = this;
            axios.get('./showBanner.json').then(function (response) {
                console.log(response);
                if(response.data.retCode=='0000'){
                    Vue.set(that.sliders, 'data', response.data.data);
                    console.log(that.sliders.data[0]['accessUrl']);
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
        swiperFun:function(){
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 5000,//可选选项，自动滑动
                direction: 'horizontal',
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            });
        },
    },
    data () {
        return {
            sliders:{
                data:[
                    {
                        // accessUrl:'images/banner_01.jpg'
                    }
                ]
            },
        }
    }
}
</script>