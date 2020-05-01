import React from "react";
import ugoPic from "../Pictures/Ugo.jpg";

function About() {
	// let animateState = false;

	// localStorage.setItem("animeState", "true");

	// if (localStorage.getItem("animeState") === "true") {
	//   console.log(localStorage.getItem("animeState"));
	//   console.log(animateState);
	//   setTimeout(function() {
	//     const element = document.getElementsByClassName("aboutMe");
	//     element[0].classList.remove("animated", "fadeInUp");
	//     console.log(element[0]);
	//   });
	//   localStorage.setItem("animeState", "false");
	// } else {
	//   setTimeout(function() {
	//     const element = document.getElementsByClassName("aboutMe");
	//     element[0].classList.add("animated", "fadeInUp");
	//   });
	// }

	return (
		<div>
			<h2 className="pageTitle">Bio</h2>

			<div className="container about">
				<div className="card aboutCard">
					<div className="card-body">
						<div className="row justify-content-center align-items-center">
							<div className="col-sm-12 col-md-4">
								<img className="picture" src={ugoPic} alt="Ugoimage" />
							</div>

							<div className="aboutMe col-sm-12 col-md-6 animated fadeInUp delay-1s">
								<p>
									My name is Ugo, and I am a full stack web developer based in
									Houston TX. I am an excellent self learner and problem solver.
									When it comes to doing the best I can, I am hardworking,
									unrelenting and receptive. I put a lot of time and focus into
									what ever I do and when building website this translates into
									a clean, modern and intuitive design.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
