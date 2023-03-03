/*=============== Display Menu ===============*/


const menuToggle = document.getElementById("navToggle");
const menuDisplay = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    menuDisplay.classList.toggle("nav__menu--visible")
})

/*=============== Toggle Transition Open/Close ===============*/

const nav = document.querySelector("nav");

menuToggle.onclick = function(){
    nav.classList.toggle("open")
}

/*=============== Active Color ===============*/

const list = document.querySelectorAll(".nav__item");

function activarLink(){
    list.forEach((item)=>
    item.classList.remove("nav__item--active"))
    this.classList.add("nav__item--active")
}
list.forEach((item)=>
item.addEventListener("click", activarLink)
)