import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

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
  //не працює, якщо такий запис в if(event.target.nodeName !== 'gallery__image')    
  //не розумію як переробити  :(
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const sourceImage = event.target.dataset.source ?? target.closest('img').dataset.source;
  const currentOriginal = galleryItems.find(({original}) => original === sourceImage);

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">`,{
        onShow: () => window.addEventListener('keydown', onEscClick),
        onClose: () => window.removeEventListener('keydown', onEscClick),
      }
  );

  instance.show();

  function onEscClick(event) {
      if(event.code === 'Escape'){
           instance.close();
       }
  }
}