import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api: "http://127.0.0.1:8000/api/restaurants/",
  base_api: "http://127.0.0.1:8000/",
  restaurant: null,
  plates: [],
  cart: [],
  prices: [],
  totalPrice: 0,

  displayMenu(slug) {
    const url = this.api + slug;
    axios
      .get(url)
      .then((response) => {
        console.log("Response data:", response.data);
        this.restaurant = response.data.result;
        this.plates = response.data.result.plates;
        console.log("Restaurant:", this.restaurant);
        console.log("Plates:", this.plates);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  addToCart(plate) {
    this.cart.push(plate);
    const price = plate.price;
    this.prices.push(price);
    console.log("this is a plate:", this.cart);

    localStorage.setItem("cart", JSON.stringify(this.cart));
    localStorage.setItem("prices", JSON.stringify(this.prices));
  },

  
  initCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    const savedPrice = localStorage.getItem("prices");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
    if (savedPrice) {
      this.prices = JSON.parse(savedPrice);
    }
  },
  calcTotPrice() {
    console.log(this.prices);
    this.totalPrice = 0;
    this.prices.forEach((price) => {
      this.totalPrice += parseFloat(price);
    });
    console.log("tot price:", this.totalPrice);
  },

  resetCart() {
    this.cart = [];
    this.prices = [];
    this.totalPrice = 0;
    localStorage.removeItem("cart");
    localStorage.removeItem("prices");
  },
});
