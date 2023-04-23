import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>`,
    )
    .join('');
}

galleryList.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const modalWindowImg = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  modalWindowImg.show(galleryList.addEventListener('click', closeImgByClick));
  
  function closeImgByClick() {
    modalWindowImg.close(galleryList.removeEventListener('keydown', closeImgByBtn));
  }

  // clicking Escape
  galleryList.addEventListener('keydown', closeImgByBtn);
  
  function closeImgByBtn(event) {
    if (event.code === 'Escape') {
      modalWindowImg.close(galleryList.removeEventListener('keydown', closeImgByBtn));
    }
  }
}