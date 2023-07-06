<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <body>
        <router-view v-slot="{ Component }">
          <Component :is="Component" />
        </router-view>
    </body>
    <AppFooter />
  </div>
</template>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
  font-family: "Secular One", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 216px);
  background-color: transparent;
}

</style>
