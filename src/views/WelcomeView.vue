<script>
import OffCanvas from '../components/OffCanvas.vue';

export default {
  name: "WelcomeView",

  components:{
    OffCanvas,
  },
};
</script>

<template>
  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col">
          <h2>Hello.</h2>
        </div>
        <div class="col">
          <OffCanvas/>
        </div>
      </div>

    </div>
  </section>
</template>
