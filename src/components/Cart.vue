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

  <div class="offcanvas offcanvas-end rounded m-2" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrolling">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <div class="container" id="body">
        <div class="row">
          <div class="container">
            <h1>Your Cart:</h1>
            <ul>
              <li v-for="item in store.cart">
                {{ item.name }}: {{ item.price }}
              </li>
            </ul>
            <h2>Total Price:</h2>
            <div v-if="store.cart">{{ store.totalPrice }}</div>
          </div>
          <button class="btn btn-danger" @click="store.resetCart()">
            Reset Cart
          </button>

          <router-link class="btn btn-primary" :to="{ name: 'order' }">
            Checkout
          </router-link>
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
</style>
