import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(
    (img) =>
      `<li class = "gallery__item"><a class="gallery__link" href = ${img.original}><img src = ${img.preview} alt = ${img.description} data-source = ${img.original} class = "gallery__image"></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryHTML);

const onImgClick = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = ${evt.target.dataset.source} alt = ${evt.target.alt} width = "800" height = "600">`
  );

  instance.show();
};

gallery.addEventListener("click", onImgClick);

console.log(galleryItems);
