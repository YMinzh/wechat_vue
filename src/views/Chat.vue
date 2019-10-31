<template>
    <div class="Chat">
        <Top :left="left" :right="right" :leftIconfont="zuo"></Top>
        <ChatPage :allMsg="allMsg"></ChatPage>
         <div class="foot">
            <i class="iconfont">&#xe7b2;</i>
            <input type="text" class="text">
            <i class="iconfont">&#xe60b;</i>
            <i class="iconfont">&#xe627;</i>
        </div>
    </div>
    
</template>
<script>
import Top from '@/components/Top.vue'
import ChatPage from '@/components/ChatPage.vue'

export default {
    components:{
        Top,ChatPage
    }, 
    data(){
        return {
            right: [" ","&#xe618;"],
            left: "名字",
            zuo : "&#xe670;",

            allMsg :[
                {
                    time: "11.11",
                    msg: [
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "1"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                        {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "2"},
                    ]
                },
            ]

            
        }
    },
    mounted(){
        this.left=this.$route.query.username
        for(var i in this.allMsg){
            for(var j in this.allMsg[i].msg){
                this.allMsg[i].msg[j].hisImg=this.$route.query.img
            }
        }
    }
}

</script>
<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .Chat{
        height: 100%;
        @include flex(column);
        .foot{
            flex-grow: 0;
            flex-shrink: 0;
            height: 53px;
            background-color: $foot-color;
            @include flex(row);
            .text{
                flex-grow: 1;
                flex-shrink: 1;
                width: 100px;
                border: none;
                padding: 0 10px;
                height: 40px;
            }
            .iconfont{
                font-size: 2rem;
                margin: 0 10px;
            }
        }
    }
    
</style>