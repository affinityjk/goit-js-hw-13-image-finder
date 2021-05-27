import ApiService from './apiService';
import galleryCardTpl from '../templates/galleryCard.hbs';
import getRefs from './getRefs';
import { onFetchError } from './notifications';
import { onImageClick } from './lightbox';

const refs = getRefs();

const newApiService = new ApiService();

function onSearch(event) {
  event.preventDefault();

  clearGallery();
  newApiService.query = event.currentTarget.elements.query.value;
  if (newApiService.query.trim() === '') {
    return onFetchError();
  }
  newApiService.resetPage();
  newApiService.fetchImages()
    .then(renderGalleryMarkup)
    .catch(onFetchError);

  setTimeout(() => refs.loadMoreBtnRef.classList.remove('is-hidden'), 500);
}

function onLoadMore() {
  newApiService.fetchImages()
    .then(renderGalleryMarkup);
 
  const totalHeight = refs.galleryRef.clientHeight + 270;
  setTimeout(() => {
    window.scrollTo({
      top: totalHeight,
      behavior: "smooth",
    });
  }, 500);
}

function renderGalleryMarkup(hits) {
  const markup = galleryCardTpl(hits);
  refs.galleryRef.insertAdjacentHTML('beforeend', markup);
}

function clearGallery() {
  refs.galleryRef.innerHTML = '';
}

refs.searchFormRef.addEventListener('submit', onSearch);
refs.loadMoreBtnRef.addEventListener('click', onLoadMore);
refs.galleryRef.addEventListener('click', onImageClick);