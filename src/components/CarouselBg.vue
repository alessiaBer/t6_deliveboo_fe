<script>
export default {
  name: "CarouselBg",

  data() {
    return {
      activeImage: 0,
      autoplay: null,
      slides: [
        {
          id: 1,
          image: "assets/imgs/slide1.jpg",
        },
        {
          id: 2,
          image: "assets/imgs/slide2.jpg",
        },
        {
          id: 3,
          image: "assets/imgs/slide3.jpg",
        },
        {
          id: 4,
          image: "assets/imgs/slide4.jpg",
        },
        {
          id: 5,
          image: "assets/imgs/slide5.jpg",
        },
        {
          id: 6,
          image: "assets/imgs/slide6.jpg",
        },
      ],
    };
  },
  methods: {
    setAutoplay() {
      this.autoplay = setInterval(() => {
        this.nextImage();
      }, 8000);
    },
    nextImage() {
      this.activeImage === this.slides.length - 1
        ? (this.activeImage = 0)
        : this.activeImage++;
    },
  },
  mounted() {
    this.setAutoplay();
  },
};
</script>

<template>
  <div class="carousel-background">
    <div
      class="carousel-slide"
      :style="{ backgroundImage: `url(${slides[activeImage].image})` }"
      :key="slides[activeImage].id"
      v-show="slides.length > 0"
    ></div>
  </div>
</template>

<style scoped>
.carousel-background {
  width: 100%;
  height: 400px;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
