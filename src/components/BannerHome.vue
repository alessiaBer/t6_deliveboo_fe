<script>
import SlideBanner from "../components/SlideBanner.vue";

export default {
  name: "BannerHome",
  components: {
    SlideBanner
  },

  data() {},

};
</script>

<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
    </div>
    <SlideBanner></SlideBanner>
  </div>
</template>

<style lang="scss" scoped>
  .jumbotron{
    background-image: url('../../public/assets/imgs/deliveroobanner1.png');
    background-size: cover;
  }
</style>
