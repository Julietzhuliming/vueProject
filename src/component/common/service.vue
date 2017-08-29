<template>
  <div class="service_content">
      <div class="sub_service_content" v-for="item in service.data">
          <div>
              <img :src="item.img"/>
          </div>
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
      </div>
  </div>
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
                        img:'images\/advertiser_icon.png',
                        title:'广告主',
                        desc:'强制性广告、广告精准 高效、人流量高'
                    },
                    {
                        img:'images\/people_icon.png',
                        title:'市民',
                        desc:'免费WIFI、实时公交查询、城市亮化'
                    },
                    {
                        img:'images\/business_icon.png',
                        title:'合作伙伴',
                        desc:'户外基础设施（共享充电宝、共享WIFI、共享雨伞……）'
                    }
                ]
            }
      }
    }
  }
</script>