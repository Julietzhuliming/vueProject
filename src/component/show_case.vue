<template>
    <main>
        <my-header></my-header>
        <section class="show_case_bg bg">
        </section>
        <section class="ourCase menu_left">
            <Menucomponent :child-msg="ourcase.caseType"></Menucomponent>
            <Casecomponent :child-msg="channel"></Casecomponent>
        </section>
    </main>
</template>
<script>
    export default {
        methods: {},
        data () {
            return {
                channel: 'list',
                ourcase: {
                    title: '案例展示',
                    title_en: "Case",
                    caseType: 'CASE'
                }
            }
        }
    }
</script>

