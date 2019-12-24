import images from "./module.js";
`use strict`;

const refs = {
  gallery: document.querySelector(".js-gallery"),
  divModal: document.querySelector(".js-lightbox"),
  img: document.querySelector(".lightbox__image"),
  btn: document.querySelector('button[data-action="close-lightbox"]'),
  modalContent: document.querySelector(".lightbox__content")
};

const createImage = arr => {
  const preview = arr.map(image => {
    return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`;
  });
  refs.gallery.insertAdjacentHTML("beforeend", preview.join(""));
};

createImage(images);

refs.gallery.addEventListener("click", event => {
  event.preventDefault();

  if (
    event.target.nodeName !== "IMG" ||
    Object.keys(event.target.dataset).length === 0
  ) {
    return;
  }

  refs.divModal.classList.add("is-open");
  refs.img.setAttribute("src", event.target.dataset.source);
  refs.img.setAttribute("alt", event.target.alt);
});

refs.divModal.addEventListener("click", () => {
  if (
    event.target.nodeName == "I" ||
    event.target.nodeName == "BUTTON" ||
    event.target == refs.modalContent
  ) {
    refs.divModal.classList.remove("is-open");
  }
});

let newImages = [];
images.forEach(item => {
  newImages.push(item.original);
});

window.addEventListener("keydown", event => {
  if (event.keyCode === 27) {
    refs.divModal.classList.remove("is-open");
  }

  let index = newImages.indexOf(refs.img.src);

  if (event.keyCode === 39) {
    if (index < newImages.length - 1) {
      refs.img.setAttribute("src", newImages[index + 1]);
    } else {
      index = -1;
      refs.img.setAttribute("src", newImages[index + 1]);
    }
  }

  if (event.keyCode === 37) {
    if (index === 0) {
      index = newImages.length;
      refs.img.setAttribute("src", newImages[index - 1]);
    } else refs.img.setAttribute("src", newImages[index - 1]);
  }
});
