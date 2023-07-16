<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    verify() {
      const braintree = store.braintree();
      if (braintree) {
        store.paymentValidated = true;
      }
    },
  },
  mounted() {
    store.returnIds();
    store.calcTotPrice();
    store.braintree();
    //console.log(store.restaurant);
  },
};
</script>

<template>
  <div class="container py-5">
    <div
      class="card border-0 rounded-0 shadow mb-5"
      v-if="store.cartItemCount > 0"
    >
      <div class="card-body">
        <h4 class="card-title">Cart Summary</h4>
        <ul class="list-group">
          <li
            class="list-group-item d-flex align-items-center"
            v-for="item in store.cart"
            :key="item.id"
          >
            <div class="image">
              <img
                :src="'http://127.0.0.1:8000/storage/' + item.image_url"
                alt=""
              />
            </div>
            <div class="ms-4 fs-5">{{ item.name }} - {{ item.price }}€</div>
          </li>
        </ul>
        <div class="mt-4">
          <h4>Total Price : {{ store.totalPrice }}€</h4>
        </div>
      </div>
    </div>

    <div
    class="card border-0 rounded-0 shadow my-5 text-center py-3 bg_pink"
    v-if="store.cartItemCount === 0"
    >
    <h1 class="text-uppercase">order successfully sent!</h1>
    <p>Check your email for order summary!</p>
    <div class="text-center">
      <router-link
      class="btn btn-primary bg-dark w-25 text-light border-0 rounded-0 my-3"
      :to="{ name: 'home' }"
      >Home</router-link
      >
    </div>
  </div>
  
  <form
  @submit.prevent="store.postOrder(), store.postMail(), store.resetCart()" class="border-0 rounded-0 shadow p-3"
  v-else
  >
  <h2 class="text-uppercase text-center my-4">Make your Order!</h2>
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          type="text"
          class="form-control"
          name="fullname"
          id="fullname"
          v-model="store.fullname"
          placeholder="John Doe"
          required
        />
        <label for="fullname" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          v-model="store.address"
          placeholder="Via Parini 6"
          required
        />
        <label for="phone" class="form-label">Phone</label>
        <input
          type="number"
          class="form-control"
          name="phone"
          id="phone"
          v-model="store.phone"
          placeholder="+39 347 77 77 777"
          required
        />
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            v-model="store.email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div id="dropin-wrapper">
          <div id="checkout-message"></div>
          <div id="dropin-container"></div>
          <!-- <button id="submit-button">Submit payment</button> -->
        </div>

        <button
          class="btn btn-outline-dark d-block mt-4"
          :class="store.paymentValidated == false ? 'disabled' : ''"
        >
          Confirm
        </button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}

.bg_pink {
  background-color: rgb(255, 218, 224) !important;
}

.image {
  height: 100px;
  width: 100px;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
