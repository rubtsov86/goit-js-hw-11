import refs from "./refs";
import  { resetCounter } from "./fetchPictures";


export default function formReset() {
    refs.loadMoreButton.classList.add('is-hidden');
    refs.galleryWrapperRef.innerHTML = '';
    resetCounter();
}