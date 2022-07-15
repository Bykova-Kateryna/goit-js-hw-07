import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGalleryItems = createGarery(galleryItems);

function createGarery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join("")
}

gallery.insertAdjacentHTML("beforeend", createGalleryItems)

gallery.addEventListener("click", lightboxShow);

function lightboxShow (event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG'){
        return
    };

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });

    gallery.removeEventListener("click", lightboxShow);
}




