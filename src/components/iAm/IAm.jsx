import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import "./iAm.css";

const IAm = () => {
	return (
		<div className="header__iam section__padding" id="home">
			<div className="header__iam--info">
				<h1>Tomás Arrativel</h1>
				<h2>Fullstack web developer</h2>
				<p>
					Hi, I'm Tomás Arrativel. A passionate Fullstack Developer from
					Argentina. 📍
				</p>
				<div className="header__iam--info__svgs">
					<a
						href="https://www.linkedin.com/in/juan-tom%C3%A1s-arrativel-59281a240/"
						target="_blank"
					>
						<AiFillLinkedin size={30} />
					</a>
					<a href="https://github.com/Tomas-Arrativel" target="_blank">
						<BsGithub size={30} />
					</a>
				</div>
			</div>
			<div className="header__iam--img">
				<img src="img/foto.jpg" alt="My photo" />
			</div>
		</div>
	);
};

export default IAm;
