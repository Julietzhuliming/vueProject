<template>
    <div class="product_classify flex">
        <div class="product_type" v-for="product in product.productType">
            <span>{{product.productTitle}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                product:{
                    productType:[
                        {productID:"1",productTitle:"商业街道",logoUrl:""},
                        {productID:"2",productTitle:"步行街",logoUrl:""},
                        {productID:"3",productTitle:"广场",logoUrl:""},
                        {productID:"4",productTitle:"飞机场",logoUrl:""},
                        {productID:"5",productTitle:"火车站",logoUrl:""}
                    ]
                }
            }
        }
    }
</script>
