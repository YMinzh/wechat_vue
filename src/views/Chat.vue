<template>
    <div class="Chat">
        <Top @callback="stop" :left="left" :right="right" :leftIconfont="zuo"></Top>
        <ChatPage :allMsg="allMsg" :targetId="targetId" @clean="stop"></ChatPage>
         <div class="foot">
            <i class="iconfont">&#xe7b2;</i>
            <input type="text" v-model="text" class="text">
            <i class="iconfont">&#xe60b;</i>
            <i v-show="!flag" class="iconfont">&#xe627;</i>
            <b-button @click="send" v-show="flag" variant="success">发送</b-button>
        </div>
    </div>
    
</template>
<script>
import Top from '@/components/Top.vue'
import ChatPage from '@/components/ChatPage.vue'
import axios from 'axios'
import { timeout } from 'q'

export default {
    components:{
        Top,ChatPage
    }, 
    data(){
        return {
            right: [" ","&#xe618;"],
            left: "名字",
            zuo : "&#xe670;",
            targetId: 0,
            hisImg: "",
            selfImg: "",
            text: "",
            flag: false,
            allMsg :[
                {
                    time: "",
                    msg: [
                        // {hisImg: "",selfImg: "../img/touxiang.jpeg" ,measure: "你好呀",active: "1"},

                    ]
                },
            ],
            ti:null

            
        }
    },
    methods: {
        getUser(){
            axios.request({
                baseURL: "http://localhost:8081/",
                url: "user/get?token="+localStorage.getItem("token"),
                method: "get",
                params: {
                    id: this.targetId
                }
            }).then((res)=>{
                if(res.data.code==0){
                    this.hisImg = res.data.data[1].avatar
                    this.selfImg = res.data.data[0].avatar
                    this.left = res.data.data[1].nickname
                    this.request();
                }else{
                    console.log(res.data.data)
                }
            })
        },

        request(){
            axios.request({
                baseURL: "http://localhost:8081/",
                url: "measure/details?token="+localStorage.getItem("token"),
                method: "POST",
                data: {
                    sendId: this.targetId,
                }
            }).then((res)=>{
                var list = res.data.data
                for(var i in list){
                    var item = {hisImg: this.hisImg, selfImg: this.selfImg, measure: list[i].content, active: "1"}
                    this.allMsg[0].msg.push(item)
                }
                this.$forceUpdate()
                console.log(this.allMsg[0].msg.length)
            })
        },
        send(){
            this.allMsg[0].msg.push({hisImg: this.hisImg, selfImg: this.selfImg, measure: this.text, active: "2"})
            console.log(this.targetId)
            axios.request({
                baseURL: "http://localhost:8081/",
                url: "measure/send?token="+localStorage.getItem("token"),
                method: "POST",
                data: {
                    targetId: this.targetId,
                    content: this.text
                }
            }).then((res)=>{
                this.text = ""
                console.log(res);
            })
        },
        stop(){
            clearInterval(this.ti)
        },
        record(){
            this.$router.push("record",{sendId: targetId})
        }
    },
    mounted(){
        this.targetId=this.$route.query.targetId
        console.log("123123"+this.targetId)
        this.getUser()
        this.ti = setInterval(this.request,1000)
    },
    watch: {
        text(n,o){
            if(n==""){
                this.flag=false
            }else{
                this.flag=true
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