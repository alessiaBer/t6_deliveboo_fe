<script>
import { store } from '../store';
export default {
  data() {
    return {
      store
    }
  },
  mounted() {
    store.returnIds()
    store.calcTotPrice()
    store.braintree()
    
  }
};
</script>
<template>
  <div class="container py-5">
    <h2>Order Summary</h2>
    <!--preview carrello qui -->
    <form @submit.prevent="store.postOrder(), store.postMail()">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" class="form-control" name="fullname" id="fullname" v-model="store.fullname"
          placeholder="John Doe" />
        <label for="fullname" class="form-label">Address</label>
        <input type="text" class="form-control" name="address" id="address" v-model="store.address"
          placeholder="Via Parini 6" />
        <label for="phone" class="form-label">Phone</label>
        <input type="number" class="form-control" name="phone" id="phone" v-model="store.phone"
          placeholder="+39 347 77 77 777" />
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" v-model="store.email"
            placeholder="name@example.com" />
        </div>

        <div id="dropin-container"></div>
        <button id="submit-button" class="button button--small button--green">Purchase</button>
        <button class="btn btn-outline-dark d-block" >Confirm</button>
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
}</style>