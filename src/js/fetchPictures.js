import Notiflix from 'notiflix';
const axios = require('axios').default;

import refs from "./refs";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "26229759-3aa7093be117df00e52b30f1f";

let counter = 1;

async function fetchPictures() {
    const inputValue = refs.formRef.elements.searchQuery.value;
   
    try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${inputValue.trim()}&page=${counter}&per_page=40&image_type="photo"&orientation="horizontal"&safesearch="true"`);
        counter += 1;
        return response.data;
    } catch (error) {
        Notiflix.Notify.failure("Oops, there is no country with that name");
    }

}

export { counter, fetchPictures };