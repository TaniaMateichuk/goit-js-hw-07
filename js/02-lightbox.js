import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ original, preview, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
        
    }).join("");
};

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return
    }
    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: "250"
    });
}