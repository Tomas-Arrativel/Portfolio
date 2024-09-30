import React from "react";
import "./projects.css";
import { Project } from "../../components/exports";

const Projects = () => {
	return (
		<div className="main__projects section__padding" id="projects">
			<h2 className="title">Projects</h2>
			<div className="main__projects-container">
				<Project
					img="img/mxarg.PNG"
					title="MX-Arg"
					text="This is a page that simulates a rental webpage of tracks and bikes for motocross based in Argentina."
					technologies={["Front-end", "HTML", "CSS", "Javascript", "ReactJs"]}
					link="https://mxarg.vercel.app/"
					srcLink="https://github.com/Tomas-Arrativel/portfolio-pages/tree/main/MX-Arg"
				/>
				<Project
					img="img/paletteheaven.PNG"
					title="Palette Heaven"
					text="This is a personal project that I created for selling websites to house-painting companies. Here, you can explore various features, including a form that sends me an email with the user's input, animated dropdown menus, and much more."
					technologies={["Front-end", "HTML", "CSS", "TypeScript", "ReactJs"]}
					link="https://palette-heaven.vercel.app/"
					srcLink="https://github.com/Tomas-Arrativel/PaletteHaven"
				/>
				<Project
					img="img/skycommerce.PNG"
					title="SkyCommerce"
					text="In this project you will find an ecommerce where you can add products to the cart, search products and more, I made this by using an api for the products and react-router-dom to navigate through the pages."
					technologies={[
						"Front-end",
						"HTML",
						"CSS",
						"React",
						"Typescript",
						"API",
					]}
					link="https://sky-commerce.vercel.app/"
					srcLink="https://github.com/Tomas-Arrativel/SkyCommerce"
				/>
				<Project
					img="img/ecommerce-fullstack.PNG"
					title="Ecommerce Fullstack"
					text="This is my first full-stack project, an ecommerce platform where users can create an account, add products to their cart, filter by category, view orders, remove items from the cart, and more. I plan to deploy this project soon so it can be accessed from any device."
					technologies={[
						"Fullstack",
						"React",
						"Javascript",
						"API",
						"NodeJS",
						"ExpressJS",
						"PostgreSQL",
					]}
					link="https://www.youtube.com/watch?v=8vte6944dTI"
					srcLink="https://github.com/Tomas-Arrativel/Ecommerce-Codecademy"
				/>
			</div>
		</div>
	);
};

export default Projects;
