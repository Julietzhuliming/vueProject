<template>
    <div class="case_content">
        <div v-for="item in ourcase.data">
            <img :src="item.logoUrl"/>
            <div class="img_title">
               <span @click="showDetail(item.caseID)">
                   {{item.caseTitle}}
               </span>
               <div class="case_img">
                    <img src="images\/red_r_btn.png" @click="showDetail(item.caseID)"/>
               </div>
            </div>
        </div>
    </div>
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
        this.$root.Bus.$on('changeType', value => {
            this.init(value);
        });
        this.init();
    },
    methods:{
        showDetail(id) {
            console.log("showDetail---->"+id);
            this.$router.push({ path: '/detail', query: {id:id,type:'case'}});
        },
        typeChange:function(typeid){
            console.log('222--->'+typeid);
            this.init(typeid);
        },
        init:function(typeid){
            var that = this;
            if(typeid==undefined){
                typeid = '';
            }
            axios.get('./caseList.json?channel='+that.childMsg+'&keyID='+typeid).then(function (response) {
                console.log(response);
                if(response.data.retCode=='0000'){
                    Vue.set(that.ourcase, 'data', response.data.data);
                    console.log(that.ourcase.data[0]['caseTitle']);
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
    },
    props: {
        childMsg: {
            type: String,
            default: "index"
        }
    },
    data () {
      return {
            ourcase:{
                typeID:'',
                data:[]
            }
        }
    }
}
</script>
