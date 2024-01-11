import "./src/sass/main.scss";
import { allItemsClose, clickItem } from "./mainfunc";

const listItems = document.querySelectorAll("#list-item");
listItems.forEach(function (item) {
  item.addEventListener('click', () => {
    allItemsClose(listItems)
    clickItem(item)
  });
});