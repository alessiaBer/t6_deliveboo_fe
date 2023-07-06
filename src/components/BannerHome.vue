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
  <div class="jumbotron">
    <div class="movedown">
      <SlideBanner></SlideBanner>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .jumbotron{
    background-image: url('../../public/assets/imgs/deliveroobanner1.png');
    background-size: cover;
  }
  .movedown{
    margin-top: 10.2%;
    margin-bottom: -11.6%;
  }
  
</style>
