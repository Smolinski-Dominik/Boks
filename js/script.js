console.log("Witaj zabłąkany programisto na stronie poświęconej pasji i motywacji!")

let button__twoBoxers = document.querySelector(".button__twoBoxers"); // zdjęcie zostaje usunięte
let twoBoxers = document.querySelector(".twoBoxers");
let button__championship = document.querySelector(".button__championship");
let championship = document.querySelector(".championship");
let button__cup = document.querySelector(".button__cup");
let cup = document.querySelector(".cup");

button__twoBoxers.addEventListener("click", () => {
    twoBoxers.remove();
});

button__championship.addEventListener("click", () => {
    championship.remove();
});

button__cup.addEventListener("click", () => {
    cup.remove();
});

