const hamburger = document.querySelector(".hamburger")
const nav__menu = document.querySelector(".nav__menu")
const nav__item = document.querySelector(".nav__item")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  nav__menu.classList.toggle("active")
  nav__item.classList.toggle("active")
})

document.querySelectorAll(".nav__link").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove(".active")
    nav__menu.classList.remove(".active")
    nav__item.classList.remove(".active")
  })
)

//form

const form = document.querySelector("form-group")

form.get
