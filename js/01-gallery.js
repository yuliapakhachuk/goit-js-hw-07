import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const gallery = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");
const galleryImg = document.querySelector(".gallery__image");

const items = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`)
    .join("");

gallery.insertAdjacentHTML('afterbegin', items);


gallery.addEventListener("click", onClick);


function onClick(event) { 
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `,
        {
            onShow: () => { window.addEventListener("keydown", onEscape) }
        }
    )

    instance.show();

    function onEscape(event) { 
        if (event.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEscape)
        }
    }
}
