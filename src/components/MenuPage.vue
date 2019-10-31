<template>
    <div class="main">
        <div v-for="(item, index) in msgblocks" :key="index">
            <div :class="division[index]!='null'?'division':'noText'"><span>{{division[index]}}</span></div>
            <MenuBlock :msgs="item"></MenuBlock>
        </div>
    </div>
        
    
</template>

<script>
import MenuBlock from '@/components/MenuBlock.vue'
export default {
    props: [
        "msgblocks","division"
    ],
    components: {
        MenuBlock
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .main{
        width: 100%;
        background-color: $page-color;
        flex-grow: 1;
        width: 100%;
        overflow: auto;
        & div:first-of-type .noText{
            display: none;
        }
        div{
            width: 100%;
            .division{
            height: 30px;
            background-color: $page-color;
            @include flex(row,flex-start);
                span{
                color: $content-color;
                margin-left: 16px;
                }
            }
        }
        div>.noText{
            height: 10px;
            background-color: $page-color;
            width: 100%;
            span{
                display: none;
            }
        }
    }
</style>