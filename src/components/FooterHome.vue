<script>
export default {
  name: "FooterHome",
  data() {
    return {
      cards: [
        {
          title: "Discover deliveroo",
          items: [
            "Investors",
            "Restaurants",
            "Work with us",
            "Design",
            "Become our partner",
            "Other",
          ],
        },
        {
          title: "Legal notices",
          items: ["Terms and conditions", "Privacy Policy", "Cookies"],
        },
        {
          title: "Help",
          items: ["Contacts", "FAQ", "Types of cuisine"],
        },
      ],
    };
  },
};
</script>

<template>
    <div class="footer bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div v-for="(card, index) in cards" :key="index" class="col-md-3">
            <div class="card text-white rounded-0">
              <ul class="card-list list-unstyled">
                <h4>{{ card.title }}</h4>
                <li v-for="(item, idx) in card.items" :key="idx" class="mb-2">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-transparent text-white rounded-0">
              <h3>Take deliveroo with you!</h3>
              <div class="download-links">
                <div class="mt-4">
                  <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img class="img-fluid"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                      alt="Download from App Store" />
                  </a>
                </div>
                <div class="mt-4">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img class="img-fluid"
                      src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Image.png"
                      alt="Download from Play Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
.footer {
  background-color: #2e3333;
  color: white;
}

.card {
  border: none;
  background-color: rgba(207, 207, 207, 0.26);
  padding: 2rem;
  height: 100%;
}

.card-list {
  padding-left: 0;
}

.card-list li:hover {
  color: #00cdbc;
  cursor: pointer;
}

.download-links img {
  width: 200px;
  height: 50px;
  margin: 0 10px;
}

a {
  font-size: 24px;
  transition: all 0.3s;
  color: white;
}

a:hover {
  cursor: pointer;
  color: #00cdbc !important;
}

.container-img {
  width: 100%;
  height: 100%;
}
</style>