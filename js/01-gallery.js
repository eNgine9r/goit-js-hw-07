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

function onGalleryImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();

  const closeModal = (e) => {
    const ESC_KEY = "Escape";

    if (e.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}

gallery.addEventListener("click", onGalleryImageClick);

console.log(galleryItems);