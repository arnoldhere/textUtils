import Navbar from "./components/Navbar";
import TxtForm from "./components/TxtForm";
import React from "react";
// import showAlert from "./components/Alert";
function App() {
	return (
		<>
			<Navbar title="textutils"></Navbar>
			<TxtForm heading="Enter the text below" ></TxtForm>
		</>
	);
}
export default App;
