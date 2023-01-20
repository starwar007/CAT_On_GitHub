let main = document.querySelector("main");
cats.forEach(function (cat) {
  let card = `<div class="${cat.favourite ? "card like" : "card"
    }" style="background-image: url(${cat.img_link})">
         <span>${cat.name}</span>
         </div>`;
  main.innerHTML += card;
});
let cards = document.getElementsByClassName("card");
for (let i = 0, cnt = cards.length; i < cnt; i++) {
  const width = cards[i].offsetWidth;
  cards[i].style.height = width * 0.6 + "px";
}
let addBtn = document.querySelector("#add");
let popupForm = document.querySelector("#popup-form");
let closePopupForm = popupForm.querySelector(".popup-close");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
    if (!popupForm.classList.contains("active")) {
    popupForm.classList.add("active");
    popupForm.parentElement.classList.add("active");
  }
});
closePopupForm.addEventListener("click", () => {
  popupForm.classList.remove("active");
  popupForm.parentElement.classList.remove("active");
})

let form = document.forms[0];
form.img_link.addEventListener("change", (e) => {
  form.firstElementChild.style.backgroundImage = `url(${e.target.value})`
  })
form.addEventListener("submit", e => {
  e.preventDefault();
  let body = {};
  for (let i = 0; i < form.elements.length; i++) {
    let inp = form.elements[i];
    if (inp.type === "checkbox") {
      body[inp.name] = inp.checked;
    } else if (inp.name && inp.value) {
      if (inp.type === "number") {
        body[inp.name] = +inp.value;
      } else {
        body[inp.name] = inp.value;
      }
    }
  }
  
  let new_cat = body;
  let card = `<div class="${new_cat.favourite ? "card like" : "card"
    }" style="background-image: url(${new_cat.img_link})">
         <span>${new_cat.name}</span>
         </div>`;
  main.innerHTML += card;
  let cards = main.querySelectorAll(".card");
  for (let i = 0, cnt = cards.length; i < cnt; i++) {
    const width = cards[i].offsetWidth;
    cards[i].style.height = width * 0.6 + "px";
  }
  form.reset();
  closePopupForm.click();      
})