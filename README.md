# Blog preview card. `FEMC`

This website has been completed for the frontendmentor.io challenge.

- FEMC - `front end mentor challenge`
- [website](https://femc-faqaccordion.netlify.app)

<img title="screnshot" alt="Alt text" src="./design/desktop-design.jpg">

- _mainfunc.js_
```js
export const clickItem = (item) => {
  var paragraph = item.querySelector("p");
  const img = item.querySelector('img')
  img.src = 'src/assets/images/icon-minus.svg'
  paragraph.classList.toggle("active");
};

export const allItemsClose = (listItems) => {
  listItems.forEach((item) => {
    var paragraph = item.querySelector("p");
    const img = item.querySelector('img')
    img.src = 'src/assets/images/icon-plus.svg'
    paragraph.classList.remove("active");
  });
};
```
- _main.js_
```javascript
import { allItemsClose, clickItem } from "./mainfunc";

const listItems = document.querySelectorAll("#list-item");
listItems.forEach(function (item) {
  item.addEventListener('click', () => {
    allItemsClose(listItems)
    clickItem(item)
  });
});
```