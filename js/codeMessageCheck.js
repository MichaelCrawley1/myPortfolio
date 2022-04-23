 function startCodeMessage() {


 let clickX = document.querySelector(".c-code-message-check-close-message");

 let displayNoneWhenClicked = document.querySelector(".c-code-message-check");

 clickX.addEventListener("click", closeMessage, false);

 function closeMessage(){

    displayNoneWhenClicked.style.display = "none";




 }


 }



 window.addEventListener("load", startCodeMessage, false);