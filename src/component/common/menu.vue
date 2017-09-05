<template>
    <div class="product_classify flex">
        <div id="product00" :class="'product_type '+(cur_select_id==''?'active':'')"  @click="submit('')"><span :key="">全部</span></div>
        <div :id="'product'+item.id" v-for="item in menuList.data" @click="submit(item.id)" :class="'product_type '+(cur_select_id==item.id?'active':'')" >
            <span :key="item.id" >{{item.keyword}}</span>
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
        submit(id) {
            // 事件名字自定义，用不同的名字区别事件
            this.$root.Bus.$emit('changeType', id);
            console.log("menu---->"+id);
            this.cur_select_id = id;
        },
        init:function(){
            var that = this;
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
            cur_select_id:'',
            menuList:{
                data:[]
            }
        }
    }
}
</script>
