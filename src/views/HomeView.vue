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
      selectedType: "",
    };
  },
  methods: {
    getRestaurants(type) {
      console.log(type);
      const url = this.base_API + "api/types/" + type;
      axios
        .get(url)
        .then((response) => {
          this.restaurants = response.data.result.restaurants;
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
  },
  mounted() {
    const url = this.base_API + "api/types";
    console.log(url);
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
  },
};
</script>

<template>
  <BannerHome></BannerHome>
  <section class="aboutme">
    <div class="container my-5">
      <div class="container">
        <h2>Select the restaurant Type</h2>

        <select
          class="form-select w-25 my-5"
          name=""
          id=""
          @click="getRestaurants(selectedType)"
          v-model="selectedType"
        >
          <option value="">Select Type</option>

          <option :value="tipo.slug" v-for="tipo in types">
            {{ tipo.name }}
          </option>
        </select>

        <div class="row row-cols-3">
          <div class="col">
            <a href="#" class="">
              <div class="card text-bg-dark">
                <img
                  src="https://www.uppa.it/wp-content/uploads/2019/12/bambini-vegetariani-vegani-950x545.jpg"
                  class="card-img"
                  alt="veggie"
                />
                <div class="card-img-overlay d-flex justify-content-center ">
                  <h5 class="card-title align-self-center">Vegetariano</h5>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-lg-2" v-if="restaurants != []">
          <div class="g-3" v-for="restaurant in restaurants">
            <div class="card">
              <img
                class="card-img-top"
                :src="base_API + 'storage/' + restaurant.image_url"
                alt="Card image cap"
              />
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">{{ restaurant.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.card{
  height: 200px;
  img{
    height: 100%;
    object-fit: cover;
  }
}
.aboutme {
  margin-top: 10%;
}
</style>
