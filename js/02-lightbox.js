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
// console.log(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

/*galleryModal.on("show.simplelightbox", function () {
  console.log("Hello");
});*/

/*const onImgClick = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // console.log(evt.target.nodeName);
  const galleryModal = new SimpleLightbox(".gallery a");
  galleryModal.on("show.simplelightbox", function () {
    console.log("Hello");
  });
};

gallery.addEventListener("click", onImgClick);*/
