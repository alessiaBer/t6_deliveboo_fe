<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppFooter,
    store,
  },
  mounted() {
    store.initCartFromLocalStorage();
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view v-slot="{ Component }">
        <Component :is="Component" />
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
  font-family: "Secular One", sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 216px);
}
</style>
