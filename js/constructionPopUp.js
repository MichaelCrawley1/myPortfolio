function startConstructionPopUp(){

	let exitConstructionButton = document.querySelector(".c-pop-up-project-header-x-to-escape-image-button--this-time-for-construction-exit");

	exitConstructionButton.addEventListener("click",
             exitConstruction, false);

	let theConstructionModalItself = document.querySelector(".c-back-up-pop-up-message");

	 let constructionPopUpBeginning = document.querySelectorAll(".c-js-pop-up-project-content-button--under-construction");

	   for (let i = 0; i < constructionPopUpBeginning.length; i++) {

        constructionPopUpBeginning[i].addEventListener("click",
             siteConstuctionMessage, false);

     }


        

     


  function siteConstuctionMessage(e){

  	theConstructionModalItself.style.display = "block";




  }

  function exitConstruction () {

  	theConstructionModalItself.style.display = "none";




  }

}











 window.addEventListener("load", startConstructionPopUp, false);