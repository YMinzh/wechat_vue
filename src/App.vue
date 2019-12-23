<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  #app{
    @import './assets/sass/function.scss';
    height: 100%;
    @include flex(column);
    width: 100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  body{
    font-size: 62.5%;
  }
</style>
