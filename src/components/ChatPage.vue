<template>
    <div class="main" id="chatRecord">
        <div>
            <div style="text-align: center;margin: 0 auto;padding-top: 3px;color: #888888;" @click="record">查看聊天记录</div>
        </div>
        <div v-for="(item, index) in allMsg" :key="index">
            <div class="time">
                <span>{{item.time}}</span>
            </div>
            <div class="block">
                <ul>
                    <ChatList v-for="(item2, index) in item.msg" :key="index" :msgs="item2"></ChatList>
                </ul>
            </div>
        </div>
    </div>
        
    
</template>
<script>
import ChatList from '@/components/ChatList.vue'

export default {
    props: [
        "allMsg","targetId"
    ],
    components:{
        ChatList
    },
    mounted(){
    },
    updated(){
        // 聊天定位到底部
        let ele = document.getElementById('chatRecord');
        ele.scrollTop = ele.scrollHeight;
    },
    methods: {
        record(){
            this.$emit("clean")
            this.$router.push({path:"record",query: {sendId: this.targetId}})
        }
    }
} 
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .main{       
        width: 100%;
        flex-grow: 1;
        overflow: auto;
        background-color: $page-color;
        div{
            
            .time{
                @include flex(row,center);
                font-size: 0.5rem;
                color: $content-color;
                margin: 16px 0;
            }
            ul{
                & .list:last-of-type{
                    margin-bottom: 16px;
                }
            }
        }
    }
</style>