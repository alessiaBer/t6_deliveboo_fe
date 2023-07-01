<script>

export default {
  name: "AppHeader",

  data(){
    return{
      register_url : "http://127.0.0.1:8000/register",
    }
  }
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
      <div>
        <a class="navbar-brand" href="#"><img id="logo" src="../../assets/imgs/deliveroo.png" alt=""></a>
      </div>

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
          <li class="nav-item">
            <a class="nav-link links" target="_blank" :href="this.register_url"
              >Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background-color: #161616;
  color: white;
}

#logo{
  height: 80px;
}
</style>
