<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import Cart from "../components/Cart.vue";
import axios from "axios";

export default {
  name: "MenuView",
  components: { RouterLink, Cart },

  data() {
    return {
      store,
    };
  },

  methods: {},

  mounted() {
    //store.displayMenu(this.$route.params.slug);
    const url = store.api + this.$route.params.slug;
    axios
      .get(url)
      .then((response) => {
        if (response.data.success) {
          store.restaurant = response.data.result;
          store.plates = response.data.result.plates;
        } else {
          this.$router.push({
              name: "404NotFound",
              params: { pathMatch: this.$route.path.substring(1).split("/") }
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<template>
  <div class="jumbo p-5 mb-4 bg-body-tertiary" v-if="store.restaurant" :style="{
    backgroundImage: `url(${store.base_api + 'storage/' + store.restaurant.image_url
      })`,
  }">
    <div class="container-fluid py-5">
      <div class="cardJumbo">
        <h1 class="display-5 fw-bold">{{ store.restaurant.name }}</h1>
        <p class="fs-4">
          {{ store.restaurant.address }}
        </p>
        <hr class="fs-4" />
        <p>
          {{ store.restaurant.description }}
        </p>
        <p>
          {{ store.restaurant.phone }}
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <div class="col"  v-for="plate in store.plates" :key="plate.id">
        <div class="card-hover my-3 shadow">
          <div class="card-hover__content">
            <h3 class="card-hover__title">
              {{ plate.name }}
            </h3>
            <p class="card-hover__text">{{ plate.description }}</p>
            <h5><span>Price: </span>{{ plate.price }} <span>€</span></h5>

            <!-- <button class="button-54 my-2" @click="store.addToCart(plate)">
              Add to cart
            </button> -->

            <a href="#" class="card-hover__link">
              
            </a>
          </div>
          <div class="card-hover__extra">
            <!--  <h4><span>Price: </span>{{ plate.price }} <span>€</span></h4> -->
          </div>
          <img :src="store.base_api + 'storage/' + plate.image_url" class="img-fluid" alt="" />
          <button class="btn bg-dark rounded-0 shadow text-light my-3" @click="store.addToCart(plate)">
            Add to <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <Cart />
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}


h1,
h2,
h3,
h4,
h5 {
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
}

.col button{
  position: absolute;
  bottom: 0;
  left: calc(50% - 50px);
  z-index: 100;
}

.col button:hover{
  background-color: #00CDBC !important;
  color: black !important;
}

.card-hover {
  $root: &;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);
  font-family: "Open Sans", sans-serif;

  &:has(#{$root}__link:hover) {

    #{$root}__extra {
      transform: translateY(0);
      transition: transform 0.7s;
    }
  }

  &:hover {

    #{$root} {

      &__content {
        background-color: rgba(222, 232, 194, 0.6);
        bottom: 100%;
        transform: translateY(100%);
        padding: 25px 15px;
        transition: all 0.7s cubic-bezier(.1, .72, .4, .97);
      }

      &__link {
        opacity: 1;
        transform: translate(-50%, 0);
        transition: all 0.3s 0.7s cubic-bezier(.1, .72, .4, .97);
      }
    }

    img {
      transform: scale(1);
      transition: 0.7s 0.1s transform cubic-bezier(.1, .72, .4, .97);
    }
  }

  &__content {
    width: 100%;
    text-align: center;
    background-color: #00cdbc;
    padding-bottom: 4rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.7s 0.7s cubic-bezier(.1, .72, .4, .97);
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      position: absolute;
      left: 0;
      z-index: -1;
      background-color: inherit;
    }

    &::before {
      top: -120px;
      clip-path: ellipse(60% 25px at bottom center);
    }

    &::after {
      bottom: -120px;
      clip-path: ellipse(60% 25px at top center);
    }
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1em;

    span {
      color: #2d7f0b;
    }
  }

  &__text {
    font-size: 0.75rem;
    font-family: "Open Sans", sans-serif;
  }

  &__link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 10%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    color: #2e7f0bb2;
    opacity: 0;
    padding: 10px;
    transition: all 0.7s;

    &:hover {

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      width: 18px;
      margin-left: 4px;
      transition: transform 0.3s;
    }

    span {
      color: #2d7f0b;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    transform: scale(1.3);
    transition: 0.7s 0.7s transform cubic-bezier(.1, .72, .4, .97);
  }
}

.text_blue{
  color: #00CDBC;
}

.jumbo {
  background-size: cover;
  background-position: center;
  color: rgb(253, 253, 253);

  .cardJumbo {
    background-color: rgba($color: #000000, $alpha: 0.7);
    color: white;
    border: none;
    padding: 1rem;
    width: fit-content;
  }
}

.card {
  height: 220px;

  img {
    object-fit: cover;
    height: 220px;
  }
}



/* Button */




/* CSS */
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
