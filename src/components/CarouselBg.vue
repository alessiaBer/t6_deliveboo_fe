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
      }, 7000);
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
    <div :class="['carousel-slide', 'fader']"
      :style="{ backgroundImage: `url(${slides[activeImage].image})` }" :key="slides[activeImage].id"
      v-show="slides.length > 0"></div>
  </div>
</template>


<style scoped lang="scss">
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

.fader {
  animation: faderEffect 7s linear;
}

@keyframes faderEffect {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
}
</style>
