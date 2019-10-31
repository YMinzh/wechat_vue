<template>
    <li class="list">
        <div class="left"><img :src="msg.img" alt=""></div>
        <div class="right"><span>{{msg.text}}</span><i class="iconfont" v-html="msg.iconfont"></i></div>
    </li>
        
    
</template>

<script>
export default {
    props: [
        "msg",
    ]
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .list{
        list-style: none;
        height: 53px;
        @include flex(row,flex-start);
        .left{
            flex-shrink: 0;
            margin: 0 16px;
            width: 40px;
            height: 40px;
            border-radius: 5px;
            overflow: hidden;
            img{
                width: 40px;
                height: 40px;
            }
        }
        .right{
            height: 100%;
            width: 100%;
            font-size: 1rem;
            border-bottom: 1px solid $line-color;
            @include flex(row,space-between);
            .iconfont{
                margin-right: 16px;
            }
        }
    }
    
</style>