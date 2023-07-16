<script>

export default {
  name: "WorkWithUs",
  data() {
    return {
      cards: [
        {
          title: "Rider",
          description:
            "Become a rider: flexibility, great earnings, and a world of benefits for you.",
          buttonText: "Join us",
          imageUrl: "https://cwa.roocdn.com/_next/static/riders.90e61988.jpg",
          color: "my-card-red",
        },
        {
          title: "Restaurants",
          description:
            "Become a Deliveroo partner and reach more customers. We take care of the delivery, so your only concern is to continue preparing the best food.",
          buttonText: "Become our partner",
          imageUrl:
            "https://cwa.roocdn.com/_next/static/restaurants.3db91a35.jpg",
          color: "my-card-orange",
        },
        {
          title: "Join us",
          description:
            "Our mission is to transform the way people eat. It's an ambitious goal, just like us, and we need people to help us achieve it.",
          buttonText: "Learn more",
          imageUrl: "https://cwa.roocdn.com/_next/static/team.d18fbb67.jpg",
          color: "my-card-grey",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="my-container py-5">
    <div class="container" ref="slide">
      <h1 class="my-4 text-uppercase text-center">Work with Deliveboo</h1>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div v-for="(card, index) in cards" :key="index" class="col">
          <div :class="`card ${card.color}`">
            <img
              :src="card.imageUrl"
              alt="Card image cap"
              class="card-img-top"
            />
            <div class="card-body">
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-text">{{ card.description }}</p>
              <a href="#" class="btn btn-primary">{{ card.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  background-color: rgb(254, 183, 196);
}

.card {
  border: none;
  border-radius: 0;
  color: white !important;
  height: 100%;

  a {
    background-color: #00cdbb;
    border: none;
    border-radius: 0;
  }
}

.my-card-grey {
  background-color: #bac2c4;
}

.my-card-orange {
  background-color: #fe8100;
}

.my-card-red {
  background-color: #ff473b;
}
</style>
