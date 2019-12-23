<template>
    <div class="top">
        <div class="left iconfont"><span v-html="leftIconfont" @click="goBack"></span><span>{{left}}</span></div>
        <div class="right">
            <i class="iconfont" v-for="(item, index) in right" :key="index" v-html="item" @click="callback"></i>
        </div>
    </div>
</template>

<script>
export default {
    props : [
        "right",
        "left",
        "leftIconfont"
    ],
    methods: {
        goBack(){
            this.$emit("callback")
            this.$router.push("/");
        },
        callback(){
            this.$emit("for")
        }
    }

}
</script>

<style lang="scss" scoped>




    .top{
        @import '../assets/sass/color.scss';
        @import '../assets/sass/function.scss';
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