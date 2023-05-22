import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(
    (img) =>
      `<li class = "gallery__item"><a class="gallery__link" href = ${img.original}><img src = ${img.preview} alt = ${img.description}  class = "gallery__image"></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryHTML);
console.log(galleryItems);

const onImgClick = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // console.log(evt.target.nodeName);

  let galleryFn = new SimpleLightbox(".gallery a");
  galleryFn.on("show.simplelightbox", () => {
    console.log(1);
  });
};

gallery.addEventListener("click", onImgClick);
