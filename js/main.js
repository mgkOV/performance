"use strict";

$(document).ready(function () {
  // $(".card").each(function (e) {
  //   if ($(this).hasClass("card_size_s")) {
  //     $(this).css({ "border-radius": "22px" });
  //   } else {
  //     $(this).css({ "border-radius": "23px" });
  //   }
  // });

  var carousel = $("#carousel");
  carousel.owlCarousel();

  const buttonsContainer = document.querySelector(".buttons-wrap");

  buttonsContainer.innerHTML =
    '<button class="button button_yellow" type="button">Да</button>' +
    '<button class="button">Нет</button>';

  const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
  const purchaseListContainer = document.querySelector(
    ".card_size_m:nth-child(8) .purchase-list-wrap"
  );
  const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");

  // const purchaseListContainer = document.createElement("div");
  // const purchaseListTitle = document.createElement("p");
  // const purchaseList = document.createElement("ol");
  // const purchaseListItemOne = document.createElement("li");
  // const purchaseListItemTwo = document.createElement("li");

  // purchaseListContainer.setAttribute("class", "purchase-list-wrap");
  // purchaseListTitle.setAttribute(
  //   "class",
  //   "card-description card-description_big description_critical"
  // );
  // purchaseListTitle.textContent = "Список покупок:";
  // purchaseList.setAttribute("class", "purchase-list");
  // purchaseListItemOne.setAttribute("class", "purchase-list__item");
  // purchaseListItemOne.textContent = "Хлеб";
  // purchaseListItemTwo.setAttribute("class", "purchase-list__item");
  // purchaseListItemTwo.textContent = "Молоко";

  // purchaseListContainer.appendChild(purchaseListTitle);
  // purchaseListContainer.appendChild(purchaseList);
  // purchaseList.appendChild(purchaseListItemOne);
  // purchaseList.appendChild(purchaseListItemTwo);

  confirmPurchaseButton.onclick = () => {
    fridgeInfoContainer.style.display = "none";
    purchaseListContainer.style.display = "block";
    buttonsContainer.style.display = "none";
  };

  const switcher = document.querySelector(".header-menu__switcher");
  const headerMemu = document.querySelector(".header-menu");

  switcher.onclick = () => {
    headerMemu.classList.toggle("header-menu_active");
  };

  // document
  //   .getElementsByClassName("header-menu__switcher")[0]
  //   .addEventListener("click", function () {
  //     document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active");
  //   });
});
