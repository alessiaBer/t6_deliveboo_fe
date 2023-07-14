<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "WorkWithUs",
  data() {
    return {
      cards: [
        {
          title: "Rider",
          description:
            "Diventa un rider: flessibilità, ottimi guadagni e un mondo di vantaggi per te.",
          buttonText: "Unisciti a noi",
          imageUrl: "https://cwa.roocdn.com/_next/static/riders.90e61988.jpg",
          color: "my-card-red",
        },
        {
          title: "Ristoranti",
          description:
            "Diventa partner di Deliveroo e raggiungi sempre più clienti. Ci occupiamo noi della consegna, così che la tua unica preoccupazione sia continuare a preparare il miglior cibo.",
          buttonText: "Diventa nostro partner",
          imageUrl:
            "https://cwa.roocdn.com/_next/static/restaurants.3db91a35.jpg",
          color: "my-card-orange",
        },
        {
          title: "Lavora con noi",
          description:
            "La nostra missione è trasformare il modo in cui le persone mangiano. È un obiettivo ambizioso, come noi, e ci servono persone che ci aiutino a raggiungerlo.",
          buttonText: "Scopri di più",
          imageUrl: "https://cwa.roocdn.com/_next/static/team.d18fbb67.jpg",
          color: "my-card-grey",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const slide = this.$refs.slide;

    gsap.from(slide, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>


<template>
  <div class="my-container py-5">
    <div class="container" ref="slide">
      <h1 class="my-4 text-uppercase text-center">Lavora con Deliveboo</h1>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(card, index) in cards" :key="index" class="col">
          <div :class="`card ${card.color}`">
            <img
              :src="card.imageUrl"
              alt="Card image cap"
              class="card-img-top"
            />
            <div class="card-body">
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-text">{{ card.description }}</p>
              <a href="#" class="btn btn-primary">{{ card.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  background-color: rgb(255, 218, 224);
}

.card {
  border: none;
  border-radius: 0;
  color: white !important;
  height: 100%;

  a {
    background-color: #00cdbb;
    border: none;
    border-radius: 0;
  }
}

.my-card-grey {
  background-color: #bac2c4;
}

.my-card-orange {
  background-color: #fe8100;
}

.my-card-red {
  background-color: #ff473b;
}
</style>
