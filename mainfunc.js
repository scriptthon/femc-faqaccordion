import { plusImg, minusImg } from "./src";

export const clickItem = (item) => {
  const paragraph = item.querySelector("p");
  const img = item.querySelector('img')
  img.src = minusImg
  paragraph.classList.toggle("active");
};

export const allItemsClose = (listItems) => {
  listItems.forEach((item) => {
    const paragraph = item.querySelector("p");
    const img = item.querySelector('img')
    img.src = plusImg
    paragraph.classList.remove("active");
  });
};
