<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
      paymentValidated: false
    }
  },
  methods: {
    verify() {
      const braintree = store.braintree()
      if (braintree) {
        this.paymentValidated = true
      }
    }
    /* verifyPayment() {
      const div = document.getElementById('dropin-container')
      const errorCard = `<div data-braintree-id="number-field-error" class="braintree-form__field-error" role="alert">This card number is not valid.</div>`
      const errorDate = `<div data-braintree-id="expiration-date-field-error" class="braintree-form__field-error" role="alert">This expiration date is not valid.</div>`
      const inner = div.innerHTML
      if (inner.includes(errorCard) || inner.includes(errorDate)) {
        console.log('No')
        this.paymentValidated = false
      } else {
        this.paymentValidated = true
        console.log(this.paymentValidated)
      }
    }  */
  },
  mounted() {
    store.returnIds()
    store.calcTotPrice()
    store.braintree()
    console.log(this.paymentValidated)
  }
};
</script>
<template>
  <div class="container py-5">
    <h2>Order Summary</h2>
    <!--preview carrello qui -->
    <div class="card border-0 rounded-0 shadow my-5 text-center py-3 bg_pink" v-if="store.cartItemCount === 0">
      <h1 class="text-uppercase">order succesfully sent!</h1>
      <p>Check your email for order summary!
      </p>
      <div class="text-center">
        <router-link class="btn btn-primary bg-dark w-25 text-light border-0 rounded-0 my-3" :to="{ name: 'home' }">Home</router-link>
      </div>
    </div>

    <form @submit.prevent="store.postOrder(), store.postMail(), store.resetCart()" v-else>
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" class="form-control" name="fullname" id="fullname" v-model="store.fullname"
          placeholder="John Doe" required />
        <label for="fullname" class="form-label">Address</label>
        <input type="text" class="form-control" name="address" id="address" v-model="store.address"
          placeholder="Via Parini 6" required />
        <label for="phone" class="form-label">Phone</label>
        <input type="number" class="form-control" name="phone" id="phone" v-model="store.phone"
          placeholder="+39 347 77 77 777" required />
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" v-model="store.email"
            placeholder="name@example.com" required />
        </div>
        <div id="dropin-wrapper">
  <div id="checkout-message"></div>
  <div id="dropin-container"></div>
  <!-- <button id="submit-button">Submit payment</button> -->
</div>

        <button class="btn btn-outline-dark d-block mt-4" :class="!this.paymentValidated ? 'disabled' : ''">Confirm</button> 
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
</style>
