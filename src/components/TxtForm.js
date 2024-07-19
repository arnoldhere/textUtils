import React, { useState } from "react";

export default function TxtForm(props) {
	//hooks in reactJs
	const [txt, setTxt] = useState(""); // state variables
	const handleClickupper = () => {
		// setTxt("You've clicked handle button !");
		let result = txt.toUpperCase();
		document.getElementById("result").innerText = result;
	};
	const handleClicklow = () => {
		// setTxt("You've clicked handle button !");
		let result = txt.toLowerCase();
		document.getElementById("result").innerText = result;
	};
	const handleChange = (event) => {
		setTxt(event.target.value); //using state in react
	};
	// let expression = txt.split(" ").length;
	return (
		<>
			<div className="p-3 bg-warning mt-5 container">
				<h1 className="text-center text-success">{props.heading}</h1>
				<textarea
					name="txtbox"
					// value={txt}
					id="txtbox"
					className="form-control"
					onChange={handleChange}
					placeholder="Something here...."
					required
				></textarea>
				<button
					className="btn btn-info m-3 mt-5 text-center text-white"
					onClick={handleClickupper}
				>
					Uppercase
				</button>
				<button
					className="btn btn-dark m-3 mt-5 text-center text-white"
					onClick={handleClicklow}
				>
					Lowercase
				</button>
				<hr />
				<div className="result container">
					<h3 className="text-white text-center" id="result"></h3>
					<br />
					<h6 className="text-white text-center" id="count">
						<p>
							<strong className="text-dark">Counter : </strong> <br />
							{
								txt.split(/\s+/).filter((element) => {
									return element.length !== 0;
								}).length
							}{" "}
							words and {txt.length} characters
						</p>
					</h6>
				</div>
			</div>
			<div className="previewtxt mt-5 container text-center">
				<h3 className="text-primary">Preview</h3>
				<p className="text-info">{txt}</p>
			</div>
		</>
	);
}
