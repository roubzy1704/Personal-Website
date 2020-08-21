import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Porfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
	const [navSelection, setNavSelection] = useState("");

	function handleNavSelection(content) {
		setNavSelection(content);
	}

	/*
  Persisting State to Local Storage using useEffect

  start reading from second useEffect block below to get full picture
  This usesEffect get the local Storage variable myPageOn and if there is a value
  its will set navSelection based on that value.
  This block has to be run first before the one below so we can check local storage,
  and if there is a value use that value.  if no value move on
  **Note - local storage only stores strings. so we convert using  JSON.parse(pageOn)
  */
	useEffect(() => {
		const pageOn = localStorage.getItem("myPageOn");
		if (pageOn) {
			setNavSelection(pageOn);
		}
	}, []);

	/*
  This useEffect block first sets a variable called myPageOn to navSelection in the local Storage
  **Note - local storage only accepts strings. so if my state is not a string then we use JSON.stringify(navSelection)
  local Storage variables cane be checked in chrome by going to console => application
  */
	useEffect(() => {
		localStorage.setItem("myPageOn", navSelection);
	});

	let displayContent;
	switch (navSelection) {
		case "about me":
			displayContent = <About />;
			break;
		case "resume":
			displayContent = <Resume />;
			break;
		case "portfolio":
			displayContent = <Porfolio />;
			break;
		case "contact":
			displayContent = <Contact />;
			break;
		default:
			displayContent = <Home />;
			break;
	}

	return (
		<div className="container page-container">
			<NavBar selectedContent={handleNavSelection} activePage={navSelection} />
			<div>{displayContent}</div>
			<Footer />
		</div>
	);
}

export default App;
