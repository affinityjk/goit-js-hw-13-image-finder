import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImg = `<img src="${event.target.dataset.source} alt="${event.target.alt}" />`;
  const instance = basicLightbox.create(largeImg);

  instance.show();
}

export { onImageClick };