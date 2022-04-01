import './sass/main.scss';


import refs from "./js/refs";
import formReset from "./js/formReset";
import renderMarkup from "./js/renderMarkup";


refs.formRef.addEventListener('submit', fetchPicturesBySubmit);
refs.loadMoreButton.addEventListener('click', renderMarkup);

function fetchPicturesBySubmit(e) {
  e.preventDefault();
  formReset();
  renderMarkup();
  
}














 