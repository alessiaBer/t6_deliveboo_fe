<script>
export default {
  name: "Contacts",

  data() {
    return {
      ale: {
        name: "ALESSIA BERTINATO",
        imgUrl: "https://example.com/card4.jpg",
        links: {
          linkedin: "https://www.linkedin.com/in/alessia-bertinato/",
          github: "https://github.com/alessiaBer",
        },
      },
      cards: [
        {
          name: "LUCA RANIERI",
          imgUrl: "https://example.com/card1.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/lucaranieri/",
            github: "https://github.com/LucaRanieri96",
          },
        },
        {
          name: "SIMONE BACALONI",
          imgUrl: "https://example.com/card2.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/simone-bacaloni-930630280/",
            github: "https://github.com/SimoneBaca",
          },
        },
        {
          name: "FABRIZIO GUORIGLIA",
          imgUrl: "https://example.com/card3.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/fabrizio-guariglia/",
            github: "https://github.com/Fabrizio1919",
          },
        },
        {
          name: "PAOLO ZAMPA",
          imgUrl: "https://example.com/card5.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/paolo-zampa-068b45280/",
            github: "https://github.com/PaoloZampa",
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h2 class="text-center text-light">Team Leader</h2>
    <div class="row row-cols-1 row-cols-md-2 justify-content-center">
      <div class="col mb-2">
        <div class="card my_card">
          <div class="card-img-overlay d-flex flex-column justify-content-between">
            <h2 class="card-title orientation">{{ale.name}}</h2>
            <div class="my_links ms-3">
              <a :href="ale.links[0]"><font-awesome-icon class="me-2" :icon="['fab', 'linkedin']" /></a>
              <a :href="ale.links[1]"><font-awesome-icon :icon="['fab', 'github']" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-center text-dark">Team Members</h2>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-2" v-for="card in cards">
        <div class="card my_card">
          <div class="card-img-overlay d-flex flex-column justify-content-between">
            <h2 class="card-title orientation">{{card.name}}</h2>
            <div class="my_links ms-3">
              <a :href="card.links[0]"><font-awesome-icon class="me-2" :icon="['fab', 'linkedin']" /></a>
              <a :href="card.links[1]"><font-awesome-icon :icon="['fab', 'github']" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my_card{
  height: 400px;
  background-color: #161616;
  background-size: cover;
}
.orientation{
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -6px;
  writing-mode:vertical-lr;
  text-orientation: upright;
  color: white;
}

.my_links{
  font-size: 2.5rem;
  color: white !important;
  a{
    cursor: pointer;
    transition: all 0.2s;
  }
  a:hover{
    color: pink;
  }
}

</style>
