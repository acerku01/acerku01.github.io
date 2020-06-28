<template>
  <div class="home">
    <Banner/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
.list_box{
  display: flex;
  flex-wrap: wrap;
  listbox{
    width: calc((100% / 3) - 3rem);
    min-height: 300px;
    background: #ddd;
    margin: 1.5rem;
    border-radius:10px;
    padding: 2rem;
    transition: all 0.3s ease-out;
  }
}
</style>