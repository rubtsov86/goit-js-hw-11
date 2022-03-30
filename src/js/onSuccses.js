import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import  { counter } from "./fetchPictures";

import refs from "./refs";


export default async function onSuccses(promise) {
  const data = await promise;

  if (data.hits.length === 0) {
    return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }

  const listMarkup = data.hits.map(({largeImageURL, webformatURL, likes, views, comments, downloads}) => 

      `
      <div class="photo-card">
          <a class="gallery__item" href="${largeImageURL}">  
            <img class="gallery__image" src="${webformatURL}" alt="" loading="lazy" />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
            ${likes}</p>
            <p class="info-item">
              <b>Views</b>
            ${views}</p>
            <p class="info-item">
              <b>Comments</b>
            ${comments}</p>
            <p class="info-item">
              <b>Downloads</b>
            ${downloads}</p>
      </div></div> `).join('');

        
  refs.galleryWrapperRef.insertAdjacentHTML("beforeend", listMarkup);

  

  const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });

  if (document.querySelector('.is-hidden')) {
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
    }
 
  refs.loadMoreButton.classList.remove('is-hidden');
  
  

  const lightbox = new SimpleLightbox('.photo-card a').refresh();

if ((counter - 1) * 40 === data.totalHits) {
        refs.loadMoreButton.classList.add('is-hidden');
        return Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }

}