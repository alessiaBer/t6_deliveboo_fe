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
              src: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2018/09/linguine-con-baccala-uvetta-e-cavolo-nero/_jcr_content/header-par/image-single.img.jpg/1537476252847.jpg",
              alt: "image",
            },
            {
              id: 2,
              src: "https://i0.wp.com/magazine.tognana.com/wp-content/uploads/2018/06/pizza-pomodorini-basilico-mozzarella-olive-funghi.jpg?fit=1500%2C1000&ssl=1",
              alt: "image",
            },
            {
              id: 3,
              src: "https://www.ohehirs.ie/wp-content/uploads/2020/04/lasagne-low-res.jpg",
              alt: "image",
            },
            {
              id: 4,
              src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Assortment_of_sushi,_May_2010.jpg",
              alt: "image",
            },
            {
              id: 5,
              src: "https://th.bing.com/th/id/R.4f51ed8f29d0dcf1435f8414242d8f4c?rik=YZltcFrS3nWjBA&riu=http%3a%2f%2fwww.guiaderecetas.com%2fstatic%2fimages%2freceta%2fpollo-teriyaki.jpg&ehk=2MAbQYFriYM41KokHlI6TM3mwsWi79dFB9Domi6na%2fQ%3d&risl=&pid=ImgRaw&r=0",
              alt: "image",
            },
            {
              id: 6,
              src: "https://th.bing.com/th/id/OIP.I7clKkKmf-Vukv8Ob278oAHaE_?pid=ImgDet&rs=1",
              alt: "image",
            },
            {
              id: 7,
              src: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2018/09/linguine-con-baccala-uvetta-e-cavolo-nero/_jcr_content/header-par/image-single.img.jpg/1537476252847.jpg",
              alt: "image",
            },
            {
              id: 8,
              src: "https://i0.wp.com/magazine.tognana.com/wp-content/uploads/2018/06/pizza-pomodorini-basilico-mozzarella-olive-funghi.jpg?fit=1500%2C1000&ssl=1",
              alt: "image",
            },
            {
              id: 9,
              src: "https://www.ohehirs.ie/wp-content/uploads/2020/04/lasagne-low-res.jpg",
              alt: "image",
            },
            {
              id: 10,
              src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Assortment_of_sushi,_May_2010.jpg",
              alt: "image",
            },
            {
              id: 11,
              src: "https://th.bing.com/th/id/R.4f51ed8f29d0dcf1435f8414242d8f4c?rik=YZltcFrS3nWjBA&riu=http%3a%2f%2fwww.guiaderecetas.com%2fstatic%2fimages%2freceta%2fpollo-teriyaki.jpg&ehk=2MAbQYFriYM41KokHlI6TM3mwsWi79dFB9Domi6na%2fQ%3d&risl=&pid=ImgRaw&r=0",
            },
            {
              id: 12,
              src: "https://th.bing.com/th/id/OIP.I7clKkKmf-Vukv8Ob278oAHaE_?pid=ImgDet&rs=1",
              alt: "image",
            },
          ],
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              src: "https://www.routot.fr/wp-content/uploads/2018/08/lille-capitale-kebab-moins-cher-formation1.jpg",
              alt: "image",
            },
            {
              id: 2,
              src: "https://th.bing.com/th/id/OIP.1pNidZSjz607wBF20lZVfwHaGt?pid=ImgDet&rs=1",
              alt: "image",
            },
            {
              id: 3,
              src: "https://www.piudonna.it/wp-content/uploads/2020/10/IMG_20200929_122226.jpg",
              alt: "image",
            },
            {
              id: 4,
              src: "https://www.piuricette.it/wp-content/uploads/2021/01/IMG_20201206_123844-770x450.jpg",
              alt: "image",
            },
            {
              id: 5,
              src: "https://www.mangiarebuono.it/wp-content/uploads/2015/06/alici-alla-scapece.jpg",
              alt: "image",
            },
            {
              id: 6,
              src: "https://images.lacucinaitaliana.it/wp-content/uploads/2015/07/Bistecca-alla-fiorentina.jpg",
              alt: "image",
            },
            {
              id: 7,
              src: "https://www.routot.fr/wp-content/uploads/2018/08/lille-capitale-kebab-moins-cher-formation1.jpg",
              alt: "image",
            },
            {
              id: 8,
              src: "https://th.bing.com/th/id/OIP.1pNidZSjz607wBF20lZVfwHaGt?pid=ImgDet&rs=1",
              alt: "image",
            },
            {
              id: 9,
              src: "https://www.piudonna.it/wp-content/uploads/2020/10/IMG_20200929_122226.jpg",
              alt: "image",
            },
            {
              id: 10,
              src: "https://www.piuricette.it/wp-content/uploads/2021/01/IMG_20201206_123844-770x450.jpg",
              alt: "image",
            },
            {
              id: 11,
              src: "https://www.mangiarebuono.it/wp-content/uploads/2015/06/alici-alla-scapece.jpg",
              alt: "image",
            },
            {
              id: 12,
              src: "https://images.lacucinaitaliana.it/wp-content/uploads/2015/07/Bistecca-alla-fiorentina.jpg",
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

.slide .row:nth-child(2) {
  transform: translateX(-150px);
}

.slide img {
  border-radius: 1rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
  opacity: 0.9;
  transition: all 1s;
  filter: saturate(1);
  transform: scale(0.95);
}

.slide img:hover {
  filter: saturate(1.2);
  transform: scale(1.05);
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
