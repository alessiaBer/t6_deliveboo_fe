<script>
import axios from 'axios';
import SlideBanner from "../components/SlideBanner.vue";

export default {
  name: "HomeView",
  components: {
    SlideBanner
  },
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
    //   getImage(path) {
    //       return this.base_API + path;
    //     }
    getRestaurants(type) {
      console.log(type);
      const url = this.base_API + "api/types/" + type
      axios
        .get(url)
        .then((response) => {
          this.restaurants = response.data.result.restaurants
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        })
    }
  },
  mounted() {
    const url = this.base_API + "api/types";
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.types = response.data.results;
        //  if (response.data.success) {
        //   this.types = response.data.results;
        //  } else {
        //    this.$router.push({
        //     name: "NotFound",
        //     params: { pathMatch: this.$route.path.substring(1).split("/") },
        //     query: this.$route.query,
        //     hash: this.$route.hash,
        //   });
        // }
      })
      .catch((error) => {
        console.log(error);
        this.error = error.message;
      });
  },
};
</script>

<template>
  <section class="aboutme">
    <div class="container my-5">
      <h2>Home</h2>
      <div class="container">
        <select class="form-select w-25 my-5" name="" id="" @click="getRestaurants(selectedType)" v-model="selectedType">
          <option value="">diocan</option>
          <option :value="tipo.slug" v-for="tipo in types">
            {{ tipo.name }}
          </option>
        </select>
        <div class="row row-cols-1 row-cols-lg-2" v-if="restaurants != []">
          <div class="g-3" v-for="restaurant in restaurants">
            <div class="card">
              <img class="card-img-top" :src="restaurant.image_url" alt="Card image cap" />
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">{{ restaurant.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideBanner></SlideBanner>
  </section>
</template>

<style lang="scss" scoped></style>
