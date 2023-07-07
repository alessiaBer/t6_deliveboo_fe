<script>
import axios from "axios";

import BannerHome from "../components/BannerHome.vue";

export default {
  name: "HomeView",
  components: { BannerHome },
  data() {
    return {
      types: [],
      base_API: "http://127.0.0.1:8000/",
      error: null,
      restaurants: [],
      selectedTypes: [],
      cardsOC: [
        {
          title: "Vegetarian",
          imageUrl:
            "https://www.uppa.it/wp-content/uploads/2019/12/bambini-vegetariani-vegani-950x545.jpg",
        },
        {
          title: "Fast Food",
          imageUrl:
            "https://images-ext-1.discordapp.net/external/u1ZpXY6NzZbkLNiBsBKrq6BM_CavE8IXnGo83oWBNg0/%3Fw%3D274%26h%3D182%26c%3D7%26r%3D0%26o%3D5%26pid%3D1.7/https/th.bing.com/th/id/OIP.domIGicN95Kx8qQYxsbVWgHaE8?width=219&height=145",
        },
        {
          title: "Pizza",
          imageUrl:
            "https://images-ext-1.discordapp.net/external/6izWNzLqPO4DRCmvzx8pqweyIXEgO5k7sOk5XxSsWUo/https/mangiare.moondo.info/files/2018/02/impasto-pizza-bimby.jpg?width=768&height=512",
        },
        {
          title: "Japan",
          imageUrl:
            "https://images-ext-2.discordapp.net/external/7nuBLGnFfQUSUwVP8Ga_qA1nPnInE8ERh7rhmA5uy7c/%3Frik%3DWyegoP7fHC3xPA%26riu%3Dhttp%253a%252f%252fwww.ilgiornaledelcibo.it%252fwp-content%252fuploads%252f2017%252f10%252fsushi.jpg%26ehk%3DOEg1m3CL3XLMmTXspkkqKWX4czHCogXeSuytxXuiIpg%253d%26risl%3D%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.1e2f57d973f5e91b9f50fa479d0c0eaa?width=716&height=400",
        },
        {
          title: "Chinese",
          imageUrl:
            "https://images-ext-2.discordapp.net/external/VUIS6rRHdEz28xB5d_abhInO_QUINhpDS8njz5ocpwE/%3Frik%3DmtGeFCjNDx2E%252bA%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.7ebe5e36c4f8a7d1dbc7548f1b4a6f1e?width=760&height=547",
        },
        {
          title: "Kebabs",
          imageUrl:
            "https://media.discordapp.net/attachments/1122813704371703808/1126515420669690017/i108058-kebab-sans-gluten.png?width=528&height=528",
        },
        {
          title: "Restaurants",
          imageUrl:
            "https://images-ext-2.discordapp.net/external/yZF7QPxsRkjOfWKLozBVBv9T0sBLVbCtOdliKoVRzq4/https/media-cdn.tripadvisor.com/media/photo-s/09/d2/6d/09/cibo-ristorante-italiano.jpg?width=440&height=293",
        },
        {
          title: "Trattoria",
          imageUrl:
            "https://images-ext-1.discordapp.net/external/Y2jLZmRaTH1CNTIfXzPSwdrvrxBds280H3bVf4EXBxo/%3Frik%3DprjrMIVgVsNb%252bQ%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.b40d7b0e560b3c7ec2ce8b39e32b6672?width=512&height=341",
        },
        {
          title: "Fish",
          imageUrl:
            "https://images-ext-2.discordapp.net/external/__Zv9zHCENF7e7nOHJcXpHIb0Nc02GjV2gz8-hQHUqg/https/citynews-casertanews.stgy.ovh/~media/horizontal-mid/42814068274966/news-crudo_pesce-e1340692289431-2.jpg?width=480&height=270",
        },
      ],
    };
  },
  methods: {
    getRestaurants() {
      const url = this.base_API + "api/restaurants";
      axios
        .get(url)
        .then((response) => {
          this.restaurants = response.data.results;

          if (this.selectedTypes.length > 0) {
            this.restaurants = this.restaurants.filter((restaurant) => {
              return restaurant.types.some((type) => {
                return this.selectedTypes.includes(type.slug);
              });
            });
          }

          console.log(this.restaurants);
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },


  },
  mounted() {
    const url = this.base_API + "api/types";
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.types = response.data.results;
      })
      .catch((error) => {
        console.log(error);
        this.error = error.message;
      });

    this.getRestaurants();
  },
  watch: {
    selectedTypes: {
      handler() {
        this.getRestaurants();
      },
      deep: true
    }
  },
};
</script>

<template>
  <BannerHome></BannerHome>

  <section class="aboutme">
    <div class="container my-5">
      <div class="container">
        <h2>Select the restaurant Type</h2>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop">
          Types
        </button>

        <div class="form-check col" v-for="tipo in types" :key="tipo.id">
          <label class="form-check-label">
            {{ tipo.name }}
            <input class="form-check-input" v-model="selectedTypes" type="checkbox" :value="tipo.slug" />
          </label>
        </div>



        <div class="offcanvas offcanvas-top h-75 m-5 rounded" tabindex="-1" id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">
              Select your Type
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="container">
              <div class="row row-cols-3 g-4 cards">
                <div class="col" v-for="(card, index) in cardsOC" :key="index">
                  <a href="#" class="">
                    <div class="card text-bg-dark">
                      <img :src="card.imageUrl" class="card-img" alt="veggie" />
                      <div class="card-img-overlay d-flex justify-content-center">
                        <h5 class="card-title align-self-center">
                          {{ card.title }}
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-lg-2" v-if="restaurants.length > 0">
          <div class="g-3" v-for="restaurant in restaurants">
            <div class="card">
              <img class="card-img-top" :src="base_API + 'storage/' + restaurant.image_url" alt="Card image cap" />
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">{{ restaurant.name }}</h4>
              </div>
              <router-link :to="{
                name: 'single-restaurant',
                params: { slug: restaurant.slug },
              }" class="nav-link">
                More info
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards .card {
  height: 150px;

  img {
    height: 100%;
    object-fit: cover;
  }
}

.aboutme {
  margin-top: 10%;
}
</style>
