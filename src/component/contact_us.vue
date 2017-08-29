<template>
<main>
    <my-header></my-header>
	<section class="contact_banner_bg bg">
        <h2>{{contactus.title}}</h2>
        <p>{{contactus.title_en}}</p>
    </section>
	<section class="aboutUs contact_us">
        <div class="aboutUs_container contactus_container">
            <div class="img_box map_box">
                <iframe src="..\/src/map.html" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
            </div>
            <div class="about_box">
                <h2 class="title">{{contactus.desc1}}</h2>
                <p class="desc">{{contactus.desc2}}</p>
                <p class="desc">{{contactus.desc3}}</p>
                <p class="desc">{{contactus.desc4}}</p>
                <p class="desc">{{contactus.desc5}}</p>
                <div class="erweimaimg_box">
					<img :src="contactus.img2" />
				</div>
				<p class="erwima_desc">{{contactus.desc6}}</p>
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
                title:'联系我们',
                title_en:'Contact Us',
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
