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
  paymentValidated: false,

  addToCart(plate) {
    if (this.cart.length === 0 || this.cart[0].restaurant_id === plate.restaurant_id) {
      if (this.cart.length === 0) {
        this.cart.push(plate);
        this.currentRestaurantId = plate.restaurant_id;
        console.log(plate.restaurant_id);
      } else {
        if (this.currentRestaurantId === plate.restaurant_id) {
          this.cart.push(plate);
        }
      }

      const price = plate.price;
      this.prices.push(price);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("prices", JSON.stringify(this.prices));
      localStorage.setItem("restaurant", JSON.stringify(this.restaurant));
      this.calcTotPrice();
      this.cartItemCount++;
      console.log(this.cartItemCount);
    } else {
      console.log("DIO CAN");
    }
  },
  initCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    const savedPrice = localStorage.getItem("prices");
    const savedRestaurant = localStorage.getItem("restaurant");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cartItemCount = this.cart.length;
    }
    if (savedPrice) {
      this.prices = JSON.parse(savedPrice);
    } 
    if(savedRestaurant) {
      this.restaurant = JSON.parse(savedRestaurant);
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
    //this.restaurant = null;
    this.totalPrice = 0;
    this.cartItemCount = 0;
    store.paymentValidated = false

    localStorage.removeItem("cart");
    localStorage.removeItem("prices");
    localStorage.removeItem("restaurant");
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
    const input = document.querySelector('#dropin-wrapper');
    braintree.dropin.create({
      // Insert your tokenization key here
      authorization: 'sandbox_gpqggwy8_kxst6vhrdbqkw2dp',
      container: '#dropin-container'
    }, function (createErr, instance) {
      input.addEventListener('mouseleave', function () {
        instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
          if (requestPaymentMethodErr) {
            console.error(requestPaymentMethodErr);
          } else {
            store.paymentValidated = true
            console.log(store.paymentValidated);
          }
        });
      });
    });
  },
  postMail() {
    console.log(this.restaurant)
    const data = {
      clientEmail: this.email,
      userEmail: this.restaurant.user.email,
      cart: this.cart
    };
    axios
      .post(this.mail_api, data)
      .then((response) => {
        if (response.data.success) {
          console.log("Bravo Palino");
          this.email = "";
          this.cart = [];
          this.cartItemCount = 0;

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