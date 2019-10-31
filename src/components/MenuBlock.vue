<template>
    <div class="block">
        <ul>
            <Menu v-for="(item, index) in msgs" :key="index" :msg="item"></Menu>
        </ul>
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
    components: {
        Menu
    },
    props: ["msgs"]
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/color.scss';
    @import '../assets/sass/function.scss';
    .block{
    background-color: #fff;
        ul{
            width: 100%;
            & .list:last-of-type .right{
                border: none;
            }
        }
    }
</style>