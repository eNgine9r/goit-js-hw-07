import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);




const gallery = document.querySelector(".gallery");
const imagesMarkup = createImageCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);


function createImageCardsMarkup(images) {
	return images.map(({ preview, original, description }) => {
		return `
		<div class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>
			`;
	}).join('');
}

