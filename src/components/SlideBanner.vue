<script>
export default {
  name: "SlideBanner",

  data() {
    return {
      slideData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              src: "https://picsum.photos/300/300?image=898",
              alt: "image",
            },
            {
              id: 2,
              src: "https://picsum.photos/300/300?image=889",
              alt: "image",
            },
            {
              id: 3,
              src: "https://picsum.photos/300/300?image=910",
              alt: "image",
            },
            {
              id: 4,
              src: "https://picsum.photos/300/300?image=911",
              alt: "image",
            },
            {
              id: 5,
              src: "https://picsum.photos/300/300?image=912",
              alt: "image",
            },
            {
              id: 6,
              src: "https://picsum.photos/300/300?image=913",
              alt: "image",
            },
            {
              id: 7,
              src: "https://picsum.photos/300/300?image=898",
              alt: "image",
            },
            {
              id: 8,
              src: "https://picsum.photos/300/300?image=889",
              alt: "image",
            },
            {
              id: 9,
              src: "https://picsum.photos/300/300?image=910",
              alt: "image",
            },
            {
              id: 10,
              src: "https://picsum.photos/300/300?image=911",
              alt: "image",
            },
            {
              id: 11,
              src: "https://picsum.photos/300/300?image=912",
              alt: "image",
            },
            {
              id: 12,
              src: "https://picsum.photos/300/300?image=913",
              alt: "image",
            },
          ],
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              src: "https://picsum.photos/300/300?image=898",
              alt: "image",
            },
            {
              id: 2,
              src: "https://picsum.photos/300/300?image=889",
              alt: "image",
            },
            {
              id: 3,
              src: "https://picsum.photos/300/300?image=910",
              alt: "image",
            },
            {
              id: 4,
              src: "https://picsum.photos/300/300?image=911",
              alt: "image",
            },
            {
              id: 5,
              src: "https://picsum.photos/300/300?image=912",
              alt: "image",
            },
            {
              id: 6,
              src: "https://picsum.photos/300/300?image=913",
              alt: "image",
            },
            {
              id: 7,
              src: "https://picsum.photos/300/300?image=898",
              alt: "image",
            },
            {
              id: 8,
              src: "https://picsum.photos/300/300?image=889",
              alt: "image",
            },
            {
              id: 9,
              src: "https://picsum.photos/300/300?image=910",
              alt: "image",
            },
            {
              id: 10,
              src: "https://picsum.photos/300/300?image=911",
              alt: "image",
            },
            {
              id: 11,
              src: "https://picsum.photos/300/300?image=912",
              alt: "image",
            },
            {
              id: 12,
              src: "https://picsum.photos/300/300?image=913",
              alt: "image",
            },
          ],
        },
      ],
    };
  },

  mounted() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
      column.style.setProperty("--animation", "slide");
      column.style.setProperty("height", "200%");
      column.innerHTML = column.innerHTML + column.innerHTML;
    });
  },
};
</script>

<template>
  <section class="slider">
    <div class="slide">
      <div v-for="row in slideData" :key="row.id" class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mb-1">
        <div v-for="image in row.images" :key="image.id" href="#" class="col p-1">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.slider {
  background-color: rgba(0, 0, 0, 0);
}

.slide {
  animation: scroll 20s linear infinite;
}

.slide .row {
  flex-wrap: nowrap;
}

.slide img {
  border-radius: 1rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
  opacity: 0.9;
  transition: all 1s;
  filter: saturate(1);
  transform: scale(1);
}

.slide img:hover {
  filter: saturate(2);
  transform: scale(1.1);
  opacity: 1;
}

.slide img {
  max-width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  transition: opacity 0.2s;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
