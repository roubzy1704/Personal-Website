import React from "react";

function Resume() {
	return (
		<div>
			<h2 className="pageTitle">Summary</h2>
			<div className="container resume">
				<div className="row ">
					<div className="col-sm-12 col-md-6 writing">
						<h3>Education</h3>
						<h5> Masters of Science in Computer Science </h5>
						<p> University of Texas at Tyler (2016)</p>
						<h5> Bachelors of Science in Computer Science </h5>
						<p> University of Houston Downtown (2013)</p>
						<h3>Experience</h3>
						<h5>Freelance Web Developer (2019 - Present)</h5>
						<h5>Senior Technical Support Specialist (2017 - 2018)</h5>
						<p>WorldPay</p>
						<h5>Special Operation Team Leader (2014)</h5>
						<p>NetSync Network Solutions</p>
					</div>
					<div className="col-sm-12 col-md-6">
						<h3> Skills </h3>
						<h5> Languages</h5>
						<span
							title="JavaScript"
							className="iconify iconresume"
							data-icon="logos:javascript"
							data-inline="false"
						/>
						<span
							title="C#"
							className="iconify iconresume"
							data-icon="logos:c-sharp"
							data-inline="false"
						></span>

						<span
							title="Java"
							className="iconify iconresume"
							data-icon="logos:java"
							data-inline="false"
						/>

						<span
							title="Python"
							className="iconify iconresume"
							data-icon="logos:python"
							data-inline="false"
						/>

						<span
							title="HTML5"
							className="iconify iconresume"
							data-icon="logos:html-5"
							data-inline="false"
						/>

						<span
							title="CSS3"
							className="iconify iconresume"
							data-icon="logos:css-3"
							data-inline="false"
						/>

						<span
							title="Sass"
							className="iconify iconresume"
							data-icon="logos:sass"
							data-inline="false"
						/>

						<h5> Libraries and Frameworks </h5>
						<span
							title="React"
							className="iconify iconresume"
							data-icon="logos:react"
							data-inline="false"
						/>
						<span
							title="node.js"
							className="iconify iconresume"
							data-icon="logos:nodejs"
							data-inline="false"
						/>
						<span
							title="Bootstrap"
							className="iconify iconresume"
							data-icon="logos:bootstrap"
							data-inline="false"
						/>
						<span
							title="Express.js"
							className="iconify iconresume"
							data-icon="logos:express"
							data-inline="false"
						/>
						<span
							title="JQuery"
							className="iconify iconresume"
							data-icon="logos:jquery"
							data-inline="false"
						/>
						<span
							title="dotNET"
							className="iconify iconresume"
							data-icon="logos:dotnet"
							data-inline="false"
						/>
						<h5> Databases</h5>
						<span
							title="MongoDB"
							className="iconify iconresume"
							data-icon="logos:mongodb"
							data-inline="false"
						/>
						<span
							title="PostgreSQL"
							className="iconify iconresume"
							data-icon="logos:postgresql"
							data-inline="false"
						/>
						<span
							title="MySQL"
							className="iconify iconresume"
							data-icon="logos:mysql"
							data-inline="false"
						/>
						<h5> Tools </h5>
						<span
							title="npm"
							className="iconify iconresume"
							data-icon="logos:npm"
							data-inline="false"
						/>
						<span
							title="git"
							className="iconify iconresume"
							data-icon="logos:git"
							data-inline="false"
						/>
						<span
							title="Nuget"
							className="iconify iconresume"
							data-icon="cib:nuget"
							data-inline="false"
							style={{ color: "blue" }}
						></span>
						<h5> Editors </h5>
						<span
							title="VSCode"
							className="iconify iconresume"
							data-icon="logos:visual-studio-code"
							data-inline="false"
						/>
						<span
							title="Sublime text"
							className="iconify iconresume"
							data-icon="simple-icons:sublimetext"
							data-inline="false"
						/>
						<span
							title="Atom"
							className="iconify iconresume"
							data-icon="logos:atom"
							data-inline="false"
						/>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<form
					action="https://drive.google.com/file/d/1uEAyLU7ruCyZaOCP4Y1U3xM9pRTcxdjV/view?usp=sharing"
					method="get"
					target="_blank"
				>
					<button type="submit" className="btn btn-success btn-lg resumebtn">
						View Resume
					</button>
				</form>
			</div>
		</div>
	);
}

export default Resume;
