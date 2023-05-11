// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  target.nodeName !== "IMG";
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show(); // Mostramos la ventana modal
});
console.log(galleryItems);
