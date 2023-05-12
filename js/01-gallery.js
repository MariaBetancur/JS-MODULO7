import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(({ preview, original, description }) => `
      <div class="gallery_items">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `)
    .join('')
);
gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') return;
  const imageSrc = target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show();
});

console.log(galleryItems);