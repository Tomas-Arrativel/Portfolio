import React from "react";
import "./forms.css";

const Forms = ({ icon, text, name, link }) => {
	return (
		<a href={link} target={link === "#" ? "_self" : "_blank"}>
			<div className="contact__forms-others__platform relative-div">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<div className="contact__forms-others__platform-icon">{icon}</div>
				<div className="contact__forms-others__platform-info">
					<p className="text">{text}</p>
					<p className="name">{name}</p>
				</div>
			</div>
		</a>
	);
};

export default Forms;
