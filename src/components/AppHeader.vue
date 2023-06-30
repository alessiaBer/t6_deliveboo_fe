<script>

export default {
  name: "AppHeader",

};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
      <a class="navbar-brand" href="#">DELIVEBOO</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link links" :to="{ name: 'welcome' }"
              >Welcome</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link links" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #161616;
  color: white;
}
</style>
