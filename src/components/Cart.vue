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
}
};
</script>
<template>
  <div
    id="button"
    @mouseenter="toggleShake"
    @mouseleave="toggleShake"
    class="text-center"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
  >
    <font-awesome-icon
      :icon="['fas', 'cart-shopping']"
      v-show="shake === false"
    />
    <font-awesome-icon
      :icon="['fas', 'cart-shopping']"
      shake
      v-show="shake === true"
    />
  </div>

  <div
    class="offcanvas offcanvas-end w-50"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#button {
  background-color: grey;
  color: white;
  box-shadow: 0 0 5px greenyellow;
  padding: 0.5rem;
  border-radius: 4px;
  position: fixed;
  top: 150px;
  right: 20px;
  transition: all 0.3s;
  z-index: 15;
  p {
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }
}

#button:hover {
  cursor: pointer;
  background-color: green;
  color: black;
}

#button:active {
  background-color: #555;
}
</style>
