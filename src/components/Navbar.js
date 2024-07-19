import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

export default function Navbar(props) {
	/* state variable named alert */
	const [alert, setAlert] = useState(null);
	const showAlert = (msg, type) => {
		setAlert({ detail: msg });
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	// toggle theme using hooks & states
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			showAlert("Dark mode has been enable");
			document.title= " Text utilities - Dark mode";
		} else {
			setTheme("light");
			showAlert("Light mode has been enable");
			document.title= " Text utilities - Light mode";
		}
	};
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	return (
		<>
			<Alert alert={alert}></Alert>
			<nav className={`navbar navbar-expand-lg navbar-danger bg-danger`}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<h1 className="navbar-brand text-white text-center">
							{props.title}
						</h1>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link " aria-current="page" href="/">
									Reload
								</a>
							</li>
						</ul>
						<form className="d-flex input-group w-auto">
							<input
								type="search"
								className="form-control"
								placeholder="Search here"
								aria-label="Search"
							/>
							<button
								className="btn btn-primary"
								type="button"
								data-mdb-ripple-color="dark"
							>
								Search
							</button>
						</form>
						<button onClick={toggleTheme} className={`dark-mode-icon m-3 }`}>
							<svg
								width="30"
								height="30"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10.08 2.734a.922.922 0 0 1 .096 1.03 8.65 8.65 0 0 0-1.054 4.152c0 4.825 3.934 8.732 8.782 8.732.632 0 1.248-.066 1.84-.192a.945.945 0 0 1 .971.38.88.88 0 0 1-.037 1.071 10.02 10.02 0 0 1-7.785 3.694C7.36 21.6 2.88 17.144 2.88 11.653c0-4.133 2.537-7.678 6.149-9.18a.903.903 0 0 1 1.05.261Z"></path>
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
//prop(property types) - proptypes
Navbar.propTypes = {
	title: PropTypes.string,
};
// Specifies the default values for props:
Navbar.defaultProps = {
	title: "brand",
};
