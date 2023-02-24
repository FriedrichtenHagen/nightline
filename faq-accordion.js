const toggleIcons = document.querySelectorAll(".faqQuestionIcon")
const answers = document.querySelectorAll(".faqAnswer")

toggleIcons.forEach((icon, index) => {
    icon.addEventListener("click", function(){
        toggleAnswer(index)
        toggleIcon(index)
    })
})

function toggleAnswer(index){
    console.log(index)
    answers[index].classList.toggle("faqHidden")
}
function toggleIcon(index){
    toggleIcons[index].classList.toggle("faqActive")
}