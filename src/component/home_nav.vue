<template>
    <main>
        <section class="home_nav_class">
            <div class="nav_child">
                <img :src="homeNav.home.img" @mouseleave="controlShow('home');" @mouseover="controlShow('home');"
                     @click="goto_area('home');"/>
                <span v-show="homeNav.home.isShow" class="desc">{{homeNav.home.desc}}</span>
                <div class="bootNav"></div>
            </div>
            <div class="nav_child">
                <img :src="homeNav.service.img" @mouseleave="controlShow('service');"
                     @mouseover="controlShow('service');" @click="goto_area('service');"/>
                <span v-show="homeNav.service.isShow" class="desc">{{homeNav.service.desc}}</span>
                <div class="bootNav"></div>
            </div>
            <div class="nav_child">
                <img :src="homeNav.whoWe.img" @mouseleave="controlShow('whoWe');" @mouseover="controlShow('whoWe');"
                     @click="goto_area('whoWe');"/>
                <span v-show="homeNav.whoWe.isShow" class="desc">{{homeNav.whoWe.desc}}</span>
                <div class="bootNav"></div>
            </div>
            <div class="nav_child">
                <img :src="homeNav.ourCase.img" @mouseleave="controlShow('ourCase');"
                     @mouseover="controlShow('ourCase');" @click="goto_area('ourCase');"/>
                <span v-show="homeNav.ourCase.isShow" class="desc">{{homeNav.ourCase.desc}}</span>
            </div>


        </section>
    </main>

</template>
<script>
    export default {
        data () {
            return {
                homeNav: {
                    home: {"img": "images\/homeNav\/nav_home.png", "desc": "首页", "isShow": false},
                    service: {"img": "images\/homeNav\/nav_service.png", "desc": "我们的优势服务", "isShow": false},
                    whoWe: {"img": "images\/homeNav\/nav_who_we.png", "desc": "我们是谁", "isShow": false},
                    ourCase: {"img": "images\/homeNav\/nav_contactUs.png", "desc": "我们的案例", "isShow": false}
                }
            }
        },
        methods: {
            goto_area: function (param) {
                if (param) {
                    switch (param) {
                        case "home": {
                            var element = document.getElementById("home_header");
                            element.scrollIntoView();
                            element.scrollIntoView(true);
                            // document.body.scrollTop = 0;
                            break;
                        }
                        case "service": {
                            var element = document.getElementById("home_service");
                            element.scrollIntoView();
                            element.scrollIntoView(true);
                            //var X = document.getElementById('home_service').offsetTop;
                            //document.body.scrollTop = X;
                            break;
                        }
                        case "whoWe": {
                            var element = document.getElementById("home_whoWe");
                            element.scrollIntoView();
                            element.scrollIntoView(true);
                            //var X = document.getElementById('home_whoWe').offsetTop;
                            //document.body.scrollTop = X;
                            break;
                        }
                        case "ourCase": {
                            var element = document.getElementById("home_ourCase");
                            element.scrollIntoView();
                            element.scrollIntoView(true);
                            // var X = document.getElementById('home_ourCase').offsetTop;
                            //document.body.scrollTop = X;
                            break;
                        }
                    }
                }
            },
            controlShow: function (param) {
                var that = this;
                if (param) {
                    switch (param) {
                        case "home": {
                            that.homeNav.home.isShow = !that.homeNav.home.isShow;
                            break;
                        }
                        case "service": {
                            that.homeNav.service.isShow = !that.homeNav.service.isShow;
                            break;
                        }
                        case "whoWe": {
                            that.homeNav.whoWe.isShow = !that.homeNav.whoWe.isShow;
                            break;
                        }
                        case "ourCase": {
                            that.homeNav.ourCase.isShow = !that.homeNav.ourCase.isShow;
                            break;
                        }
                    }
                }
            }
        }
    }
</script>
