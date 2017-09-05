<template>
	<main>
    <my-header :child-msg="new_header"></my-header>
		<section class="show_case_bg bg">
          <h2>{{ourcase.title}}</h2>
          <p>{{ourcase.title_en}}</p>
    </section>
		<section class="ourCase menu_left">
            <Menucomponent :child-msg="ourcase.caseType"></Menucomponent>
            <Casecomponent :child-msg="channel"></Casecomponent>
        </section>
	</main>
</template>
<script>
  export default {
    methods:{
    },
    data () {
      return {
        channel:'list',
        new_header:{
            'background':'#fff',
            'color':'#000',
        },
      	 ourcase:{
                title:'案例展示',
                title_en:"Case",
                caseType:'CASE'
            }
      }
    }
  }
</script>

