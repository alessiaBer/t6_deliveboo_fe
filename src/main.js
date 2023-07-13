import './assets/scss/app.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faShoppingCart, faTrash, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitch, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

library.add(faUserSecret, faYoutube, faTwitch, faInstagram, faLinkedin, faShoppingCart, faTrash, faChevronUp, faGithub)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
