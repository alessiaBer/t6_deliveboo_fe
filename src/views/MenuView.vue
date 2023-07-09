<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import Cart from "../components/Cart.vue";

export default {
  name: "MenuView",
  components: { RouterLink, Cart },

  data() {
    return {
      store,
    };
  },

  methods: {},

  mounted() {
    store.displayMenu(this.$route.params.slug);
  },
};
</script>
<template>
  <div class="jumbo p-5 mb-4 bg-body-tertiary" v-if="store.restaurant" :style="{
    backgroundImage: `url(${store.base_api + 'storage/' + store.restaurant.image_url
      })`,
  }">
    <div class="container-fluid py-5">
      <div class="cardJumbo">
        <h1 class="display-5 fw-bold">{{ store.restaurant.name }}</h1>
        <p class="fs-4">
          {{ store.restaurant.address }}
        </p>
        <hr class="fs-4" />
        <p>
          {{ store.restaurant.description }}
        </p>
        <p>
          {{ store.restaurant.phone }}
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <h2>Plates:</h2>
    <div class="row">
      <div class="col-4" v-for="plate in store.plates" :key="plate.id">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="plate.image_url" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ plate.name }}</h5>
                <p class="card-text">
                  {{ plate.description }}
                </p>
                <div class="d-flex justify-content-between">
                  <div class="text-body-secondary">{{ plate.price }}€</div>
                  <button class="btn btn-primary" @click="store.addToCart(plate)">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Cart />
</template>

<style lang="scss" scoped>
.jumbo {
  background-size: cover;
  background-position: center;
  color: rgb(253, 253, 253);

  .cardJumbo {
    background-color: rgba($color: #000000, $alpha: 0.7);
    color: white;
    border: none;
    padding: 1rem;
    width: fit-content;
  }
}

.card {
  height: 220px;

  img {
    object-fit: cover;
    height: 220px;
  }
}
</style>
