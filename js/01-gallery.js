import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
    }).join('');
}


function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return
    }

    console.log(evt.target)

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    galleryContainer.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
        instance.close();
        }
    });
}

