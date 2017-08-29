<template>
<main class="home_page">
  <my-header :child-msg="new_header"></my-header>
  <Slidercomponent></Slidercomponent>
  <section class="service">
        <p>service</p>
        <h2>{{service.title}}</h2>
        <Servicecomponent></Servicecomponent>
        <div class="button_box">
          <a href="#/product"><span class="more_button">{{learn_more}}</span></a>
        </div>
  </section>
  <Aboutcomponent></Aboutcomponent>
  <section class="ourCase">
        <p>our case</p>
        <h2>{{ourcase.title}}</h2>
        <Casecomponent></Casecomponent>
        <div class="button_box">
            <a href="#/showcase"><span class="more_button">{{see_more}}</span></a>
        </div>
    </section>
</main>
</template>
<script>
  export default {
    data () {
      return {
            new_header:{
                'background':'transparent',
                'color':'#fff',
            },
            learn_more:'了解更多',
            see_more:'查看更多',
            service:{
                title:'我们的优势服务',
            },
            ourcase:{
                title:'我们的案例',
            }
      }
    }
  }
</script>
