<template>
    <main>
        <my-header :child-msg="new_header"></my-header>
        <section class="contain_image_head"></section>
        <section class="ourCase product_service">
            <h2>{{product.title}}</h2>
            <h6>{{product.sub_title}}</h6>
            <Menucomponent :child-msg="product.productType"></Menucomponent>
            <Productcomponent ></Productcomponent>
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
                new_header:{
                    'background':'transparent',
                    'color':'#fff',
                },
                product:{
                    title:'产品展示',
                    sub_title:"在一个互联网+时代不断探索数字营销无线可能，立足国际视野之上的创新型营销方式，在瞬息万变中与具有创新精神的客户一同成长",
                    productType:'PRODUCT'
                },
                service:{
                    title:'优势服务',
                    sub_title:"在一个互联网+时代不断探索数字营销无线可能，立足国际视野之上的创新型营销方式，在瞬息万变中与具有创新精神的客户一同成长",
                },
            }
        }
    }
</script>
