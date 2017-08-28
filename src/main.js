import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from './component/common/header.vue';
import BMapComponent from './component/common/BMapComponent.vue';
import AppFooter from './component/common/footer.vue';
import Slider from './component/common/slider.vue';
import Service from './component/common/service.vue';
import Case from './component/common/case.vue';
import About from './component/common/about.vue';
import Menu from './component/common/menu.vue';
import HomePage from './component/home_page.vue';
import AboutUs from './component/about_us.vue';
import ProductService from './component/product_service.vue';
import ShowCase from './component/show_case.vue';
import NewsInfor from './component/news_infor.vue';
import ContactUs from './component/contact_us.vue';


import axios from 'axios'
Vue.prototype.$http = axios
require("./lib/swiper/swiper.min.js");
require("./lib/swiper/swiper.min.css");
require("./css/index.css");


Vue.use(VueRouter); 
// 公共组件
Vue.component('b-map-component', BMapComponent);
Vue.component('my-header', AppHeader);
Vue.component('my-footer', AppFooter);
Vue.component('Servicecomponent', Service);
Vue.component('Casecomponent', Case);
Vue.component('Slidercomponent', Slider);
Vue.component('Aboutcomponent', About);
Vue.component('Menucomponent', Menu);

const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/aboutus', component: AboutUs },
  { path: '/product', component: ProductService },
  { path: '/showcase', component: ShowCase },
  { path: '/newsinfor', component: NewsInfor },
  { path: '/contactus', component: ContactUs }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
const app = new Vue({
  el: '#app',
  data: {
    gridData: "",
  },
  mounted: function() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
      });
    // axios.get('/api2/movie/us_box', {params: {city: '深圳'}}).then(function (res) {
    //             console.log('rateResult:')
    //             console.log(res)
    //             let arr = res.data.subjects
    //         }).catch(function (res) {
    //             console.log('wrong:')
    //             console.log(res)
    //         })

  },
  router
}).$mount('#app');

// window.onload = function(){
//     var mySwiper = new Swiper('.swiper-container', {
//         autoplay: 5000,//可选选项，自动滑动
//         direction: 'horizontal',
//         loop: true,
//         // 如果需要分页器
//         pagination: '.swiper-pagination',
//         // 如果需要前进后退按钮
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         // 如果需要滚动条
//         // scrollbar: '.swiper-scrollbar',
//     })
// };