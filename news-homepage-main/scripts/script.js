const hamToggle = document.querySelector(".nav__hamburguer");
const navMenu = document.querySelector(".nav__menu");

hamToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav__menu--visible")

})

const list = document.querySelectorAll(".nav__item");

function activarLink(){
    list.forEach((item)=>
    item.classList.remove("nav__item--active"))
    this.classList.add("nav__item--active")
}
list.forEach((item)=>
item.addEventListener("click", activarLink)
)