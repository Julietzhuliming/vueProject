<template>
<main>
	<section class="contact_banner_bg"></section>
	<section class="aboutUs contact_us">
        <div class="aboutUs_container">
            <div class="img_box">
                <img :src="contactus.img" width="100%"/>
            </div>
            <div class="about_box">
                <h2 class="title">{{contactus.desc1}}</h2>
                <p class="desc_2">{{contactus.desc1}}</p>
                <p class="desc_2">{{contactus.desc2}}</p>
                <p class="desc_2">{{contactus.desc3}}</p>
                <p class="desc_2">{{contactus.desc4}}</p>
                <p class="desc_2">{{contactus.desc5}}</p>
                <div class="erweimaimg_box">
					<img :src="contactus.img2" />
				</div>
				<p class="desc_2">{{contactus.desc6}}</p>
            </div>
        </div>
    </section>
</main>

</template>

<script>
  export default {
    data () {
      return {
        contactus:{
        		img:'images\/map.png',
                img2:'images\/erweima.png',
                desc1:'深圳维纳斯娱乐互动有限公司',
                desc2:'咨询电话：0755-45451254',
                desc3:'商务合作：sw@wls.com',
                desc4:'Q      Q：2654564564',
                desc5:'公司地址：深圳市南山区蛇口工业六路蛇口网谷创业壹号大楼C座101',
                desc6:'扫码关注微信公众号',
            }
      }
    }
  }
</script>
