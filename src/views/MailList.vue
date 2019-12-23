<template>
  <div class="MailList">
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
import axios from "axios"
// import { access } from 'fs'

export default {
  components: {
    Top,Foot,MenuPage
  },
  data(){
    return {
      topRight : ["&#xe617;","&#xe627;"],
      topLeft :  "通讯录",
      active : 1,
      dataList :[
        [
          {img: "../img/newFriend.jpeg",iconfont:' ',text: "新的朋友",},
          {img: "../img/grounpChat.png",iconfont:' ',text: "群聊",},
          {img: "../img/trag.png",iconfont:' ',text: "标签",},
          {img: "../img/pub.png",iconfont:' ',text: "公众号",},

        ],
        [
      

        ],


      ],
      division :["null",""]
    }
  },
  mounted(){
    axios.request({
      baseURL: "http://localhost:8081/",
      url: "/friend?token="+localStorage.getItem("token"),
      methods: "get",
    }).then((res)=>{
      var list = res.data.data
      for(var i in list){
        var item = {img: list[i].avatar, iconfont:' ',text: list[i].nickname, id: list[i].friend_id}
        this.dataList[1].push(item)
      }
    })
  }
 
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/color.scss';
  @import '../assets/sass/function.scss';
  .MailList{
    height: 100%;
    @include flex(column);
  }
  
</style>
