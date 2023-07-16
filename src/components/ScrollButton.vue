<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default {
  name: "ScrollButton",
  
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleResize() {
      ScrollTrigger.refresh();
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const button = this.$refs.button;

    gsap.from(button, {
      opacity: 0,
      scrollTrigger: {
        trigger: button,
        start: "top 95%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<template>
  <a id="button" @click="scrollToTop" ref="button">
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pt-2" />
  </a>
</template>

<style scoped lang="scss">
#button {
  background-color: pink;
  color: black;
  width: 50px;
  height: 32px;
  text-align: center;
  border-radius: 4px 0 0 4px;
  position: fixed;
  right: 0px;
  bottom: 100px;
  transition: all 0.3s;
  z-index: 10;
}

#button:hover {
  cursor: pointer;
  background-color: #00cdbc;
  color: black;
}
</style>
