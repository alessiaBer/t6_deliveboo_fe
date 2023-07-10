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
  }
};
</script>
<template>
  <div class="container py-5">
    <h2>Order Summary</h2>
    <!--preview carrello qui -->
    <form @submit.prevent="store.postOrder()">
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
        <!-- pagamento qui -->
        <button class="btn btn-outline-dark">Confirm</button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped></style>