<template>
    <main>
        <section class="news_banner_bg bg">
            <h2>{{newsData.title}}</h2>
            <p>{{newsData.title_en}}</p>
        </section>
        <section class="news_infomation">
            <Menucomponent :child-msg="newsData.newsType"></Menucomponent>
            <div class="newsinfor_box">
                <div class="img_content">
                    <img src="images\/news.png"/>
                </div>
                <div class="news_content">
                    <div class="news_title">深圳市市委书记、市委宣传部部长一行来倒公司调研</div>
                    <p class="news_desc">
                        2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党
                    工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。
                    </p>
                    
                </div>
                <div class="month_day">05-25</div>
                <div class="year">2017</div>
                <div class="next_img">
                    <img src="images\/red_r_btn.png"/>
               </div>
            </div>
            <div class="newsinfor_box">
               <div class="img_content">
                    <img src="images\/news.png"/>
               </div>
               <div class="news_content">
                    <div class="news_title">深圳市市委书记、市委宣传部部长一行来倒公司调研</div>
                    <p class="news_desc">
                        2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党
                    工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。
                    </p>
                    <div>05-25</div>
                    <div>2017</div>
                    <div class="img_content">
                        <img src="images\/red_r_btn.png"/>
                   </div>
               </div>
            </div>
            <div class="newsinfor_box">
               <div class="img_content">
                    <img src="images\/news.png"/>
               </div>
               <div class="news_content">
                    <div class="news_title">深圳市市委书记、市委宣传部部长一行来倒公司调研</div>
                    <p class="news_desc">
                        2017年5月25日上午9时，市委常委、市委宣传部部长、副部长、高新区管委会副巡视员、高新区党工委宣传部部长、高新区党
                    工委宣传部副部长樊锋昭等领导到三人行公司调研并指导工作。
                    </p>
                    <div>05-25</div>
                    <div>2017</div>
                    <div class="img_content">
                        <img src="images\/red_r_btn.png"/>
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
