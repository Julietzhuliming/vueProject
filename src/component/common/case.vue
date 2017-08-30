<template>
    <div class="case_content">
        <div v-for="item in ourcase.data">
            <img :src="item.logoUrl"/>
            <div class="img_title">
               <span>{{item.caseTitle}}</span>
               <div class="case_img">
                    <img src="images/red_r_btn.png"/>
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
    mounted: function() {
        this.init();
    },
    methods:{
        init:function(){
            var that = this;
            axios.get('./caseList.json').then(function (response) {
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
    data () {
      return {
            ourcase:{
                data:[
                ]
            }
        }
    }
}
</script>
