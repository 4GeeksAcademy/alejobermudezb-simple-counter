import React from "react";



//create your first component
const Home = (num) => {
	return (
		<div id="mainBox">
			<div className="box"><i className="fa-light fa-clock"></i></div>
			<div className="box">{num.six}<h1></h1></div>
			<div className="box">{num.five}</div>
			<div className="box">{num.four}</div>
			<div className="box">{num.three}</div>
			<div className="box">{num.two}</div>
			<div className="box">{num.one}</div>
		</div>
		
		
	);
};

export default Home;