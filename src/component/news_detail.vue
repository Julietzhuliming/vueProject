<template>
<main>
    <my-header :child-msg="new_header"></my-header>
	<section class="news_detail_head">
        <h2 class="title">{{new_detail.data.title}}</h2>
        <h6 class="desc">{{new_detail.data.issuedTime}}</h6>
    </section>
	<section class="news_detail_content_class">
        <div v-html="new_detail.data.content"></div>
    </section>
    <div class="return_case_list" v-if="type=='case'">
        <span @click="gobackCaseList()">返回案例列表</span>
    </div>
    <section class="news_detail_footer flex">
        <div class="pre_next_sign">
            <div class="previous" v-if="new_detail.data.previousID!=undefined">
                <img src="images/red_l_btn.png" @click="init(new_detail.data.previousID)"/>
                <span @click="init(new_detail.data.previousID)">{{new_detail.data.previousTitle}}</span>
            </div>
            <div class="next" v-if="new_detail.data.nextID!=undefined">
                <span @click="init(new_detail.data.nextID)">{{new_detail.data.nextTitle}}</span>
                <img @click="init(new_detail.data.nextID)"src="images\/gray_r_btn.png"/>
            </div>
        </div>
    </section>
</main>

</template>

<script>
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
export default {
    ready: function(){
        console.log('------>' + this.$route.query.id);
    },
    // 在组件销毁时别忘了解除事件绑定
    beforeDestroy() {
        this.$root.Bus.$off('showNewsDetail')
    },
    mounted: function() {
        console.log('------>' + this.$route.query.id);
        var id = this.$route.query.id;
        this.type = this.$route.query.type;
        this.init(id);
    },
    methods:{
        gobackCaseList:function(){
            this.$router.push({ path: '/showcase'});
        },
        init:function(id){
            var that = this;
            axios.get('./showDetail.json?id='+id).then(function (response) {
                if(response.status=='200'){
                    Vue.set(that.new_detail, 'data', response.data.data);
                    console.log(response.data.data);
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
    },
    data () {
        return {
            new_header:{
                'background':'#fff',
                'color':'#000',
            },
            new_detail:{
                data:{
                    id:'',
                    title:'',
                    content:'',
                    issuedTime:'',
                    nextID:'',
                    nextTitle:'',
                    previousID:'',
                    previousTitle:''
                }
            }
        }
    }
}
</script>
