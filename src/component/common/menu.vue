<template>
    <div class="product_classify flex">
        <div class="product_type" v-for="item in this.props.childmsg">
            <span>{{item.Title}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                props: {
                    childMsg: {
                        type: Array,
                        default: [
                                    {ID:"1",Title:"商业街道",Url:""},
                                    {ID:"2",Title:"步行街",Url:""},
                                    {ID:"3",Title:"广场",Url:""},
                                    {ID:"4",Title:"飞机场",Url:""},
                                    {ID:"5",Title:"火车站",Url:""}
                            ] //这样可以指定默认的值
                    }
                }
            }
        }
    }
</script>
