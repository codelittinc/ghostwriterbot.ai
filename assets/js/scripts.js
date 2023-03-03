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

function SendForm(event) {
  event.preventDefault();

  const form = document.querySelector("#support-form");

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const company = document.querySelector("#company").value;
  const problem = document.querySelector("#problem").value;

  const data = {
    "first-name": firstName,
    "last-name": lastName,
    "email": email,
    "company": company,
    "problem": problem,
  };

  console.log(data);

  axios
    .post("https://hooks.zapier.com/hooks/catch/4254966/3ok9w5p/", data)
    .then(function (response) {
      console.log("Resposta:", response.data);
      form.reset();
    })
    .catch(function (error) {
      console.error("Erro:", error);
      form.reset();
    });
}
