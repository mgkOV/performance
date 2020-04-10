"use strict";

const events = [
  {
    type: "info",
    title: "Еженедельный отчет по расходам ресурсов",
    source: "Сенсоры потребления",
    time: "19:00, Сегодня",
    description:
      "Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",
    icon: "stats",
    size: "l"
  },

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
    size: "m"
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
    title: "Музыка включена",
    source: "Яндекс.Станция",
    time: "18:16, Сегодня",
    description: "Сейчас проигрывается:",
    icon: "music",
    size: "m"
  },
  {
    type: "info",
    title: "Заканчивается молоко",
    source: "Холодильник",
    time: "17:23, Сегодня",
    description:
      "Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",
    icon: "fridge",
    size: "m",
    data: {
      buttons: ["Да", "Нет"]
    }
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
    type: "critical",
    title: "Пылесос застрял",
    source: "Сенсор движения",
    time: "16:17, Сегодня",
    description:
      "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
    icon: "cam",
    data: {
      image: "get_it_from_mocks_:3.jpg"
    },
    size: "l"
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

function templater({ title, icon, time, source, description, size, type }) {
  const critical = type === "critical";
  let cardData = "";
  if (icon === "thermal") {
    cardData =
      '<div class="card-data card-data_climat"> <div class="climat-block"> Температура: <em class="climat-block_data climat-block_data__temp">24 C</em> </div> <div class="climat-block hum-block"> Влажность: <em class="climat-block_data climat-block_data__hum">80%</em> </div></div>';
  }

  if (icon === "music") {
    cardData =
      '<div class="card-data card-data_music"> <div class="song-area"> <div class="cover-wrap"> <img class="cover" src="https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m50x50"/> </div><div class="song-data"> <h4 class="song-title">Florence &amp; The Machine - Big God</h4> <div class="song-timeline-wrap"> <input type="range" class="song-range" name="song-range" min="0" max="100" value="" step="1"/> <div class="song-length">4:31</div></div></div></div><div class="player-controls"> <button class="player-control player-control_prev"> <img src="img/Prev.svg"/> </button> <button class="player-control player-control_next"> <img src="img/Prev.svg"/> </button> <input type="range" class="volume-range" name="volume-range" min="0" max="100" value="50" step="1"/> <div class="song-volume">80%</div></div></div>';
  }

  if (icon === "stats") {
    cardData =
      '<div class="card-data card-data_graph"> <img class="card-data_graph-img" src="img/background.jpg"/> </div></div>';
  }

  if (icon === "fridge") {
    cardData =
      '<div class="purchase-list-wrap"> <p class="card-description card-description_big description_critical"> Список покупок: </p><ol class="purchase-list"> <li class="purchase-list__item">Хлеб</li><li class="purchase-list__item">Молоко</li></ol> </div><div class="buttons-wrap"> <button class="button button_yellow" type="button">Да</button ><button class="button">Нет</button> </div>';
  }

  if (icon === "cam") {
    cardData =
      '<div class="critical-cam" onload="initCriticalCam()" touch-action="none" style="background-position: 0px 0px; background-size: 100%; filter: brightness(100%);" ></div><p></p>';
  }

  const iconImg =
    icon !== "cam"
      ? `<img class="card-icon" src="img/${icon}.svg" />`
      : '<div id="carousel" class="owl-carousel owl-theme" style="opacity: 1; display: block;" > <div class="owl-wrapper-outer"> <div class="owl-wrapper" style="width: 18px; left: 0px; display: block;"> <div class="owl-item" style="width: 9px;"> <div class="carousel-element"> <img class="card-icon" src="img/cam.svg"/> </div></div></div></div><div class="owl-controls clickable" style="display: none;"> <div class="owl-pagination"> <div class="owl-page"><span class=""></span></div></div></div></div>';

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
            ${cardData}
          </div>`;
}

window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  events.forEach((event, idx) => {
    const tmp = templater(event);
    const temlate = document.createElement("template");
    temlate.innerHTML = tmp;
    content.appendChild(temlate.content);
    console.log(content);
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
