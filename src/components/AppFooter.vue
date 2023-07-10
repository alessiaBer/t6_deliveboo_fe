<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center"> 
    <div class="align-items-center text">
      Team#6/Boolean 2023
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-content-center gap-4">
      <li>
        <a>
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
      </li>
      <li>
        <a>
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </li>
      <li>
        <a>
          <font-awesome-icon :icon="['fab', 'twitch']" />
        </a>
      </li>
      <li>
        <a>
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>

footer{
  background-color: #161616;
  color: white;
  height: 120px;
  padding: 0 2rem;
}
 .text{
  font-size: 24px;
 }

  a{
    font-size: 24px;
    transition: all 0.3s;
  }
  a:hover{
    cursor: pointer;
    color: #00CDBC !important;
  }
</style>