import React from "react";

export default function Alert(props) {
	return (
		props.alert && (
			<div
				className="alert alert-primary alert-dismissible fade-in-out show"
				role="alert"
			>
				<strong>{props.alert.detail}</strong>
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
				></button>
			</div>
		)
	);
}
