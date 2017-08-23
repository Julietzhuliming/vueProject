<template>
	<main>
		<section class="show_case_bg"></section>
		<section class="ourCase menu_left">
            <Menucomponent></Menucomponent>
            <Casecomponent></Casecomponent>
        </section>
	</main>
</template>
<script>
  export default {
    data () {
      return {
      	 ourcase:{
                title:'我们的案例',
            }
      }
    }
  }
</script>

