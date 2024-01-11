export const clickItem = (item) => {
  const paragraph = item.querySelector("p");
  const img = item.querySelector('img')
  img.src = 'src/assets/images/icon-minus.svg'
  paragraph.classList.toggle("active");
};

export const allItemsClose = (listItems) => {
  listItems.forEach((item) => {
    const paragraph = item.querySelector("p");
    const img = item.querySelector('img')
    img.src = 'src/assets/images/icon-plus.svg'
    paragraph.classList.remove("active");
  });
};
