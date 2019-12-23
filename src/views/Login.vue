<template>
    <div class="login">
        <Top v-bind:left="topLeft" v-bind:right="topRight" leftIconfond="null"></Top>
        <div style="height: 100%; width: 100%;"></div>
         <b-form-input v-model="username" placeholder="Enter your username"></b-form-input>
        <div style="height: 30%; width: 100%;"></div>
         <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input>
        <div style="height: 30%; width: 100%;"></div>
        <b-row>
            <b-col cols="5"></b-col>
            <b-button variant="success" @click="commit()"> 登 录 </b-button>

        </b-row>
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import axios from 'axios'

export default {
    data(){
        return {
            username: '',
            password: '',
            topRight : ["",""],
            topLeft :  "登录",
        }
    },
    components: {
        Top
    },
    methods: {
        commit(){
            axios.request({
                method: "POST",
                baseURL: "http://localhost:8081/",
                url: "/login",
                data: {
                    username : this.username,
                    password_hash : this.password
                }
            }).then((res)=>{
                if(res.data.code == 0){
                    localStorage.setItem("token",res.data.data)
                    this.$router.push("/")                    
                }else{
                    alert(res.data.data)
                }
            })
        }
    }
}
</script>