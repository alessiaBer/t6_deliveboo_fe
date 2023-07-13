<script>
import Contacts from "../components/Contacts.vue";

export default {
  name: "ContactsView",
  components: { Contacts },
};
</script>

<template>
  <div class="background">
    <div class="position">
      <Contacts></Contacts>
    </div>
  </div>

  <section class="py-5">
    <h1 class="text-black text-center mb-4 ">CONTATTACI</h1>

    <div class="container">
      
        <form class="rounded-0 border-0 shadow p-3">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Mario Rossi"
              aria-describedby="nameHelper"
            />
            <small id="nameHelper" class="text-muted"
              >Type your full name here</small
            >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Mario@Rossi.com"
              aria-describedby="emailHelper"
            />
            <small id="emailHelper" class="text-muted"
              >Type your email here</small
            >
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              name="message"
              id="message"
              rows="8"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-info">Send</button>
        </form>
      
    </div>
  </section>
</template>

<style lang="scss" scoped>
.relative {
  position: relative;
}

.position {
  margin: 3rem 0rem;
}

.background{
  background-image: url("../../public/assets/imgs/DFW Background Homepage PS2 (2).svg");
  background-repeat: no-repeat;
}
</style>
