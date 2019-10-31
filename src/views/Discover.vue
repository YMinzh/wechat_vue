<template>
  <div class="Discover">
    <Top v-bind:left="topLeft" v-bind:right="topRight" leftIconfond="null"></Top>
    <MenuPage :msgblocks="dataList" :division="division"></MenuPage>
    <Foot :active="active"></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Foot from '@/components/Foot.vue'
import MenuPage from '@/components/MenuPage.vue'

export default {
  components: {
    Top,Foot,MenuPage
  },
  data(){
    return {
      topRight : ["&#xe617;","&#xe627;"],
      topLeft :  "发现",
      active : 2,
      dataList :[
        [
          {img: "../img/friend.png",iconfont:'&#xe635;',text: "朋友圈",},
        ],
        [
          {img: "../img/sao.png",iconfont:'&#xe635;',text: "扫一扫",},
          {img: "../img/yao.png",iconfont:'&#xe635;',text: "摇一摇",},
        ],
        [
          {img: "../img/look.png",iconfont:'&#xe635;',text: "看一看",},
          {img: "../img/sou.png",iconfont:'&#xe635;',text: "搜一搜",},
        ],
        [
          {img: "../img/near.png",iconfont:'&#xe635;',text: "附近的人",},
        ],
        [
          {img: "../img/shop.png",iconfont:'&#xe635;',text: "购物",},
          {img: "../img/game.png",iconfont:'&#xe635;',text: "游戏",},
        ],
        [
          {img: "../img/small.png",iconfont:'&#xe635;',text: "小程序",},
        ],

      ],
      division :["null","null","null","null","null","null"]

      
    
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/color.scss';
  @import '../assets/sass/function.scss';
  .Discover{
    height: 100%;
    @include flex(column);
  }
  
</style>