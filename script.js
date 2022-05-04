const subHeading = document.createElement("h4")
subHeading.id = "pageSubHeader"
//created the below code in HTML instead
//subHeading.textContent = "The beginning of a bright-eyed coder's journey..."
//document.querySelector("body").appendChild(subHeading)
//subHeading.style.fontStyle = "italic"

const laurenButton = document.getElementById("laurenButton")

laurenButton.addEventListener("click", function(e) {
    console.log("hello, you clicked my button!");
});

