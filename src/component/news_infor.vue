<template>
    <main class="news_infor">
        <my-header :child-msg="new_header"></my-header>
        <section class="news_banner_bg bg">
            <h2>{{newsData.title}}</h2>
            <p>{{newsData.title_en}}</p>
        </section>
        <section class="news_infomation">
            <Menucomponent :child-msg="newsData.newsType"></Menucomponent>
            <div class="newsinfor_box" v-for="item in newsData.newsList">
                <div class="img_content">
                    <a href="#/newsdetail"><img :src="item.newsImg"/></a>
                </div>
                <div class="news_content">
                    <a href="#/newsdetail"><div class="news_title">{{item.newsTitle}}</div></a>
                    <a href="#/newsdetail"><p class="news_desc">{{item.summary}}</p></a>
                </div>
                <div class="month_day">05-25</div>
                <div class="year">2017</div>
                <div class="next_img">
                    <img src="images\/red_r_btn.png"/>
               </div>
            </div>
            <div class="page"></div>
        </section>
    </main>
</template>
<script>
    export default {
        data () {
            return {
                new_header:{
                    'background':'#fff',
                    'color':'#000',
                },
                newsData:{
                    title:' 新闻动态',
                    title_en:'News Information',
                    newsType:[
                        {ID:"1",Title:"全部",Url:""},
                        {ID:"2",Title:"行业资讯",Url:""},
                        {ID:"3",Title:"公司动态",Url:""}
                    ],
                    newsList:[
                        {
                            newsID:'1',
                            newsTitle:'深圳市市委书记、市委宣传部部长一行来倒公司调研',
                            newsImg:'images\/news.png',
                            time:'2017 05-25',
                            summary:'2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。'
                        },
                        {
                            newsID:'1',
                            newsTitle:'深圳市市委书记、市委宣传部部长一行来倒公司调研',
                            newsImg:'images\/news.png',
                            time:'2017 05-25',
                            summary:'2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。'
                        },
                        {
                            newsID:'1',
                            newsTitle:'深圳市市委书记、市委宣传部部长一行来倒公司调研',
                            newsImg:'images\/news.png',
                            time:'2017 05-25',
                            summary:'2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。'
                        },
                        {
                            newsID:'1',
                            newsTitle:'深圳市市委书记、市委宣传部部长一行来倒公司调研',
                            newsImg:'images\/news.png',
                            time:'2017 05-25',
                            summary:'2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。'
                        },
                        
                    ]
                }
            }
        }
    }
</script>
