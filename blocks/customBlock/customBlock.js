import { fetchPlaceholders, getMetadata } from "../../scripts/aem.js";

async function placeholders() {
  const locale = getMetadata("locale");
  const placeholders = await fetchPlaceholders(locale);
  console.log(placeholders);
}
export default function decorate(block) {
  placeholders();
  // setup image columns
  const cardContainerPrev = document.querySelector(".customblock.card.block");
  cardContainerPrev.classList.add("card-container-wrapper");
  [...block.children].forEach((row, index) => {
    row.classList.add("card-container");
    const newEl = document.createElement("div");
    newEl.textContent = `${index} repalced`;
    // pictureEl.replaceWith(newEl);
    [...row.children].forEach((col) => {
      const pictureEl = row.querySelector("picture");
      //   console.log(col.children.length, row.querySelector("picture"));
      if (col.children.length === 1 && pictureEl) {
        col.className = "customblock-card-image";
      } else {
        col.className = "customblock-card-body";
      }
    });
  });
}
