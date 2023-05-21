import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryHTML = galleryItems

  .map(
    (img) =>
      `<li><img src = ${img.preview} alt = ${img.description} class = "gallery__image"></li> `
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryHTML);

const onImgClick = (evt) => {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  //   console.log(evt.target.nodeName);
};

gallery.addEventListener("click", onImgClick);

console.log(galleryItems);
