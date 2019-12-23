<template>
  <div class="Personal">
    <div class="top">
      <div class="up"><i class="iconfont">&#xe620;</i></div>
            <div class="mid">
                <div class="left">
                    <img :src="avatar" alt="">
                </div>
                <div class="right">
                    <div class="rUp"><span>{{nickname}}</span></div>
                    <div class="rDown">
                        <div class="id"><span>微信号:{{username}}</span></div>
                        <div class="qr">
                            <i class="iconfont">&#xe646;</i>
                            <i class="iconfont">&#xe635;</i>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <MenuPage :msgblocks="dataList" :division="division"></MenuPage>
    <Foot :active="active"></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import Foot from '@/components/Foot.vue'
import MenuPage from '@/components/MenuPage.vue'
import axios from 'axios'

export default {
  components: {
    Foot,MenuPage
  },
  data(){
    return {
      nickname:'',
      username: '',
      avatar: '',
      active : 3,
      dataList :[
        [
          {img: "../img/friend.png",iconfont:'&#xe635;',text: "支付",},
        ],
        [
          {img: "../img/shou.png",iconfont:'&#xe635;',text: "收藏",},
          {img: "../img/photo.png",iconfont:'&#xe635;',text: "相册",},
          {img: "../img/cards.png",iconfont:'&#xe635;',text: "卡包",},
          {img: "../img/biao.png",iconfont:'&#xe635;',text: "表情",},
        ],
        [
          {img: "../img/setting.png",iconfont:'&#xe635;',text: "设置",},
        ],
      ],
      division :["null","null","null"]
      
    
    }
  },
  mounted(){
    axios.request({
      baseURL: "http://localhost:8081",
      url: "user/get?token="+localStorage.getItem("token"),
      methods: "get"
    }).then((res)=>{
      this.nickname = res.data.data.nickname
      this.avatar = res.data.data.avatar
      this.username = res.data.data.username
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/sass/color.scss';
  @import '../assets/sass/function.scss';
  .Personal{
    @include flex(column);
    height: 100%;
    .top{
        flex-shrink: 0;
        flex-grow: 0;
        width: 100%;
        background-color: #fff;
        .up{
            @include flex(row,flex-end);
            margin-top: 40px;
            .iconfont{
                margin-right: 16px;
            }
        }
        .mid{
            padding-bottom: 40px;
            margin-top: 35px;
            @include flex;
            .left{
                flex-shrink: 0;
                height: 62px;
                width: 62px;
                margin: 0 16px 0 25px;
                overflow: hidden;
                border-radius: 5px;
                img{
                    width: 62px;
                }
            }
            .right{
                width: 100%;
                height: 62px;
                flex-grow: 1;
                @include flex(column);
                .rUp{
                    width: 100%;
                    font-size: 1.6rem;
                    font-weight: bold;
                }
                .rDown{
                    @include flex;
                    color: $content-color;
                    font-size: 1rem;
                    .qr .iconfont:last-of-type{
                        margin-right: 16px;
                    }
                }
            }
        }
    }
  }
  
</style>