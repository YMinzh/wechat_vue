<template>

    <div class="main">
        <MsgList v-for="(item, index) in msgs" :key="index" :msg="item" @goChat="goChat"></MsgList>
    </div>
</template>

<script>
import MsgList from '@/components/MsgList.vue'

export default {
    props:[
        "msgs"
    ],
    components:{
        MsgList
    },
    methods: {
        goChat(val){
            console.log(val)

            this.$emit("goChat",val)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .main{
        flex-grow: 1;
        height: 100%;
        overflow-y: scroll;
        background-color: #fff;
        @include flex(column,flex-start);
    }
    
</style>