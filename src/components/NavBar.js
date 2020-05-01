import React from "react";

function NavBar({ activePage, selectedContent }) {
  /*
  this block is going to set the nav bar active, the last 2 lines of the Code,
  worked before to set it, but since i had to incoporate, a localstorage to 
  remember the last page when the user refreshes the page, I have to change
  the code.  So this block gets the pageOn from the app Component(i could have
  used a state in my nav bar component, might explore in the future), and 
 then querys the document for all li's and matches the innertext to the 
 props.activePage passed and then performs my remove and add class active.
  **Note - i feel this code is crude and there is a better way to do this
  but for now i will leave it like that, it does what i want, will optimize
  later on in the future 
  */
  if (activePage) {
    for (let i = 0; i < document.querySelectorAll("li").length; i++) {
      if (
        activePage ===
        document.querySelectorAll("li")[i].innerText.toLowerCase()
      ) {
        //select and then remove previous Nav Bar active
        document.getElementsByClassName("active")[0].classList.remove("active");
        //set new nav bar active based on users selection in event.target
        document.querySelectorAll("li")[i].classList.add("active");
      }
    }
  }

  function handleClick(event) {
    let selection = event.target.name;
    selectedContent(selection);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand brandTitle text-info logo"
        onClick={handleClick}
        name="home"
      >
        UA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={handleClick}
              name="home"
            >
              HOME
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={handleClick}
              name="about me"
            >
              ABOUT ME
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={handleClick}
              name="resume"
            >
              RESUME
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={handleClick}
              name="portfolio"
            >
              PORTFOLIO
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={handleClick}
              name="contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
