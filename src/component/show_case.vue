<template>
	<main>
		<section class="show_case_bg bg">
          <h2>{{ourcase.title}}</h2>
          <p>{{ourcase.title_en}}</p>
    </section>
		<section class="ourCase menu_left">
            <Menucomponent :child-msg="ourcase.caseType"></Menucomponent>
            <Casecomponent ></Casecomponent>
        </section>
	</main>
</template>
<script>
  export default {
    data () {
      return {
      	 ourcase:{
                title:'案例展示',
                title_en:"Case",
                caseType:[
                    {ID:"1",Title:"全部",Url:""},
                    {ID:"2",Title:"八达岭长城",Url:""},
                    {ID:"3",Title:"石林峡景区",Url:""}
                ],

            }
      }
    }
  }
</script>

