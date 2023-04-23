import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));
function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
            </a>
        </li>`,
    )
    .join('');
}

// SimpleLightbox library
const slideOriginalImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});