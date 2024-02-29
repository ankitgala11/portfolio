import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
	return (
		<Container id="home">
			<div className="hero-text">
				<ScrollAnimation animateIn="fadeInUp">
					<p>
						Hello <img src={Hello} alt="Hello" width="20px" />, I'm
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
					<h1>Ankit Gala</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
					<h3>Developer/Programmer</h3>
				</ScrollAnimation>
				<ScrollAnimation>abc</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
					<BrowserRouter>
						<NavHashLink smooth to="#contact" className="button ">
							Contact
						</NavHashLink>
					</BrowserRouter>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
					<div className="social-media">
						<a
							href="https://www.linkedin.com/in/galaankit"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedin} alt="Linkedin" />
						</a>
						<a
							href="https://api.whatsapp.com/send/?phone=%2B919769424782&text=Hello+Ankit"
							target="_blank"
							rel="noreferrer"
						>
							<img src={whatsapp} alt="Whatsapp" />
						</a>
						<a
							href="https://github.com/ankitgala11/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={githubIcon} alt="GitHub" />
						</a>
					</div>
				</ScrollAnimation>
			</div>

			<div className="hero-image">
				<ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
					<img src={Illustration} alt="Ilustração" />
				</ScrollAnimation>
			</div>
		</Container>
	);
}
