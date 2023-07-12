<script>

export default {
  name: "AppHeader",

  data() {
    return {
      login_url: "http://127.0.0.1:8000/login",
    }
  }
};
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
        <div>
          <router-link class="nav-link nav_item" :to="{ name: 'welcome' }"><img id="logo" src="../../assets/imgs/deliveboo.png" alt=""></router-link>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <router-link class="nav-link nav_item" :to="{ name: 'welcome' }">Welcome</router-link>
            </li>
            <li>
              <router-link class="nav-link nav_item" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link nav_item" :to="{ name: 'contacts' }">Contacts</router-link>
            </li>
            <li>
              <a class="nav-link nav_item" target="_blank" :href="this.login_url">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #161616;
  color: white;
}

#logo {
  height: 80px;
}

.nav_item {
  color: white !important;
}

.nav_item:hover {
  color: #00CDBC !important;
}
</style>
