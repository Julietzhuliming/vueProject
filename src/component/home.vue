<style>
</style>
<template>
<main>
  <section class="swiper_slider">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="images/banner_01.jpg" width="100%" height="100%" />
                <div class="slide1_content">
                    <h2>城市智能保洁箱广告</h2>
                    <h3>解决方案领导者</h3>
                    <span>创建绿色环保的智慧城市，促进城市环保公益</span>

                    <p>
                        <span>北京、上海、广州、深圳全覆盖</span>
                    </p>
                    <p>
                        <span>累计为<span>4000</span>客户提供<span>201552</span>次城市环保箱广告解决方案</span>
                    </p>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="images/banner_01.jpg" width="100%" height="100%" /> 
                <div class="slide2_content">
                    <h2>等待填充222</h2>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="images/banner_01.jpg" width="100%" height="100%" /> 
                <div class="slide3_content">
                    <h2>等待填充333</h2>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </section>
  <section class="aboutUs">
      <div class="aboutUs_container">
          <div class="img_box">
              <img src="images/about_bg.png" width="100%" />
          </div>
          <div class="about_box">
              <p class="about_us">about us</p>
              <h2 class="who_we"><span class="we_font">我们</span>是谁</h2>
              <p class="desc_1">{{aboutus.desc1}}</p>
              <p class="desc_2">{{aboutus.desc2}}</p>
              <p class="desc_2">{{aboutus.desc3}}</p>
              <span class="more_button">{{learn_more}}</span>
          </div>
      </div>
  </section>
  <section class="service">
      <p>service</p>
      <h2>{{service.title}}</h2>
      <div class="service_content">
          <div class="sub_service_content" v-for="item in service.data">
              <div>
                  <img :src="item.img"/>
              </div>
              <h5>{{item.title}}</h5>
              <h6>{{item.desc}}</h6>
          </div>
      </div>
      <div class="button_box">
          <span class="more_button">{{learn_more}}</span>
      </div>
  </section>
  <section class="ourCase">
    <p>our case</p>
    <h2>{{ourcase.title}}</h2>
    <div class="case_content">
        <div v-for="item in ourcase.data">
            <img :src="item.img"/>
            <div class="img_title">
               <span>{{item.text}}</span>
            </div>
        </div>
    </div>
    <div class="button_box">
        <span class="more_button">查看更多</span>
    </div>
  </section>
</main>
</template>
<script>
  export default {
    data () {
      return {
            learn_more:'了解更多',
            see_more:'查看更多',
            service:{
                title:'我们的优势服务',
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
            aboutus:{
                desc1:'“致力于城市智能保洁箱广告解决方案，创建绿色环保的智慧城市，促进城市环保公益”',
                desc2:'深圳市维纳斯互动娱乐有限公司成立于2013年6月，是一家从事互联网广告宣传与投放的传媒公司。',
                desc3:'2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。',
            },
            ourcase:{
                title:'我们的案例',
                data:[
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
            cultural_idea:{
                title:'文化理念',
                data:[
                    {
                        title:'经营宗旨和使命',
                        desc:'purpose and mission',
                        detail:'维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使'
                    },
                    {
                        title:'企业的发展原则',
                        desc:'development principles',
                        detail:'维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使'
                    },
                    {
                        title:'核心竞争力',
                        desc:'Core competitivesness',
                        detail:'维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使'
                    },
                    {
                        title:'我们的观念',
                        desc:'Our concept',
                        detail:'维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使'
                    },
                    {
                        title:'我们的态度',
                        desc:'Our attitude',
                        detail:'维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使命是努力成为，维纳斯的经营宗旨和使'
                    }
                ]
            }
      }
    }
  }
</script>
