document.addEventListener('DOMContentLoaded', function () {



  /**
   * 
   * Manipulating the DOM exercise.
   * Exercise programmatically builds navigation,
   * scrolls to anchors from navigation,
   * and highlights section in viewport upon scrolling.
   * 
   * Dependencies: None
   * 
   * JS Version: ES2015/ES6
   * 
   * JS Standard: ESlint
   * 
  */

  /**
   * Define Global Variables
   * 
  */
  const sectionsArr = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"];

  /**
   * End Global Variables
   * Start Helper Functions
   * 
  */



  /**
   * End Helper Functions
   * Begin Main Functions
   * 
  */

  // build the nav
  function initNav() {
    // find ul.navbar__list
    const navbarElement = document.querySelector('#navbar__list')
    let link
    for (const section of sectionsArr) {
      link = document.createElement("li")
      link.className = "menu__link"
      linkText = document.createTextNode(`${section}`)
      link.appendChild(linkText)
      navbarElement.appendChild(link)
    }
  }
  initNav();
  // Add class 'active' to section when near top of viewport
//Determine top of viewpoort

  // Scroll to anchor ID using scrollTO event


  /**
   * End Main Functions
   * Begin Events
   *
  */

  // Build menu 

  // Scroll to section on link click

  // Set sections as active


});
