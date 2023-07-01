<script>
import OffCanvas from "../components/OffCanvas.vue";
import CarouselBg from "../components/CarouselBg.vue";

export default {
  name: "WelcomeView",

  components: {
    OffCanvas,
    CarouselBg,
  },
};
</script>

<template>
  <section id="transparent">
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">The plates you love,</h1>
              <h1 class="card-title">from the restaurants you love,</h1>
              <h1 class="card-title">delivered to your doorstep.</h1>

              <div class="row mt-4">
                <div class="col d-flex">
                  <p class="card-text">
                    Order your favorite dishes with a simple click!
                  </p>
                </div>
                <div class="col ">
                  <router-link :to="{ name: 'home' }" class="card-link btn btn-primary">HOME</router-link>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col d-flex">
                  <p class="card-text align-self-center">
                    Collaborate with us as a Restaurateur!
                  </p>
                </div>
                <div class="col ">
                  <a href="http://127.0.0.1:8000/register" target="_blank" class="card-link btn btn-primary">REGISTER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <!-- <OffCanvas /> -->
        </div>
      </div>
    </div>
  </section>
  <CarouselBg class="carousel-bg" />
</template>

<style lang="scss" scoped>
*{
  p{
    margin: 0 !important;
    padding: 0 !important;
  }
}
.carousel-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.card{
  color: white;
  background-color: rgba($color: #161616, $alpha: 0.7);
}
</style>
