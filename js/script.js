
const welcome = () => {
    console.log("Witaj zabłąkany programisto na stronie poświęconej pasji i motywacji!")
}
welcome();
{
    const hidePicture = () => {

        const button__twoBoxers = document.querySelector(".js-button__twoBoxers");
        const twoBoxers = document.querySelector(".js-twoBoxers");

        button__twoBoxers.addEventListener("click", () => {
            twoBoxers.remove();
        });

    }

    const init = () => {
        hidePicture();
    }
    init();
}
{
    const hidePicture = () => {
        const button__championship = document.querySelector(".js-button__championship");
        const championship = document.querySelector(".js-championship");

        button__championship.addEventListener("click", () => {
            championship.remove();
        });
    }
    const init = () => {
        hidePicture();
    }
    init();
}
{
    const hidePicture = () => {
        const button__cup = document.querySelector(".js-button__cup"); // usuwa zdjęcie
        const cup = document.querySelector(".js-cup");

        button__cup.addEventListener("click", () => {
            cup.remove();
        });
    }
    const init = () => {
        hidePicture();
    }
    init();
}
