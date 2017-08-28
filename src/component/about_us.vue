<template>
	<main>
		<section class="menu_about"></section>
		<div class="aboutUs_container">
			<h2 class="who_we about_lws">{{aboutwls.title}}</h2>
			<div class="about_box about_lws_desc">
				<p class="desc_2" v-for="item in aboutwls.data">{{item.text}}</p>
			</div>
			<div class="img_box">
				<img :src="aboutwls.img" width="100%"/>
			</div>
		</div>
		<div class="cultural_idea">
			<h2 class="who_we about_lws">{{cultural_idea.title}}</h2>
			<div class="idea_box" v-for="item in cultural_idea.data">
				<span class="title">{{item.title}}</span>
				<span class="desc">{{item.desc}}</span>
				<p class="detail_desc">{{item.detail}}</p>
			</div>
		</div>
	</main>
</template>
<script>
  export default {
    data () {
      return {
      	aboutwls:{
                title:'关于维纳斯',
                img:'images\/about_intro.png',
                data:[
                    {
                      text:'深圳市维纳斯互动娱乐有限公司成立于2013年6月，是一家从事互联网广告宣传与投放的传媒公司。2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。转型以来一直本着绿色智能环保、零排放、零能源成本、可持续发展、美化城市街道及无成本照明的理念，将智能环保与广告相融合。'  
                    },
                    {
                      text:'从2015年起，维纳斯快速切入环保广告领域，已与全国多地政府部门、加油站、大型企业单位、旅游公司签订合作协议。更于2016年成功布局八达岭长城，成为全国首家环保领域与其合作的传媒企业。'  
                    },
                    {
                      text:'未来，维纳斯将继续推进“智能保洁箱”发展，做到深入覆盖北上广深一线城市的同时，持续扩展三线城市，以及消费能力强的诸如旅游区等中小县镇独家签约占点铺设。成为全国智能保洁箱广告解决方案的佼佼者。'  
                    }
                ]
            },
            cultural_idea:{
                title:'文化理念',
                data:[
                    {
                        title:'经营宗旨和使命',
                        desc:'purpose and mission',
                        detail:'维纳斯的经营宗旨和使命是努力成为中国城市保洁箱广告解决方案的领导者，为政府、企业、消费者提供最有质量和最有保障的广告平台。'
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
