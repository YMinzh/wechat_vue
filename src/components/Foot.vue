<template>
    <div class="foot">
        <div v-for="(item, index) in text" :key="index" class="a" @click="go(index)">
            <div :class="['footicon',isActive(index)?theActive:'']">
                <i class="iconfont" v-html="iconfont[index]"></i>
                <span>{{text[index]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            theActive:"active",
            iconfont:["&#xe65d;","&#xe63a;","&#xe654;","&#xe758;"],
            text:["微信","通讯录","发现","我"],
            url : ["/","/mailList","/discover","/personal"],
        }
    },
    props :[
        "active"
    ],
    methods:{
        isActive(index){
            console.log(typeof(this.active),this.active)
            if(index==this.active){
                return true
            }else{
                return false
            }
        },
        go(index){
            if(index==this.active){
                return
            }
            this.$router.push(this.url[index])
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .foot{
        @import '../assets/sass/color.scss';
        @import '../assets/sass/function.scss';
        background-color: $foot-color;
        height: 53px;

        @include flex(row,space-around);
        .a{
            color: black;
            @include flex;
            .footicon{
                @include flex(column,space-around);
                .iconfont{
                    color: black;
                    font-size: 1.25rem;
                    text-decoration: none;
                }
                span{
                    color: black;
                    text-decoration: none;
                    font-size: 0.6rem;
                }
                
            }
            .active{
                color: $wechat-green;
                .iconfont{
                    color: $wechat-green;
                }
                span{
                    color: $wechat-green;
                }
            }
        }
    }

</style>