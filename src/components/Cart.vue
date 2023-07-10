<script>
import { store } from "../store";

export default {
  name: "Cart",

  data() {
    return {
      store,
      shake: false,
    };
  },
  methods: {
    toggleShake() {
      this.shake = !this.shake;
    },
  },
  mounted() {
    store.calcTotPrice();
  },
};
</script>
<template>
  <div id="button" @mouseenter="toggleShake" @mouseleave="toggleShake" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">
    <font-awesome-icon :icon="['fas', 'cart-shopping']" v-show="shake === false" />
    <font-awesome-icon :icon="['fas', 'cart-shopping']" shake v-show="shake === true" />
    <span class="badge bg-danger my_badge" v-if="store.cartItemCount > 0">{{ store.cartItemCount }}</span>
  </div>

  <div class="offcanvas offcanvas-end m-2 shadow bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false"
    tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <div class="container" id="body">
        <div class="row">
          <div class="container">
            <h1 class="text-uppercase">Your Cart:</h1>
            <ul class="list-unstyled">
              <li v-for="item in store.cart">
                {{ item.name }}: {{ item.price }}
              </li>
            </ul>
            <h2 class="text-uppercase">Total Price:</h2>
            <h4 class="my-2" v-if="store.cart">{{ store.totalPrice }}</h4>
          </div>
          
          <div class="d-flex gap-3">
            <router-link class="btn bg_blue rounded-0 shadow" :to="{ name: 'order' }">
              Checkout
            </router-link>

            <button class="btn bg_pink rounded-0 shadow" @click="store.resetCart()">
              Reset Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#button {
  background-color: #161616;
  color: white;
  border-radius: 5px;
  padding: 0.9rem 0.9rem 0.4rem 0.9rem;
  position: fixed;
  top: 150px;
  right: 20px;
  transition: all 0.3s;
  z-index: 15;
}

#button:hover {
  cursor: pointer;
  background-color: rgb(4, 180, 165);
  color: black;
}

.my_badge {
  position: absolute;
  bottom: -30%;
  left: -30%;
  padding: 0.5rem 0.7rem;
  color: rgb(255, 255, 255);
  background-color: rgb(181, 21, 47) !important;
}

.bg_blue {
  background-color: #00CDBC !important;
}

.bg_pink {
  background-color: rgb(255, 218, 224) !important;
}
</style>
