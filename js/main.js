"use strict";$(document).ready((function(){$("#carousel").owlCarousel();const buttonsContainer=document.querySelector(".buttons-wrap");buttonsContainer.innerHTML='<button class="button button_yellow" type="button">Да</button><button class="button">Нет</button>';const fridgeInfoContainer=document.querySelector(".card_size_m:nth-child(8) .card-description"),purchaseListContainer=document.querySelector(".card_size_m:nth-child(8) .purchase-list-wrap");document.querySelector(".buttons-wrap .button_yellow").onclick=()=>{fridgeInfoContainer.style.display="none",purchaseListContainer.style.display="block",buttonsContainer.style.display="none"};const switcher=document.querySelector(".header-menu__switcher"),headerMemu=document.querySelector(".header-menu");switcher.onclick=()=>{headerMemu.classList.toggle("header-menu_active")}}));