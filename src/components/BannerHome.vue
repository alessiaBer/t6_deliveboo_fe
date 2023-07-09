<script>
import SlideBanner from "../components/SlideBanner.vue";

export default {
  name: "BannerHome",
  components: {
    SlideBanner
  },

};
</script>

<template>
  <div class="">
    <div class="jumbotron">
      <img src="../../public/assets/imgs/banner2.jpg" alt="">
    </div>
  </div>
  <h2 class="mt-5 container">Don't miss out this latest entries!
  </h2>
  <SlideBanner></SlideBanner>
</template>

<style lang="scss" scoped>
  .jumbotron{
    img{
      width: 100%;
    }
  }
</style>
