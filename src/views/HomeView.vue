<script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      restaurants: [],
      base_API: "http://127.0.0.1:8000/",
      error: null,
    };
  },
  // methods:{
  //   getImage(path) {
  //       return this.base_API + path;
  //     }
  // },
  mounted() {
    const url = this.base_API + "api/restaurants";
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.restaurants = response.data.results;
        //  if (response.data.success) {
        //   this.restaurants = response.data.results;
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
      <div class="row row-cols-1 row-cols-lg-2">
        <div
          class="g-3"
          v-for="restaurant in restaurants"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="restaurant.image_url"
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
