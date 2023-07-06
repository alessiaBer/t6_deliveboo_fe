<script>
import { RouterLink } from "vue-router";
import { store } from "../store";

export default {
  name: "MenuView",
  components: { RouterLink },

  data() {
    return {
      store,
    };
  },

  mounted() {
    store.displayMenu(this.$route.params.slug);
  },
};
</script>
<template>
  <div class="container">
    <template v-if="store.restaurant">
      <h1>{{ store.restaurant.name }}</h1>
      <p>{{ store.restaurant.address }}</p>
      <p>{{ store.restaurant.description }}</p>

      <h2>Plates:</h2>
      <ul>
        <li v-for="plate in store.plates" :key="plate.id">
          <h3>{{ plate.name }}</h3>
          <p>{{ plate.description }}</p>
        </li>
      </ul>
    </template>
  </div>
</template>

<style lang="scss"></style>
