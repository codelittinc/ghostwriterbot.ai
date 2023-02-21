var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function changeVisibility(eachItem) {
  const eachItemContainer = eachItem.querySelector(".faq-item-description");
  const eachArrowImage = eachItem.querySelector(".arrow");
  if (eachItemContainer.classList.value.includes("hide")) {
    eachItemContainer.classList.remove("hide");
    eachArrowImage.classList.add("rotate");
  } else {
    eachItemContainer.classList.add("hide");
    eachArrowImage.classList.remove("rotate");
  }
}
