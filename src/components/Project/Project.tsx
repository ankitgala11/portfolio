import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
	return (
		<Container id="project">
			<h2>My Projects</h2>
			<div className="projects">
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<div className="project-links">
								<a
									href="https://github.com/ankitgala11/Restaurant-seat-reservation"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Foodie Spot Savor</h3>
							<p>
								The Foodie Spot Savor is a user-friendly and
								efficient application designed to streamline the
								process of reserving seats in a fast food
								restaurant. Whether guests are planning a casual
								dinner, a business meeting, or a special
								celebration, this app provides a convenient way
								to secure the perfect spot.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>ReactJS</li>
								<li>NodeJS</li>
								<li>Express</li>
								<li>MongoDB</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<div className="project-links">
								<a
									href="https://github.com/ankitgala11/ATM-location-predictor"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>ATM Location Predictor</h3>
							<p>
								The application determine the optimal location
								for placing an ATM. It uses machine learning to
								analyze footfall traffic data. By identifying
								patterns in foot traffic, it predicts the most
								strategic locations where an ATM can maximize
								its utility and effectiveness.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Python</li>
								<li>Here Dev API</li>
								<li>Machine Learning</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<div className="project-links">
								<a
									href="https://github.com/ankitgala11/ATM-location-predictor"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Attendance Scanner</h3>
							<p>
								The application provides users with a convenient
								method to mark their attendance, capturing both
								in-time and out-time. Users can scan a QR code,
								followed by entering a unique OTP. This dual
								authentication method adds an extra layer of
								security, making the attendance marking process
								reliable and resistant to errors.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>CSS/Bootstap</li>
								<li>Javascript/JQuery</li>
								<li>PHP</li>
								<li>MySQL</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<div className="project-links">
								<a
									href="https://github.com/ankitgala11/Inventory-stock-management"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Inventory Management</h3>
							<p>
								The website serves as a comprehensive platform
								for users or organizations to efficiently manage
								their stocks. Offering a user-friendly
								interface, it enables easy tracking,
								organization, and analysis of stock levels.
								Users can monitor stock movements and generate
								detailed reports, providing a centralized and
								streamlined solution for effective stock
								management.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Bootstap</li>
								<li>Javascript</li>
								<li>Laravel</li>
								<li>MySQL</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<header>
							<div className="project-links">
								<a
									href="https://github.com/ankitgala11/Car-Rental-Service"
									target="_blank"
									rel="noreferrer"
								>
									<img src={externalLink} alt="Visit" />
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Car Rental Services</h3>
							<p>
								This website showcases the services and
								functionalities of a rental car platform. The
								user interface has been meticulously designed
								and implemented, offering a visually appealing
								and intuitive experience. Visitors can explore
								the website to view a comprehensive display of
								available cars, along with detailed pricing
								information.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>HTML</li>
								<li>CSS</li>
								<li>Bootstrap</li>
								<li>Javascript</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
