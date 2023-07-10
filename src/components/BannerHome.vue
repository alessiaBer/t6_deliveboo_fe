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
  <div class="parallax-container">
    <div class="parallax">
      <div class="container">
        <div class="row my_banner align-items-center">
          <div>
            <h1>DELIVEROO</h1>
            <h3>Taste without borders</h3>
            <h3>Explore the world of flavours with us!</h3>
            <a href="" class="btn btn-light my_button">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 class="mt-5 container">Don't miss out on the latest entries!</h2>
  <SlideBanner></SlideBanner>
</template>

<style lang="scss" scoped>
.my_banner{
  color: white;
  h1{
    font-size: 5rem;
  }
  h3{
    font-size: 2.5rem;
  }
  .my_button{
    width: fit-content;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
}
.parallax-container {
  position: relative;
  height: 700px;
  overflow: hidden;
}

.parallax {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('../../public/assets/imgs/banner2.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .container{
    height: 100%;
    .row{
      height:100%;
    }
  }
}
</style>
