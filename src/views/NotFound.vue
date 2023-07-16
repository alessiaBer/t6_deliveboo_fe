<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <div id="wallpaper">
    <section class="notfound">
      <div class="container py-5">
        <div class="row">
          <h1 class="text-center mb-4">Errore 404 - Page not found</h1>
          <p class="text-center">page doesn't exist</p>
          <div class="text-center">
            <img src="../../public/assets/imgs/rider.gif" alt="">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
#wallpaper{
  background-color: #efe3cd;
  height: calc(100vh - 216px);
}
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