export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    makeGallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load more"]'),
  };
}