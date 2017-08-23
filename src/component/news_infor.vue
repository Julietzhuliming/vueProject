<template>
    <main>
        <section class="news_banner_bg">
        </section>
        <section class="ourCase">
            <Menucomponent></Menucomponent>
            <div class="case_content">
                <div v-for="item in newsData.newsList">
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
