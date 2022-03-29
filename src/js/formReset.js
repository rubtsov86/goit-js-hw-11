import refs from "./refs";


export default function formReset() {
    refs.loadMoreButton.classList.add('is-hidden');
    refs.galleryWrapperRef.innerHTML = '';
    
}