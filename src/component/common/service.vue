<template>
  <div class="service_content">
      <div class="sub_service_content" v-for="item in service.data">
          <div>
              <img :src="item.img"/>
          </div>
          <h5>{{item.title}}</h5>
          <h6>{{item.desc}}</h6>
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
            }
      }
    }
  }
</script>