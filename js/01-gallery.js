import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryHTML = galleryItems.map();

const onImgClick = (evt) => {
  if (evt.target.node !== "IMG") {
    return;
  }
};

gallery.addEventListener("click", onImgClick);

console.log(galleryItems);
