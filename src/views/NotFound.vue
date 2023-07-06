<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <section class="notfound">
    <div class="container py-5">
      <div class="row">
        <h1 class="text-center mb-4">Errore 404 - Page not found</h1>
        <p class="text-center">page doesn't exist</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.notfound .container {
  min-height: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  display: flex;
  justify-content: center;
}

</style>