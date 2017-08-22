<template>
    <main>
        <section class="contain_image_head">
        </section>
        <section class="ourCase">
            <h2>{{product.title}}</h2>
            <h6>{{product.sub_title}}</h6>
            <div class="product_classify flex">
                <div class="product_type" v-for="product in product.productType">
                    <span>{{product.productTitle}}</span>
                </div>
            </div>
            <div class="case_content">
                <div v-for="item in product.productList">
                    <img :src="item.img" />
                    <div class="img_title">
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="service product_service">
                <h2>{{service.title}}</h2>
                <h6>{{service.sub_title}}</h6>
                <div class="service_content">
                    <div class="sub_service_content" v-for="item in service.data">
                        <div>
                            <img :src="item.img" />
                        </div>
                        <h5>{{item.title}}</h5>
                        <h6>{{item.desc}}</h6>
                    </div>
                </div>
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
                    ],
                    productList:[
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        }
                    ]
                },
                service:{
                    title:'优势服务',
                    sub_title:"在一个互联网+时代不断探索数字营销无线可能，立足国际视野之上的创新型营销方式，在瞬息万变中与具有创新精神的客户一同成长",
                    data:[
                        {
                            img:'images\/government_icon.png',
                            title:'政府及企事业单位',
                            desc:'提升城市形象，拒绝拾荒者、提高清运、加强智慧城市建设、响应国家政策、增强信息化建设、削减成本。'
                        },
                        {
                            img:'images\/government_icon.png',
                            title:'政府及企事业单位',
                            desc:'提升城市形象，拒绝拾荒者、提高清运、加强智慧城市建设、响应国家政策、增强信息化建设、削减成本。'
                        },
                        {
                            img:'images\/government_icon.png',
                            title:'政府及企事业单位',
                            desc:'提升城市形象，拒绝拾荒者、提高清运、加强智慧城市建设、响应国家政策、增强信息化建设、削减成本。'
                        },
                        {
                            img:'images\/government_icon.png',
                            title:'政府及企事业单位',
                            desc:'提升城市形象，拒绝拾荒者、提高清运、加强智慧城市建设、响应国家政策、增强信息化建设、削减成本。'
                        }
                    ]
                },
            }
        }
    }
</script>
