 function begin() {

     let popUp = document.querySelectorAll(".c-portfolio-modal-grid-hover-link");

     for (let i = 0; i < popUp.length; i++) {

         popUp[i].addEventListener("click",
             modalPopUp, false);

     }


     function modalPopUp(e) {

         console.log(e);
         e.preventDefault();
         let target = e.target;
         // the above is the .c-portfolio-modal-grid-hover-link class//
         console.log(target);
         // below is the parent of each modal because it loops through them //
         let subsequentClass = target.offsetParent.nextElementSibling;

         console.log(subsequentClass);
         subsequentClass.style.animation = "smoothPopUp 1000ms forwards";
         subsequentClass.removeEventListener("animationend", animateOut, false);


         // below adds the helper class to disply the grid //
         subsequentClass.classList.add("c-pop-up-project-display");
         console.log(subsequentClass);

         //below so you cannot scroll the body just the fixed modal //

         document.body.style.overflowY = 'hidden';

         // this even below is on the document itself, however can only be action  when the pop
         // up is displayed so hence it is in the click event of the link class
         document.addEventListener('keydown', (e) => {


             if (e.keyCode === 27) {

                 //because this is the event called on the document the event target is the same as the
                 // click event to open up the modal

                 console.log(e);


                 subsequentClass.style.animation = "smoothPopOut 1000ms forwards";
                 subsequentClass.addEventListener("animationend", animateOut, false);

             }
         }, false);




         // this this uses the parent of the modals to bubble down to the exit button
         // we need click, this is the exit button below

         let intoSectionHeader = subsequentClass.children[0];

         console.log(intoSectionHeader);
         console.log(intoSectionHeader.children[0]);

         let intoDivContainerThatHoldsEscapeButton = intoSectionHeader.children[0];
         let linkOutOfModal = intoDivContainerThatHoldsEscapeButton.children[0];

         linkOutOfModal.addEventListener("click", modalExit, false);







     }

     function modalExit(e) {

         let modalOutTarget = e.target;

         console.log(modalOutTarget);
         console.log(modalOutTarget.parentElement.parentElement);


         // below is us travelling back up the dom in the reverse order of the
         // linkOutModal variable in the modalPopUp event.

         let modalOutTargetGrandfather = modalOutTarget.parentElement.parentElement;

         let modalOutTargetGreatGreatGrandfather = modalOutTargetGrandfather.parentElement.parentElement;

         //modalOutTargetGrandfather.classList.remove("c-pop-up-project-display");//



         modalOutTargetGreatGreatGrandfather.style.animation = "smoothPopOut 1000ms forwards";

         // below we wait for the animation to end before we do something, in this
         // case take out the helper class displaying the grid. 

         modalOutTargetGreatGreatGrandfather.addEventListener("animationend", animateOut, false);



     }






     function animateOut(e) {


         console.log(e.target);
         // modalOutTargetGrandfather.style.animation = "smoothPopOut 2000ms";//
         let takeOutClass = e.target;

         takeOutClass.classList.remove("c-pop-up-project-display");
         document.body.style.overflowY = 'visible';


         console.log(takeOutClass);




     }






 }







 window.addEventListener("load", begin, false);