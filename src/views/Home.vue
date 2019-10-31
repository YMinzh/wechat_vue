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
        {username:"张三" , img:"../img/touxiang.jpeg",content: "你好呀啊哈哈哈哈",time: "11.11"},
        {username:"李四" , img:"../img/touxiang2.jpeg",content: "你好呀",time: "11.11"},
        {username:"王五" , img:"../img/touxiang3.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
        {username:"王五" , img:"../img/touxiang.jpeg",content: "肯定就疯狂点击付款贷款及罚款的骄傲",time: "11.11"},
      ]
    }
  },
  methods: {
    goChat(val){
      this.$router.push({path: "/chat",query: val})
      console.log(this.$router)
    }
  }
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