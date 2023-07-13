<script>
export default {
  name: "Contacts",

  data() {
    return {
      ale: {
        name: "ALESSIA BERTINATO",
        imgUrl: "/AleContact.png",
        links: {
          linkedin: "https://www.linkedin.com/in/alessia-bertinato/",
          github: "https://github.com/alessiaBer",
        },
      },
      cards: [
        {
          name: "LUCA RANIERI",
          imgUrl: "/LucaContact.png",
          links: {
            linkedin: "https://www.linkedin.com/in/lucaranieri/",
            github: "https://github.com/LucaRanieri96",
          },
        },
        {
          name: "SIMONE BACALONI",
          imgUrl: "/BacaContact.png",
          links: {
            linkedin: "https://www.linkedin.com/in/simone-bacaloni-930630280/",
            github: "https://github.com/SimoneBaca",
          },
        },
        {
          name: "FABRIZIO GUORIGLIA",
          imgUrl: "/FabriContact.png",
          links: {
            linkedin: "https://www.linkedin.com/in/fabrizio-guariglia/",
            github: "https://github.com/Fabrizio1919",
          },
        },
        {
          name: "PAOLO ZAMPA",
          imgUrl: "/PaoloContact.png",
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
    <h2 class="text-center text-light stroke">Team Leader</h2>
    <div class="row row-cols-1 row-cols-md-2 justify-content-center">
      <div class="col mb-2">
        <div class="card my_card" :style="{'background-image' : 'url('+'../assets/imgs' + ale.imgUrl+')' }">
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
    <h2 class="text-center text-dark stroke">Team Members</h2>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-2" v-for="card in cards">

        <div class="card my_card" :style="{'background-image' : 'url('+'../assets/imgs' + card.imgUrl+')' }">
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
  height: 600px;
  background-size: cover;
}
.orientation{
  -webkit-text-stroke: 0.5px rgb(255, 255, 255);
  // background-color: rgba($color: #000000, $alpha: 0.5);
  text-shadow: 2px 2px 3px #000000;
  width: fit-content;
  padding: 2px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -6px;
  writing-mode:vertical-lr;
  text-orientation: upright;
  color: white;
}.stroke{
  font-size: 3rem;
  -webkit-text-stroke: 0.5px white;
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
