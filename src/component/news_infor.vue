<template>
    <main>
        <section class="news_banner_bg">
        </section>
        <section class="ourCase">
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
    </main>
</template>
<script>
    export default {
        data () {
            return {
                newsData:{
                    newsType:[
                        {productID:"1",productTitle:"全部",logoUrl:""},
                        {productID:"2",productTitle:"行业资讯",logoUrl:""},
                        {productID:"3",productTitle:"公司动态",logoUrl:""}
                    ],
                    newsList:[
                        {
                            newsID:'1',
                            newsTitle:'我是女王我是女王我是女王女王女王',
                            logoUrl:'images\/case.png',
                            time:'2017 05-25',
                            summary:'我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王'
                        },
                        {
                            newsID:'1',
                            newsTitle:'我是女王我是女王我是女王女王女王',
                            logoUrl:'images\/case.png',
                            time:'2017 05-25',
                            summary:'我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王'
                        },
                        {
                            newsID:'1',
                            newsTitle:'我是女王我是女王我是女王女王女王',
                            logoUrl:'images\/case.png',
                            time:'2017 05-25',
                            summary:'我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王'
                        },
                        {
                            newsID:'1',
                            newsTitle:'我是女王我是女王我是女王女王女王',
                            logoUrl:'images\/case.png',
                            time:'2017 05-25',
                            summary:'我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王'
                        },
                        {
                            newsID:'1',
                            newsTitle:'我是女王我是女王我是女王女王女王',
                            logoUrl:'images\/case.png',
                            time:'2017 05-25',
                            summary:'我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王我是女王我是女王我是女王女王女王'
                        }
                    ]
                }
            }
        }
    }
</script>
