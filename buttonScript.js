const button = document.querySelector(".contactButton")
const centerField = document.querySelector(".centerField")
button.addEventListener("click", e => {


    const infoBox = document.querySelector(".infoBox")
    infoBox.classList.toggle("active")
    button.classList.toggle("active")
})

// make contactButton inactive