const button = document.querySelector(".contactButton")
const centerField = document.querySelector(".centerField")
button.addEventListener("click", e => {
    centerField.removeChild(button)
    //create box
    const infoBox = document.createElement("div")
    infoBox.classList.add("infoBox")
    centerField.appendChild(infoBox)
    //create p1
    const p1 = document.createTextNode("You can call us, we are here for you from 9pm to 12am at:")
    infoBox.appendChild(p1)
    // callButton
    const callButton = document.createElement("button")
    callButton.classList.add("startButton")
    infoBox.appendChild(callButton)
    // call link
    const callLink = document.createElement("a")
    let linkText = document.createTextNode("+49 341 9737777");
    callLink.appendChild(linkText);
    callLink.title = "+49 341 9737777";
    callLink.href = "tel:+493419737777";
    callButton.appendChild(callLink);
    // p2
    const p2= document.createTextNode("You can also use our anonymous chat on Wednesdays during lecture time")
    infoBox.appendChild(p2)
    // chatButton
    const chatButton = document.createElement("button")
    chatButton.classList.add("startButton")
    infoBox.appendChild(chatButton)
    // call link
    const chatLink = document.createElement("a")
    let chatText = document.createTextNode("Chat Now!");
    chatLink.appendChild(chatText);
    chatLink.title = "+49 341 9737777";
    chatLink.href = "tel:+493419737777";
    chatButton.appendChild(chatLink);
    // p3
    const p3= document.createElement("a")
    p3.textContent = "Can’t reach us? Click here!"
    infoBox.appendChild(p3)
    


})