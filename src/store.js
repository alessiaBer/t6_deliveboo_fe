import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  api: "http://127.0.0.1:8000/api/restaurants/",
  base_api: "http://127.0.0.1:8000/",
  post_api: "http://127.0.0.1:8000/api/orders",
  mail_api: "http://127.0.0.1:8000/api/leads",
  restaurant: null,
  plates: [],
  cart: [],
  cartItemCount: 0,
  plateIds: [],
  prices: [],
  totalPrice: 0,
  fullname: "",
  address: "",
  phone: null,
  email: "",
  status: "Ordine inviato",
  displayMenu(slug) {
    const url = this.api + slug;
    axios
      .get(url)
      .then((response) => {
        //console.log("Response data:", response.data);
        this.restaurant = response.data.result;
        this.plates = response.data.result.plates;
        //console.log("Restaurant:", this.restaurant);
        //console.log("Plates:", this.plates);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  addToCart(plate) {
    this.cart.push(plate);
    const price = plate.price;
    this.prices.push(price);
    //console.log("this is a plate:", this.cart);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    localStorage.setItem("prices", JSON.stringify(this.prices));
    this.calcTotPrice();
    this.cartItemCount++;
    console.log(this.cartItemCount);
  },
  initCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    const savedPrice = localStorage.getItem("prices");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cartItemCount = this.cart.length;
    }
    if (savedPrice) {
      this.prices = JSON.parse(savedPrice);
    }
  },
  calcTotPrice() {
    //console.log(this.prices);
    this.totalPrice = 0;
    this.prices.forEach((price) => {
      this.totalPrice += parseFloat(price);
    });
    //console.log("tot price:", this.totalPrice);
    this.totalPrice = this.totalPrice.toFixed(2)
  },
  resetCart() {
    this.cart = [];
    this.prices = [];
    this.totalPrice = 0;
    this.cartItemCount = 0;
    localStorage.removeItem("cart");
    localStorage.removeItem("prices");
  },
  returnIds() {
    this.cart.forEach((plate) => {
      this.plateIds.push(plate.id);
    })
    console.log(this.plateIds)
  },
  postOrder() {
    const data = {
      fullname: this.fullname,
      address: this.address,
      phone: this.phone,
      email: this.email,
      total_price: this.totalPrice,
      plates: this.plateIds,
      status: this.status
    };
    axios
      .post(this.post_api, data)
      .then((response) => {
        if (response.data.success) {
          console.log("Bravissim*");
          this.fullname = "";
          this.address = "";
          this.phone = "";
          this.email = "";
          this.totalPrice = null;
          this.plateIds = [];
        } else if (response.data.success === false) {
          console.log(response.data.errors);
          this.errors = response.data.errors;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
  braintree() {
    braintree.dropin.create({
      // Insert your tokenization key here
      authorization: 'sandbox_gpqggwy8_kxst6vhrdbqkw2dp',
      container: '#dropin-container'
    })
  },
  postMail() {
    const data = {
      clientEmail: this.email,
      userEmail: this.restaurant.user.email,
    };
    axios
      .post(this.mail_api, data)
      .then((response) => {
        if (response.data.success) {
          console.log("Bravo Palino");
          this.email = "";

        } else if (response.data.success === false) {
          console.log(response.data.errors);
          this.errors = response.data.errors;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
});