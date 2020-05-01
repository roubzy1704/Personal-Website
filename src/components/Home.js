import React from "react";

function Home() {
	return (
		<div className="container">
			<h2 className="pageTitle">Welcome</h2>
			<div className="home">
				<p className="animated fadeIn"> My name is Ugo Arubaleze</p>
				<p className="animated fadeIn delay-1s">I am a full stack developer</p>

				<span
					className="iconify animated rotateIn delay-2s"
					data-icon="mdi:alpha-u-box"
					data-inline="false"
				/>
				<span
					className="iconify animated zoomIn delay-2s"
					data-icon="gridicons:code"
					data-inline="false"
				/>
				<span
					className="iconify animated last rotateInDownRight delay-2s"
					data-icon="mdi:alpha-a-box"
					data-inline="false"
				/>
			</div>
		</div>
	);
}

export default Home;
