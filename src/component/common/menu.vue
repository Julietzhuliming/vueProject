<template>
    <div class="product_classify flex">
        <div class="product_type" v-for="item in menuList.data">
            <span>{{item.keyword}}</span>
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
            debugger;
            console.log(that.childMsg);
            axios.get('./channelList.json?channel='+that.childMsg).then(function (response) {
                console.log(response);
                if(response.data.retCode=='0000'){
                    Vue.set(that.menuList, 'data', response.data.data);
                    console.log(response.data.data);
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
    },
    props: {
        childMsg: {
            type: String,
            default: "CASE"
        }
    },
    data () {
      return {
            menuList:{
                data:[
                ]
            }
        }
    }
}
</script>
