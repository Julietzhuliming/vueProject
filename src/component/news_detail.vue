<template>
<main>
    <my-header :child-msg="new_header"></my-header>
	<section class="news_detail_head">
        <h2 class="title">{{new_detail.title}}</h2>
        <h6 class="desc">{{new_detail.issuedTime}}</h6>
    </section>
	<section class="news_detail_content_class">
        <!--<div>{{new_detail.content}}</div>-->
        <div v-html="new_detail.content"></div>
    </section>
    <section class="news_detail_footer flex">
        <div class="pre_next_sign">
            <div class="previous"><img src="images/red_l_btn.png"/><span>{{new_detail.previousTitle}}</span></div>
            <div class="next"><span>{{new_detail.nextTitle}}</span><img src="images/gray_r_btn.png"/></div>
        </div>
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
        new_detail:{
                id:"0001",
        		title:"深圳市市委书记，市委宣传部部长一行来公司调研",
                issuedTime:"2017-08-08",
                content:'<p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"><strong>一场身家超过1340亿美元的大会</strong></p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">这场被称为“美国科技峰会”的圆桌会议备受瞩目，不仅仅是因为特朗普作为下一任美国总统的身份，其他与会者的身份同样重磅，让我们来看看这一串耀眼的名单吧：</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">苹果首席执行官蒂姆·库克（Tim Cook）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">Alphabet首席执行官拉里·佩奇（Larry Page）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">执行主席埃里克·施密特（Eric Schmidt）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">亚马逊首席执行官杰夫·贝索斯（Jeff Bezos）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">Facebook首席运营官雪莉·桑德伯格（Cheryl Sandberg）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">微软首席执行官萨蒂亚·纳德拉（Satya Nadella）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">IBM首席执行官罗睿兰（Ginni Rometty）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">特斯拉电动汽车公司首席执行官伊隆·马斯克（Elon Musk）</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">&nbsp;</p><p class="p" style="margin-top: 0px; margin-bottom: 0px; margin-left: 0pt; padding: 0px; word-break: break-all; color: rgb(78, 78, 78); font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, arial, 宋体, 黑体; font-size: 14px; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">当选副总统迈克·彭斯（Mike Pence）也参加了会议。</p><p><br/></p>',
                previousID:"", //上一页编号	为空则表示没有上一页
                previousTitle:"深圳市市委书记，市委宣传部部长一行来公司调研",//上一页标题
                nextID:"",//下一页编号	为空则表示没有下一页
                nextTitle:"深圳市市委书记，市委宣传部部长一行来公司调研"//下一页标题
            }
      }
    }
  }
</script>
