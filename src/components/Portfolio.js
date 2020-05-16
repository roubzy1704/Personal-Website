import React from "react";
import sample1 from "../Pictures/sample1.png";
import sample2 from "../Pictures/sample2.png";
import progress from "../Pictures/progress.jpg";

function Portfolio() {
	return (
		<div>
			<h2 className="pageTitle">Sample Projects</h2>

			<div className="row row-cols-1 row-cols-md-2">
				<div className="col mb-4">
					<div className="card shadow p-3 mb-5 bg-white rounded">
						<div>
							<img
								src={sample1}
								className="card-img-top "
								alt="..."
								// style={{ height: 300, width: "auto" }}
							/>
						</div>
						<div className="card-body portContent">
							<div className="card-title ">
								<h5>
									Demographic Predictor{"    "}
									<span className="toolsUsed">(React, BootStrap)</span>
								</h5>
							</div>
							<p className="card-text">
								This App uses an individual's image to predict their Age, Gender
								and Race. The predictions are made using the Clarifai API. You
								can paste an image URL or get a random image from Unsplash.com.
								Person does not exist images are computer generated images using
								a Style-based Generative Adversarial Network (StyleGAN).
							</p>
							<div className="cardFooter shadow-sm p-3 rounded">
								<form
									action="https://roubzy1704.github.io/Demographic-Predictor-App/"
									target="_blank"
								>
									<input
										type="submit"
										value="View Live"
										className="btn btn-success"
									/>
								</form>
								<form
									action="https://github.com/roubzy1704/Demographic-Predictor-App"
									target="_blank"
								>
									<input
										type="submit"
										value="View Code"
										className="btn btn-info"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card shadow p-3 mb-5 bg-white rounded">
						<div>
							<img
								src={sample2}
								className="card-img-top "
								alt="..."
								// style={{ height: 300, width: "auto" }}
							/>
						</div>
						<div className="card-body portContent">
							<div className="card-title ">
								<h5>
									Wedding Website Design{"    "}
									<span className="toolsUsed">(React, BootStrap)</span>
								</h5>
							</div>
							<p className="card-text">
								A single page wedding website design, based on a project I did
								for a client with a couple added improvements. Main idea was
								working with a selected color theme and incorporating a simple
								design.
							</p>
							<div className="cardFooter shadow-sm p-3 rounded">
								<form
									action="https://roubzy1704.github.io/wedding_design_concept/"
									target="_blank"
								>
									<input
										type="submit"
										value="View Live"
										className="btn btn-success"
									/>
								</form>
								<form
									action="https://github.com/roubzy1704/wedding_design_concept"
									target="_blank"
								>
									<input
										type="submit"
										value="View Code"
										className="btn btn-info"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card shadow p-3 mb-5 bg-white rounded">
						<img
							src={progress}
							className="card-img-top"
							alt="..."
							style={{
								height: 270,
								width: "auto",
							}}
						/>
						<div className="card-body">
							<h5 className="card-title">Chatbot Project</h5>
							<p className="card-text">Deploying soon</p>
							<div className="cardFooter">
								<form action="" target="_blank">
									<input
										type="submit"
										value="View Live"
										className="btn btn-success"
										disabled
									/>
								</form>
								<form action="" target="_blank">
									<input
										type="submit"
										value="View Code"
										className="btn btn-info"
										disabled
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
