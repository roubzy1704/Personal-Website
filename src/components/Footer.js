import React from "react";

function Footer() {
	let dateYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<h6>
				<i className="fas fa-code" /> by Ugo Arubaleze {dateYear}
			</h6>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<a href="https://github.com/roubzy1704" target="_blank">
							<i className="social-icon fab fa-github-square " />
							&nbsp;&nbsp;Github
						</a>
					</div>

					<div className="col-sm">
						<a
							href="https://www.linkedin.com/in/ugo-arubaleze-151444145"
							target="_blank"
						>
							<i className="fab fa-linkedin" />
							&nbsp;&nbsp;LinkedIn
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
