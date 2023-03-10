import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imagesMarkup = createImageCardsMarkup(galleryItems);

gallery.insertAdjacentHTML ('beforeend', imagesMarkup);

function createImageCardsMarkup (images) {
	return images.map(({ preview, original, description }) => {
		return `
				<a class="gallery__item" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						alt="${description}"
					/>
				</a>
			`;
	}).join('');
};

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: "alt",
});

