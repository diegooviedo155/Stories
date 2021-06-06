// import element from "./slider/element";

function scrollToElement(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
}


document.querySelector(".menu")
    .addEventListener("click", () => {
        document.querySelector(".menu-screen").classList.add("active");
    });

document.querySelector(".close")
    .addEventListener("click", () => {
        document.querySelector(".menu-screen").classList.remove("active");
    });

let links = document.querySelectorAll(".menu-screen a");

scrollTo

links.forEach(link => {
    link.addEventListener("click", function(e) {
        document.querySelector(".menu-screen").classList.remove("active");

        let paths = this.href.split("/");
        const selector = paths[paths.length - 1];
        if (window.scrollTo) e.preventDefault();

        scrollToElement(document.querySelector(selector));
        return !!window.scrollTo;
    })
})