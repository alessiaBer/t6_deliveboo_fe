<script>
export default {
  name: "AppFooter",
};
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">Team#6/Boolean 2023</div>
      </div>
      <div class="card-container">
        <div class="my_card">
          <ul class="card-list">
            <h4>Discover deliveroo</h4>
            <li>Investors</li>
            <li>Restaurants</li>
            <li>Work with us</li>
            <li>Design</li>
            <li>Become our partner</li>
            <li>Other</li>
          </ul>
        </div>
        <div class="my_card">
          <ul class="card-list">
            <h4>Legal notices</h4>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div class="my_card">
          <ul class="card-list">
            <h4>Help</h4>
            <li>Contacts</li>
            <li>FAQ</li>
            <li>Types of cuisine</li>
          </ul>
        </div>
        <div class="my_card card-download">
          <h3>Take deliveroo with you!</h3>
          <div class="download-links">
            <div class="container-img">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img class="" src="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg"
                  alt="Download from App Store" />
              </a>
            </div>
            <div class="container-img">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img class="" src="https://th.bing.com/th/id/OIP.pjZtbDc94dPfb8LJzSAAwgHaCk?pid=ImgDet&rs=1"
                  alt="Download from Play Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="social-media">
        <ul class="social-links">
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
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #2e3333;
  color: white;
  padding: 20px 0;

}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.card-container {
  background-color: #2e3333;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.my_card {
  width: 300px;
  height: 300px;
  border-radius: 3px;
  background-color: #ffffff23;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 20px;
  list-style-type: none;
}

.my_card .card-list {
  list-style-type: none;
  padding: 0;
}

.my_card .card-list li {
  margin-bottom: 10px;
}

.my_card .card-list li:hover {
  color: #00cdbc;
  cursor: pointer;
}

.download-links {
  margin-top: 20px;
}

.download-links img {
  width: 200px;
  height: 50px;
  margin: 0 10px;
}


.social-media {
  margin-top: 20px;
  text-align: center;
}

.social-links {
  display: inline-block;
  list-style: none;
  padding: 0;
}

.social-links li {
  display: inline-block;
  margin: 0 5px;
}

.social-links a {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
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