<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';
export default {
    name: 'MenuView',
    components: { RouterLink },
    data() {
        return {
            store
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