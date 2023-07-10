<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import Cart from "../components/Cart.vue";

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
    store.displayMenu(this.$route.params.slug);
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
  <div class="row gap-3">
    <div class="card-hover col-4" v-for="plate in store.plates" :key="plate.id">
      <div class="card-hover__content">
        <h3 class="card-hover__title">
          {{ plate.name }}
        </h3>
        <p class="card-hover__text">{{ plate.description }}</p>
        <a href="#" class="card-hover__link">
          <button class="btn btn-dark" @click="store.addToCart(plate)">
            Add to cart
          </button>
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
      <div class="card-hover__extra">
        <h4><span>Price: </span>{{ plate.price }} <span>€</span></h4>
      </div>
      <img :src="plate.image_url" class="img-fluid rounded-start" alt="" />
    </div>
  </div>
  <Cart />
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap');

$firaSans: 'Fira Sans', sans-serif;

html {
  box-sizing: border-box;
  font-size: 100%;
}


*,
*:before,
*:after {
  box-sizing: inherit;
}

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


.card-hover {
  $root: &;
  width: 360px;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);

  &:has(#{$root}__link:hover) {

    #{$root}__extra {
      transform: translateY(0);
      transition: transform 0.35s;
    }
  }

  &:hover {

    #{$root} {

      &__content {
        background-color: #DEE8C2;
        bottom: 100%;
        transform: translateY(100%);
        padding: 50px 60px;
        transition: all 0.35s cubic-bezier(.1, .72, .4, .97);
      }

      &__link {
        opacity: 1;
        transform: translate(-50%, 0);
        transition: all 0.3s 0.35s cubic-bezier(.1, .72, .4, .97);
      }
    }

    img {
      transform: scale(1);
      transition: 0.35s 0.1s transform cubic-bezier(.1, .72, .4, .97);
    }
  }

  &__content {
    width: 100%;
    text-align: center;
    background-color: #00CDBC;
    padding: 0 60px 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.35s 0.35s cubic-bezier(.1, .72, .4, .97);
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      background-color: inherit;
      position: absolute;
      left: 0;
      z-index: -1;
    }

    &::before {
      top: -80px;
      clip-path: ellipse(60% 80px at bottom center);
    }

    &::after {
      bottom: -80px;
      clip-path: ellipse(60% 80px at top center);
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
    color: #2d7f0b;
    opacity: 0;
    padding: 10px;
    transition: all 0.35s;

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
  }

  &__extra {
    height: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    background-color: #86b971;
    padding: 80px;
    bottom: 0;
    z-index: 0;
    color: #dee8c2;
    transform: translateY(100%);
    will-change: transform;
    transition: transform 0.35s;

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
    transform: scale(1.2);
    transition: 0.35s 0.35s transform cubic-bezier(.1, .72, .4, .97);
  }
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
</style>
