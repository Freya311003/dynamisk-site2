"use strict";

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const cardGrid = document.querySelector(".card-grid");
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  console.log("DATA", data);
  cardGrid.innerHTML = "";
  let myInnerHtml = "";
  data.forEach((categories) => {
    myInnerHtml += `<a href="produktside.html?category=${categories.category}"class="indexcard">
                ${categories.category}
                </a>`;
  });
  cardGrid.innerHTML = myInnerHtml;
}
