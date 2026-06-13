let menuBar = document.getElementById("responsive-nav");
let bool = false; 
function showBar() {
    if (bool) {
        menuBar.style.display = "none"; 
    } else {
        menuBar.style.display = "flex"; 
    }
    bool = !bool;
}
let moreDis = document.getElementById("more-dis");
function showDis(){
    moreDis.style.display = "block";
}
function closeDis(){
    moreDis.style.display = "none";
}
let observer = new IntersectionObserver(seenElements => {
    seenElements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("sideSlid");
        } else {
            element.target.classList.remove("sideSlid");
        }
    });
}, {
    threshold: 0.5
});
const sideSlidElement = document.getElementById("img-container");
observer.observe(sideSlidElement);
const showMoreDis = document.getElementById("show-more-dis");
observer.observe(showMoreDis);
const originDis = document.getElementById("origin-dis");
observer.observe(originDis);
const ourOrigin = document.getElementById("our-origin");
observer.observe(ourOrigin);
const texts = document.querySelectorAll(".texts");
texts.forEach(text => observer.observe(text));