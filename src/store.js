import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api: "http://127.0.0.1:8000/api/restaurants/",
    restaurant: null,
    plates: [],
    displayMenu(slug) {
        const url = this.api + slug
        axios.get(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        }); 
    }
});