// document.documentElement.style.scrollBehavior = "smooth";

let copyButton = document.querySelector('.copy-number')
let copyConfirmationBox = document.querySelector('.copy-confirmation')

copyButton.addEventListener("click", (e) => {
    console.log(e.target)

    let copyText = document.getElementById('ph-number')
    console.log(copyText.innerText)

    navigator.clipboard.writeText(copyText.innerHTML);
    copyConfirmationBox.innerText = "Copied!"

    setTimeout(() => {
        copyConfirmationBox.innerHTML = ""
    }, 5000)
})