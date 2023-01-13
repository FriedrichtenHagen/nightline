const button = document.querySelector(".contactButton")
const centerField = document.querySelector(".centerField")
button.addEventListener("click", e => {
    let startUrl = window.location.href
    let splitString = startUrl.split("/").pop();

    if(splitString.includes("en")){
        centerField.removeChild(button)
        //create box
        const infoBox = document.createElement("div")
        infoBox.classList.add("infoBox")
        centerField.appendChild(infoBox)
        //create p1
        const p1 = document.createTextNode("You can call us, we are here for you! (from 9-12pm Mo-Fr, during the semester)")
        infoBox.appendChild(p1)
        // callButton
        // const callButton = document.createElement("button")
        // callButton.classList.add("startButton")
        // infoBox.appendChild(callButton)
        // call link
        const callLink = document.createElement("a")
        let linkText = document.createTextNode("+49 341 9737777");
        callLink.appendChild(linkText);
        callLink.title = "+49 341 9737777";
        callLink.href = "tel:+493419737777";
        callLink.classList.add("startButton")
        infoBox.appendChild(callLink);
        // p2
        const p2= document.createTextNode("If the chat is not available at the moment, you can find other nightline chats here: nightlines.eu/erreichbarkeit")
        infoBox.appendChild(p2)
    
        // iframe
        const ifrm= document.createElement("iframe")
        ifrm.setAttribute("src", "https://chat.archimedes-gs.de/leipzig/");
        ifrm.style.width = "350px";
        ifrm.style.height = "50px";
        infoBox.appendChild(ifrm);
        
    } else{
        //create english version
        centerField.removeChild(button)
        //create box
        const infoBox = document.createElement("div")
        infoBox.classList.add("infoBox")
        centerField.appendChild(infoBox)
        //create p1
        const p1 = document.createTextNode("Ruf uns an, wir sind für dich da! (von 21-24 Uhr Mo-Fr, während des Semesters)")
        infoBox.appendChild(p1)
        // call link
        const callLink = document.createElement("a")
        let linkText = document.createTextNode("+49 341 9737777");
        callLink.appendChild(linkText);
        callLink.title = "+49 341 9737777";
        callLink.href = "tel:+493419737777";
        callLink.classList.add("startButton")
        infoBox.appendChild(callLink);
        // p2 ADD LINK HERE
        const p2= document.createTextNode("Falls der Chat gerade nicht erreichbar ist, findest du unter nightlines.eu/erreichbarkeit weitere Möglichkeiten zum Chatten.")
        infoBox.appendChild(p2)

        // iframe
        const ifrm= document.createElement("iframe")
        ifrm.setAttribute("src", "https://chat.archimedes-gs.de/leipzig/");
        ifrm.style.width = "350px";
        ifrm.style.height = "50px";
        infoBox.appendChild(ifrm);
    }
})