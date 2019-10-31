<template>
  <div id="app">

    <router-view/>
  </div>
</template>

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
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
