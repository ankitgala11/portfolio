import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
	const projects = [
		{
			title: "HabitatHub",
			description:
				"Constructed a robust real estate web application, empowering users to list properties for rent or sale and assist those individuals in need for accommodation. Engineered dynamic search feature, resulting in 10x reduction in search time along with Google OAuth sign in and JWT tokens for authentication and authorization, thus enhancing user satisfaction",
			techStack: [
				"NodeJS",
				"Express",
				"React",
				"Redux",
				"Tailwind",
				"MongoDB",
				"Firebase",
				"Render",
			],
			githubLink: "https://github.com/ankitgala11/HabitatHub",
		},
		{
			title: "Multiplayer Trivia Game",
			description:
				"Led the development of a 1v1 real-time quiz based competition using websockets ensuring robust backend logic to process user submitted answers resulting in 100% fair competition. Introduced additional features like creating room, waiting lobby, live score updates, winner declarations, thereby boosting user engagement by 40%",
			techStack: [
				"Socket.io",
				"ReactJS",
				"NodeJS",
				"Express",
				"Bootstrap",
			],
			githubLink: "https://github.com/ankitgala11/quiz-multiplayer",
		},
		{
			title: "Bookshelf",
			description:
				"Built a book tracking system to efficiently manage books read by users utilizing Thymeleaf to develop a user interface with full CRUD functionality, improving user interaction by 2x. Applied MVC programming principles, enhancing performance and reducing maintenance time by 30%. ",
			techStack: [
				"Java",
				"Spring Boot",
				"Spring MVC",
				"MySQL",
				"Thymeleaf",
			],
			githubLink: "https://github.com/ankitgala11/bookshelf",
		},
		{
			title: "Foodie Spot Savor",
			description:
				"The Foodie Spot Savor is a user-friendly and efficient application designed to streamline the process of reserving seats in a fast food restaurant. Whether guests are planning a casual dinner, a business meeting, or a special celebration, this app provides a convenient way to secure the perfect spot.",
			techStack: ["ReactJS", "NodeJS", "Express", "MongoDB"],
			githubLink:
				"https://github.com/ankitgala11/Restaurant-seat-reservation",
		},
		{
			title: "ATM Location Predictor",
			description:
				"The application determines the optimal location for placing an ATM. It uses machine learning to analyze footfall traffic data. By identifying patterns in foot traffic, it predicts the most strategic locations where an ATM can maximize its utility and effectiveness.",
			techStack: ["Python", "Here Dev API", "Machine Learning"],
			githubLink: "https://github.com/ankitgala11/ATM-location-predictor",
		},
		{
			title: "Attendance Scanner",
			description:
				"The application provides users with a convenient method to mark their attendance, capturing both in-time and out-time. Users can scan a QR code, followed by entering a unique OTP. This dual authentication method adds an extra layer of security, making the attendance marking process reliable and resistant to errors.",
			techStack: ["CSS/Bootstrap", "JavaScript/JQuery", "PHP", "MySQL"],
			githubLink: "https://github.com/ankitgala11/Attendance-Scanner",
		},
	];

	return (
		<Container id="project">
			<h2>My Projects</h2>
			<div className="projects">
				{projects.map((project, index) => (
					<ScrollAnimation animateIn="flipInX" key={index}>
						<div className="project">
							<header>
								<div className="project-links">
									<a
										href={project.githubLink}
										target="_blank"
										rel="noreferrer"
									>
										<img src={externalLink} alt="Visit" />
									</a>
								</div>
							</header>
							<div className="body">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
							</div>
							<footer>
								<ul className="tech-list">
									{project.techStack.map((tech, index) => (
										<li key={index}>{tech}</li>
									))}
								</ul>
							</footer>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</Container>
	);
}
