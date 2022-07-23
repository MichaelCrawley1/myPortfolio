function start() {

    let hamburger = document.querySelector(".c-hero-layer-for-fat-fingers-mobile");
    let wrapperGrid = document.querySelector(".l-basic-grid");
    let exitHamburgerMenu = document.querySelector(".c-mobile-nav-hamburger-exit-container");
    const mediaQuery = window.matchMedia("(min-width: 47rem)");

    // list items to go to the correct part on the page and to close the menu//



    let listLinks = document.querySelectorAll(".c-mobile-nav-menu-list-item-links");
    for (let i = 0; i < listLinks.length; i++) {

        listLinks[i].addEventListener("click", closeMobileNavMenu, false);

    }

    // end of internal links to page //



    exitHamburgerMenu.addEventListener("click", closeMobileNavMenu, false);

    function closeMobileNavMenu() {

        wrapperGrid.classList.remove("l-basic-grid-js-mobile-nav-menu");
    }



    hamburger.addEventListener("click", mobileNavMenu, false);

    function mobileNavMenu() {

         mediaQuery.addListener(menuScreenChange);

        wrapperGrid.classList.add("l-basic-grid-js-mobile-nav-menu");

        function menuScreenChange() {

            if (mediaQuery.matches) {

                toggleHeader.classList.remove("l-basic-grid-js-mobile-nav-menu");
                


            }

        }


    }




}









window.addEventListener("load", start, false);