<template>
  <div id="app">
    <Hearder/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import Footer from '@/components/Footer'
export default {
  components:{
    Hearder,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  max-width: 100%;
}
</style>
