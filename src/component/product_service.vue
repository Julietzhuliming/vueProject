<template>
    <main>
        <section class="contain_image_head"></section>
        <section class="ourCase product_service">
            <h2>{{product.title}}</h2>
            <h6>{{product.sub_title}}</h6>
            <Menucomponent></Menucomponent>
            <Casecomponent></Casecomponent>
        </section>
        <section class="service product_service">
                <h2>{{service.title}}</h2>
                <h6>{{service.sub_title}}</h6>
                <Servicecomponent></Servicecomponent>
        </section>
    </main>
</template>
<script>
    export default {
        data () {
            return {
                product:{
                    title:'产品展示',
                    sub_title:"在一个互联网+时代不断探索数字营销无线可能，立足国际视野之上的创新型营销方式，在瞬息万变中与具有创新精神的客户一同成长",
                    productType:[
                        {productID:"1",productTitle:"商业街道",logoUrl:""},
                        {productID:"2",productTitle:"步行街",logoUrl:""},
                        {productID:"3",productTitle:"广场",logoUrl:""},
                        {productID:"4",productTitle:"飞机场",logoUrl:""},
                        {productID:"5",productTitle:"火车站",logoUrl:""}
                    ]
                },
                service:{
                    title:'优势服务',
                    sub_title:"在一个互联网+时代不断探索数字营销无线可能，立足国际视野之上的创新型营销方式，在瞬息万变中与具有创新精神的客户一同成长",
                },
            }
        }
    }
</script>
