// document.documentElement.style.scrollBehavior = "smooth";

let copyButton = document.querySelector('.copy-number')
let copyConfirmationBox = document.querySelector('.copy-confirmation')

copyButton.addEventListener("click", (e) => {
    console.log(e.target)

    let copyText = document.getElementById('ph-number')
    console.log(copyText.innerText)

    navigator.clipboard.writeText(copyText.innerHTML);
    copyButton.innerHTML = "done";
    copyButton.style.borderColor = "green";
    copyButton.style.color = "white"
    copyButton.style.backgroundColor = "green"

    setTimeout(() => {
        copyButton.innerHTML = "content_copy";
        copyButton.style.borderColor = "rgb(255, 93, 93)";
        copyButton.style.color = "white"
        copyButton.style.backgroundColor = "rgb(255, 93, 93)"
    }, 2000)
})


let menuButton = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-icon');
let fullScreenNav = document.querySelector('.fullscreen-nav');

menuButton.addEventListener("click", () => {
    fullScreenNav.style.width = "100%";
})

closeIcon.addEventListener("click", () => {
    fullScreenNav.style.width = "0%";
})

window.addEventListener("click", (e) => {
    if(e.target.classList[0] === "nav-item") {
        fullScreenNav.style.width = "0%";
    }
})