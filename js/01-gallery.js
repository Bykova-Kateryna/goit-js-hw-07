import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGalleryItems = createGarery(galleryItems);

function createGarery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}" target="_blank">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join("")
}

gallery.insertAdjacentHTML("beforeend", createGalleryItems);


gallery.addEventListener("click", OpenModalImg);

function OpenModalImg (event){
    event.preventDefault();

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)
   
     if (event.target.nodeName === 'IMG') {     
    instance.show()
     };
     
   
     document.addEventListener("keydown", keydown)

     function keydown (event){
        if (event.key === 'Escape'){
            instance.close()
            document.removeEventListener("keydown", keydown)
        }
    }

};

