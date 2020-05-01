import React from "react";
import sample from "../Pictures/sample1.png";
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
								src={sample}
								className="card-img-top "
								alt="..."
								// style={{ height: 300, width: "auto" }}
							/>
						</div>
						<div className="card-body">
							<h5 className="card-title">Demographic Predictor</h5>
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

				{/* //*THIS IS FOR MORE PROJECTS
        <div className="col mb-4">
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural
								lead-in to additional content.
							</p>
              	<div className="cardFooter">
								<form
									action="//!URL"
									target="_blank"
								>
									<input
										type="submit"
										value="View Live"
										className="btn btn-success"
									/>
								</form>
								<form
									action="//!URL"
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
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
              	<div className="cardFooter">
								<form
									action="//!URL"
									target="_blank"
								>
									<input
										type="submit"
										value="View Live"
										className="btn btn-success"
									/>
								</form>
								<form
									action="//!URL"
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
				</div> */}
			</div>
		</div>
	);
}

export default Portfolio;
