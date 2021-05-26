export default function getRefs() {
  return {
    searchFormRef: document.querySelector('.search-form'),
    galleryRef: document.querySelector('.gallery'),
    loadMoreBtnRef: document.querySelector('[data-action="load more"]'),
  };
}