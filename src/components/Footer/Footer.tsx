import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
	return (
		<Container className="footer">
			<div>
				<p>Ankit, Mumbai, India</p>
			</div>
			<div>
				<p>
					This Website was made with{" "}
					<img src={reactIcon} alt="React" />
					{/* <span>❤️</span> */}
				</p>
			</div>

			<div className="social-media">
				<a
					href="https://www.linkedin.com/in/galaankit"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedin} alt="Linkedin" />
				</a>
				<a
					href="https://github.com/ankitgala11/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={githubIcon} alt="GitHub" />
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=%2B919769424782&text=Hello+Ankit"
					target="_blank"
					rel="noreferrer"
				>
					<img src={whatsapp} alt="Whatsapp" />
				</a>
			</div>
		</Container>
	);
}
