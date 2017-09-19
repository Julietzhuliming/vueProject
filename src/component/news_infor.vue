<template>
    <main class="news_infor">
        <my-header></my-header>
        <section class="news_banner_bg bg">
        </section>
        <section class="news_infomation">
            <Menucomponent :child-msg="newsData.newsType"></Menucomponent>
            <div class="newsinfor_box" v-for="item in newsData.newsList" >
                <div class="img_content" @click="showDetail(item.newsID)">
                    <img :src="item.logoUrl" width="240" height="160"/>
                </div>
                <div class="news_content" @click="showDetail(item.newsID)">
                    <div class="news_title">{{item.newsTitle}}</div>
                    <p class="news_desc">{{item.summary}}</p>
                </div>
                <div class="month_day">{{item.time.substring(5,10)}}</div>
                <div class="year">{{item.time.substring(0,4)}}</div>
                <div class="next_img" @click="showDetail(item.newsID)">
                    <img src="images\/red_r_btn.png"/>
               </div>
            </div>

            <div class="news_page" >
                <ul class="pagination" >
                    <li v-show="newsData.current != 1" @click="newsData.current-- && goto(newsData.current)" >
                        <a href="javascript:void(0);">上一页</a>
                    </li>
                    <li v-for="index in pages" @click="goto(index)" :class="{'active':newsData.current == index}" :key="index">
                        <a href="javascript:void(0);" >{{index}}</a>
                    </li>
                    <li v-show="newsData.allpage != newsData.current&&newsData.allpage != 0 " @click="newsData.current++ && goto(newsData.current++)">
                        <a href="javascript:void(0);" >下一页</a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
export default {
    created(){
    },
    // 在组件销毁时别忘了解除事件绑定
    beforeDestroy() {
        this.$root.Bus.$off('changeType')
    },
    mounted: function() {
        this.init();
        this.$root.Bus.$on('changeType', value => {
            this.newsData.current =1;
            this.init(value);
        });
    },
    computed:{
          pages:function(){
                var pag = [];
                  if( this.newsData.current < this.newsData.showItem ){ //如果当前的激活的项 小于要显示的条数
                       //总页数和要显示的条数那个大就显示多少条
                       var i = Math.min(this.newsData.showItem,this.newsData.allpage);
                       while(i){
                           pag.unshift(i--);
                       }
                   }else{ //当前页数大于显示页数了
                       var middle = this.newsData.current - Math.floor(this.newsData.showItem / 2 );//从哪里开始
                       i = this.newsData.showItem;
                       if( middle >  (this.newsData.allpage - this.newsData.showItem)  ){
                           middle = (this.newsData.allpage - this.newsData.showItem) + 1 ;
                       }
                       while(i--){
                           pag.push( middle++ );
                       }
                   }
                 return pag;
               }
    },
    methods:{
        showDetail(id) {
            // 事件名字自定义，用不同的名字区别事件
            console.log("showNewsDetail---->"+id);
            this.$router.push({ path: '/detail', query: {id:id, type:'news'}});
        },
        goto:function(index){
            console.log("===>"+index);
            this.newsData.current = index;
            this.init();
        },
        init:function(typeid){
            var that = this;
            if(typeid == undefined){
                typeid = '';
            }
            console.log("typeid======>"+typeid);
            axios.get('./newsList.json?current='+that.newsData.current+'&keyID='+typeid).then(function (response) {
                if(response.data.retCode=='0000'){
                    Vue.set(that.newsData, 'newsList', response.data.data);
                    that.newsData.allpage = response.data.allpage;
                    that.newsData.showItem = response.data.showItem;
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
    },
    data () {
        return {
            type:'news',
            newsData:{
                current:1,//当前的页数
                showItem:'',//显示的 条数
                allpage:'',//总共的页数
                title:' 新闻动态',
                title_en:'News Information',
                newsType:'NEWS',
                newsList:[]
            }
        }
    }
}
</script>
