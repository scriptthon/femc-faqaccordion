import "./src/sass/main.scss";
import { allItemsClose, clickItem } from "./mainfunc";
// import { plusImg, minusImg } from "./src"

const listItems = document.querySelectorAll("#list-item");


listItems.forEach(function (item) {
  item.addEventListener('click', () => {
    allItemsClose(listItems)
    clickItem(item)
  });
});


allItemsClose(listItems)
clickItem(listItems[0])
