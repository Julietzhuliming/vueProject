<template>
    <main class="home_page">
        <my-header></my-header>
        <Slidercomponent></Slidercomponent>
        <section class="service" id="home_service">
            <p>service</p>
            <h2>{{service.title}}</h2>
            <Servicecomponent></Servicecomponent>
            <div class="button_box">
                <span @click="showProduct()" class="more_button">{{learn_more}}</span>
            </div>
        </section>
        <Aboutcomponent></Aboutcomponent>
        <section class="ourCase" id="home_ourCase">
            <p>our case</p>
            <h2>{{ourcase.title}}</h2>
            <Casecomponent :child-msg="channel"></Casecomponent>
            <div class="button_box">
                <span @click="showCase()" class="more_button">{{see_more}}</span>
            </div>
        </section>
        <HomeNav></HomeNav>
    </main>
</template>
<script>
    export default {
        methods:{
            showProduct:function(){
                this.$router.push({ path: '/product'});
            },
            showCase:function(){
                this.$router.push({ path: '/showcase'});
            },
        },
        mounted:function() {
            
        },
        data() {
            return {
                scroll: '',
                channel: 'index',
                learn_more: '了解更多',
                see_more: '查看更多',
                service: {
                    title: '我们的优势服务',
                },
                ourcase: {
                    title: '我们的案例',
                }
            }
        }
    }
</script>