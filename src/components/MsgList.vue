<template>
        <li class="list" @click="goChat">
            <div class="left"><img :src="msg.img" alt=""></div>
            <div class="right">
                <div class="up">
                    <div class="uLeft"><span>{{msg.username}}</span></div>
                    <div class="uRight"><span>{{msg.time}}</span></div>
                </div>
                <div class="down"><span>{{msg.username}} : {{msg.content}}</span></div>
            </div>
        </li>
</template>

<script>
export default {
    props : ["msg"],
    methods: {
        goChat(){
            console.log(1)
            this.$emit("goChat",{img: this.msg.img,username: this.msg.username})
        }
    }
}
</script>
<style lang="scss" scoped>

        .list{
            @import '../assets/sass/color.scss';
            @import '../assets/sass/function.scss';
            flex-shrink: 0;
            height: 71px;
            list-style: none;
            width: 100%;
            @include flex;
            .left{
                flex-shrink: 0;
                width: 44px;
                height: 44px;
                overflow: hidden;
                border-radius: 5px;
                margin:0 16px;
                img{
                    width: 44px;
                }
            }
            .right{
                max-width: calc(100% - 76px);
                overflow: hidden;
                height: 100%;
                flex-grow: 1;
                flex-shrink: 1;
                border-bottom: 1px solid $line-color;
                padding-right: 16px;

                margin-bottom: 8px;
                @include flex(column,center);
                .up{
                    @include flex;
                    .uLeft{
                        font-size: 1rem;
                    }
                    .uRight{
                        font-size: 0.5rem;
                        color: $content-color;
                    }

                }
                .down{
                    font-size: 0.7rem;
                    width: 100%;
                    color: $content-color;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-wrap: inherit;
                    white-space: nowrap;
                }
            }
        }
</style>