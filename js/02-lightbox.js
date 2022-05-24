import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const items = galleryItems.map(({ preview, original, description }) => `
<li>
<a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
</a>
</li>
`).join("");
    
    gallery.insertAdjacentHTML("afterbegin", items);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
