<template>
        <div class="case_content">
            <div v-for="item in ourcase.data">
                <img :src="item.img"/>
                <div class="img_title">
                   <span>{{item.text}}</span>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    data () {
      return {
            ourcase:{
                data:[
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        },
                        {
                            img:'images\/case.png',
                            text:'八达岭长城'
                        }
                ]
            }
        }
    }
  }
</script>
