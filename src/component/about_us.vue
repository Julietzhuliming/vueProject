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
                title:'关于拉维斯',
                img:'images\/about_intro.png',
                data:[
                    {
                      text:'2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。'  
                    },
                    {
                      text:'2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。'  
                    },
                    {
                      text:'2015年维纳斯整合各优势资源成立“智能保洁箱”项目转型成为一家专业的城市户外保洁箱广告传媒。'  
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
