<template>
    <li class="list">
        <div class="both"><img :src="msgs.hisImg" v-show="msgs.active==1" alt=""></div>
        <div :class="msgs.active==1?'leftNews':'rightNews'">
            <div class="text"><span>{{msgs.measure}}</span></div>
            <div class="triangle"></div>
        </div>
        <div class="both"><img :src="msgs.selfImg" v-show="msgs.active==2" alt=""></div>
    </li>

</template>

<script>
export default {
    props: ["msgs"],
    mounted(){
        console.log(this.msgs)
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .list{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 16px;
        .both{
            height: 40px;
            width: 40px;
            margin: 0 8px;
            img{
                width: 40px;
                height: 40px;
            }
        }
        .leftNews{
            max-width: calc(100% - 144px);
            flex-grow: 1;
            position: relative;
            display: flex;
            justify-content: flex-start;
            .triangle{
                background-color: #fff;
                width: 11px;
                height: 11px;
                transform: rotate(45deg);
                position: absolute;
                left: -4px;
                top: 14px;
            }
            .text{
                max-width: 100%;
                word-wrap: break-word;
                align-items: center;
                display: inline-flex;
                min-height: 40px;
                background-color: #fff;
                font-size: 1rem;
                span{
                    max-width: 100%;
                    padding: 0 10px;
                    word-break: break-all;
                    word-wrap: break-word;
                }
            }
        }    
        .rightNews{
            max-width: calc(100% - 144px);
            flex-grow: 1;
            position: relative;
            display: flex;
            justify-content: flex-end;
            .triangle{
                background-color: #fff;
                width: 11px;
                height: 11px;
                transform: rotate(45deg);
                position: absolute;
                right: -4px;
                top: 14px;
            }
            .text{
                max-width: 100%;
                word-wrap: break-word;
                align-items: center;
                display: inline-flex;
                min-height: 40px;
                background-color: #fff;
                font-size: 1rem;
                span{
                    max-width: 100%;
                    padding: 0 10px;
                    word-break: break-all;
                    word-wrap: break-word;
                }
            }
        }  
    }
</style>