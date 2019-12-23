<template>
    <div class="Record van-clearfix" >
        <Top left="返回" @forback="goBack"></Top>
        <van-list class="van-clearfix" id="list-content"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="request"
        :offset = offset
        :immediate-check= flag
        >
        <van-cell v-for="(item, index) in list" :key="index" :title="item.name" :value="item.time" size="large" :label="item.content" />  
        </van-list>
    </div>
</template>

<script>
import axios from 'axios'
import Top from '@/components/Top.vue'

export default {
    components: {
        Top
    },
    data(){
        return {
            sendId: 0,
            hisName: '',
            selfName: '', 

            currentPage: 1,
            rows: 1,
            perPage: 10,

            list:[],
            loading: false,
            finished: false,

            hasNext: true,
            offset: 0,

            flag: false

        }
    },

    methods: {
        request(){
            this.loading = true
            axios.request({
                baseURL: "http://localhost:8081/",
                url: "measure/page?token="+localStorage.getItem("token"),
                method: "get",
                params: {
                    sendId:this.sendId,
                    page: this.currentPage
                }
            }).then((res)=>{
                this.rows = res.data.data.total 
                var array = res.data.data.list
                for(var i in array){
                    var item = {content: array[i].content, time: array[i].created_at}
                    if(array[i].send_id == this.sendId){
                        item.name = this.hisName
                    }else{
                        item.name = this.selfName
                    }
                    this.list.push(item)
                }
                if(res.data.data.isLastPage){
                    this.finished = true;
                }else{
                    this.currentPage ++;
                }
                this.loading = false
                
            })
        },
        getUser(){
            axios.request({
                baseURL: "http://localhost:8081/",
                url: "user/get?token="+localStorage.getItem("token"),
                method: "get",
                params: {
                    id: this.sendId
                }
            }).then((res)=>{
                if(res.data.code==0){
                    this.hisName = res.data.data[1].nickname
                    this.selfName = res.data.data[0].nickname
                    this.request();
                }else{
                    console.log(res.data.data)
                }
            })
        },
        goBack(){
            this.$router.push("chat?targetId="+this.sendId)
        }
    },
    mounted(){

        this.currentPage = 1
        this.sendId = this.$route.query.sendId
        this.getUser()


    },

}
</script>
<style lang="scss" scoped>
.Record{
    width: 100%;
}
        .top{
        @import '../assets/sass/color.scss';
        @import '../assets/sass/function.scss';
        width: 100%;
        background-color: $page-color;
        padding-top: 27px;
        height: 44px;
        padding-bottom: 20px;
        @include flex;
        .left{
            font-size: 1rem;
            font-weight: bold;
            margin-left: 16px;
        }
        .right{
            margin-right: 16px;
            .iconfont{
                font-size: 1.25rem;
                margin-left: 35px;
            }
        }
    }
</style>