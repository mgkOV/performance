"use strict";

const events = [
  {
    type: "info",
    title: "Дверь открыта",
    source: "Сенсор входной двери",
    time: "18:50, Сегодня",
    icon: "key",
    size: "s"
  },
  {
    type: "info",
    title: "Уборка закончена",
    source: "Пылесос",
    time: "18:45, Сегодня",
    icon: "robot-cleaner",
    size: "s"
  },
  {
    type: "info",
    title: "Новый пользователь",
    source: "Роутер",
    time: "18:45, Сегодня",
    icon: "router",
    size: "s"
  },
  {
    type: "info",
    title: "Изменен климатический режим",
    source: "Сенсор микроклимата",
    time: "18:30, Сегодня",
    description: "Установлен климатический режим «Фиджи»",
    icon: "thermal",
    size: "m",
    data: {
      temperature: 24,
      humidity: 80
    }
  },
  {
    type: "critical",
    title: "Невозможно включить кондиционер",
    source: "Кондиционер",
    time: "18:21, Сегодня",
    description: "В комнате открыто окно, закройте его и повторите попытку",
    icon: "ac",
    size: "m"
  },
  {
    type: "info",
    title: "Зарядка завершена",
    source: "Оконный сенсор",
    time: "16:22, Сегодня",
    description: "Ура! Устройство «Оконный сенсор» снова в строю!",
    icon: "battery",
    size: "s"
  },

  {
    type: "info",
    title: "Вода вскипела",
    source: "Чайник",
    time: "16:20, Сегодня",
    icon: "kettle",
    size: "s"
  }
];

function templater({ title, icon, time, source, description, size, data, type }) {
  const critical = type === "critical";
  return `<div class="card card_size_${size} ${critical ? "critical" : ""}">
            <div class="card-heading ${critical ? "heading-critical" : ""}">
              <div class="card-icon-wrap">
                <img class="card-icon" src="img/${icon}.svg" />
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
                    icon === "thermal" ? "" : "description_critical"
                  }">
              ${description}
            </p>`
                : ""
            }
            ${
              data
                ? `<div class="card-data card-data_climat">
              <div class="climat-block">
                Температура: <em class="climat-block_data climat-block_data__temp">24 C</em>
              </div>
              <div class="climat-block hum-block">
                Влажность: <em class="climat-block_data climat-block_data__hum">80%</em>
              </div>
            </div>`
                : ""
            }
          </div>`;
}

window.addEventListener("DOMContentLoaded", () => {
  const slots = document.querySelectorAll("[data-tmp]");

  slots.forEach((s, idx) => {
    const tmp = templater(events[idx]);
    const temlate = document.createElement("template");
    temlate.innerHTML = tmp;
    s.replaceWith(temlate.content);
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
