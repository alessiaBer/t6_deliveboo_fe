<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';
export default {
    name: 'MenuView',
    components: { RouterLink },
    data() {
        return {
            store
           /* api: "127.0.0.1:8000/api/restaurants/",
           restaurant: null,
           plates: [] */
        }
    },
    mounted() {
        store.displayMenu(this.$route.params.slug)
    },
}
</script>
<template>
  <div class="container">

  </div>
</template>

<style lang="scss"></style>