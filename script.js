const subHeading = document.createElement("h4")
subHeading.id = "pageSubHeader"
//created the below code in HTML instead
//subHeading.textContent = "The beginning of a bright-eyed coder's journey..."
//document.querySelector("body").appendChild(subHeading)
//subHeading.style.fontStyle = "italic"

let btnCounter = document.getElementById(buttonCounter)
let counter = 0

btnCounter.addEventListener("click", function(){
    while(counter < 10) {
        counter++
        console.log(`Lauren has a cool counter, watch it${counter}`)
        counter = counter + 1
    }    
})