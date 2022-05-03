const subHeading = document.createElement("h4")
subHeading.id = "pageSubHeader"
//created the below code in HTML instead
//subHeading.textContent = "The beginning of a bright-eyed coder's journey..."
//document.querySelector("body").appendChild(subHeading)
//subHeading.style.fontStyle = "italic"

const myfunction = document.getElementById(laurenButton)

myfunction.addEventListener('click', function() {
    alert("hello, you clicked my button!");
  });

