"use strict";

function templater({ title, icon, time, source, description, size, type, data = "" }) {
  const critical = type === "critical";

  const iconImg =
    icon !== "cam"
      ? `<img class="card-icon" src="img/${icon}.svg" />`
      : `<div id="carousel" class="owl-carousel owl-theme" style="opacity: 1; display: block;" > <div class="owl-wrapper-outer"> <div class="owl-wrapper" style="width: 18px; left: 0px; display: block;"> <div class="owl-item" style="width: 9px;"> <div class="carousel-element"> <img class="card-icon" src="img/${icon}.svg"/> </div></div></div></div><div class="owl-controls clickable" style="display: none;"> <div class="owl-pagination"> <div class="owl-page"><span class=""></span></div></div></div></div>`;

  return `<div class="card card_size_${size} ${critical ? "critical" : ""}">
            <div class="card-heading ${critical ? "heading-critical" : ""}">
              <div class="card-icon-wrap">
                ${iconImg}
              </div>
              <h3 class="card-title">${title}</h3>
            </div>
            <div class="card-specs ${critical ? "specs-critical" : ""}">
              <p class="card-source">${source}</p>
              <p class="card-time ${size === "s" ? "card-time_block" : ""}">${time}</p>
            </div>
            ${
              description
                ? `<p class="card-description card-description_big ${
                    icon === "thermal" || icon === "stats" ? "" : "description_critical"
                  }">
              ${description}
            </p>`
                : ""
            }
            ${data}
          </div>`;
}

window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  events.forEach((event, idx) => {
    const tmp = templater(event);
    const temlate = document.createElement("template");
    temlate.innerHTML = tmp;
    content.appendChild(temlate.content);
  });

  const buttonsContainer = document.querySelector(".buttons-wrap");

  const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
  const purchaseListContainer = document.querySelector(
    ".card_size_m:nth-child(8) .purchase-list-wrap"
  );
  const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");

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
});
