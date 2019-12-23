<template>
  <div class="home">
    <Top v-bind:left="topLeft" v-bind:right="topRight" leftIconfond="null"></Top>
    <MsgBox :msgs="msgs"  @goChat="goChat"></MsgBox>
    <Foot :active="active"></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Foot from '@/components/Foot.vue'
import MsgBox from '@/components/MsgBox.vue'
import axios from 'axios'

export default {
  components: {
    Top,Foot,MsgBox
  },
  data(){
    return {
      topRight : ["&#xe617;","&#xe627;"],
      topLeft :  "微信",
      active : 0,
      msgs : [
 
      ]
    }
  },
  methods: {
    goChat(val){
      this.$router.push({path: "/chat",query: val})
      console.log(this.$router)
    },
    getUnreadList(){
      axios.request({
        baseURL: "http://localhost:8081/",
        url: 'measure/unread?token='+localStorage.getItem("token"),
        methods: 'get', 
      }).then((res)=>{
        if(res.data.code!=0){
          this.$router.push("/login")
        }
        
        var list = res.data.data
        for(var i in list){
          var newTime = list[i].latest_time.split(".")[0]
          var item = {username: list[i].nickname, img: list[i].avatar, content : list[i].count+"条未读消息", time: newTime, targetId : list[i].send_id}
          this.msgs.push(item)
        }
        console.log(this.msgs)
      })
    }
  },

  mounted(){
    this.getUnreadList()
  },
  
}
</script>
<style lang="scss" scoped>
    .home{
      flex-grow: 1;
      @import '../assets/sass/color.scss';
      @import '../assets/sass/function.scss';
      height: 100%;
      @include flex(column);
    }
</style>