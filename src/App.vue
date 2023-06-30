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
  <AppHeader/>
  <div>
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </router-view>
  </div>
  <AppFooter/>
</template>

<style lang="scss"></style>
