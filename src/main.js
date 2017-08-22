import AppHeader from './component/header.vue';
import AppFooter from './component/footer.vue';
import Home from './component/home.vue';
// import About from './component/about.vue';
// import Product from './component/product.vue';
// import Showcase from './component/showcase.vue';
// import News from './component/news.vue';
// import Contact from './component/contactus.vue';
const routes = [
  { path: '/home', component: Home }
  // { path: '/about', component: About },
  // { path: '/product', component: Product },
  // { path: '/showcase', component: Showcase },
  // { path: '/news', component: News },
  // { path: '/contact', component: Contact }
]

Vue.component('my-header', AppHeader);
Vue.component('my-footer', AppFooter);

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  router
}).$mount('#app')

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