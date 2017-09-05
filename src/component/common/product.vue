<template>
    <div class="case_content product_content">
        <div v-for="item in productList.data">
            <img :src="item.logoUrl"/>
            <div class="img_title flex">
               <span>{{item.productTitle}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
export default {
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
        typeChange:function(typeid){
            console.log('product--->'+typeid);
            this.init(typeid);
        },
        init:function(typeid){
            var that = this;
            if(typeid==undefined){
                typeid = '';
            }
            axios.get('./productList.json?keyID='+typeid).then(function (response) {
                console.log(response);
                if(response.data.retCode=='0000'){
                    Vue.set(that.productList, 'data', response.data.data);
                    console.log(that.productList.data[0]['caseTitle']);
                }
            }).catch(function (response) {
                console.log(response);
            });
        },
    },
    data () {
      return {
            productList:{
                typeID:'',
                data:[]
            }
        }
    }
}
</script>
