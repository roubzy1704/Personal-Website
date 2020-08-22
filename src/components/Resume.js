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
						<span
							class="iconify iconresume"
							data-icon="logos:graphql"
							data-inline="false"
						></span>

						<h5> Libraries and Frameworks </h5>
						<span
							title="React and React Native"
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
						<h5> Deployment </h5>
						<span
							title="GitHub"
							className="iconify iconresume"
							data-icon="ant-design:github-outlined"
							data-inline="false"
						></span>
						<span
							title="Heroku"
							className="iconify iconresume"
							data-icon="logos:heroku-icon"
							data-inline="false"
						></span>
						<span
							title="Netlify"
							className="iconify iconresume"
							data-icon="logos:netlify"
							data-inline="false"
						></span>
						<span
							title="CircleCI"
							className="iconify iconresume"
							data-icon="cib:circleci"
							data-inline="false"
						></span>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<form
					action="https://drive.google.com/file/d/12Pl0jx49V9moWUtcJcigeXAKkXLGyRE9/view?usp=sharing"
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
