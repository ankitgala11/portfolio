import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
	{
		company: "STEPapp",
		position: "Software Developer Engineer",
		duration: "April 2024 - Present",
		description:
			"•Developed production-ready code for the revamp of the ed-tech platform with an active user base of over 12,000,improving code efficiency and readability, resulting in faster loading thus enhancing user experience.• Designed and implemented a quiz-based 1v1 competitive game feature, leveraging websockets for real-time updates and scores, therby increasing student engagement 10x times.• Implemented RESTful APIs following MVC architecture patterns, enhancing backend maintainability and efficiency, resulting in a 20-30% reduction in response times.• Crafted complex aggregate functions for MongoDB to optimize data retrieval processes, achieving in a 2x improvement in query performance.",
		tech: "NodeJS, Express, Socket.io, React, Redux-toolkit, Tailwind CSS, MongoDB, AWS, Docker",
	},
	{
		company: "Accenture",
		position: "Advance Associate Software Engineer",
		duration: "Dec 2022 - Feb 2024",
		description:
			"• Collaborated on developing RESTful APIs using Java Spring Boot, fostering teamwork and robust functionality.• Increased efficiency by 30-40% through optimization of complex queries and elimination of redundant code.• Identified and resolved bottlenecks, resulting in a 20% increase in platform speed and enhancing user experience.",
		tech: "Java, Spring Boot, Spring MVC, JavaScript, SQL",
	},
	{
		company: "Kennovation Software Service",
		position: "Backend Developer Intern",
		duration: "Dec 2021 - Feb 2022",
		description:
			"• Worked on migration of an E-commerce site (www.temeculaoliveoil.com) from Magento to Laravel. • Reduced error occurrences by 30% by specific improvements.",

		tech: "Laravel, Ajax, API, Bootstrap, JavaScript",
	},
	{
		company: "Dotminds",
		position: "Frontend Developer Intern",
		duration: "June 2020 - July 2022",
		description:
			" Designed and implemented the user interface for a car rental website, showcasing all the available cars and pricing.",
		tech: "HTML, CSS, JavaScript, JQuery, Bootstrap, AngularJS",
	},
	{
		company: "Eyuva",
		position: "Developer Intern",
		duration: "Dec 2019 - Dec 2019",
		description:
			"Developed an online notice board for teachers to post important notices enabling full CRUD functionality .",
		tech: "HTML, CSS, JavaScript, JQuery, Bootstrap, PHP, MySQL",
	},
	// Add more experiences as needed
];

export function Experience() {
	return (
		<Container id="experience">
			<h2>Professional Experiences</h2>
			{experiences.map((experience, index) => (
				<div className="exps">
					<ScrollAnimation animateIn="flipInX">
						<div className="exp">
							<div>
								<div key={index}>
									<h3>
										{experience.position} at{" "}
										{experience.company}
									</h3>
									<p>{experience.duration}</p>
									<p>{experience.description}</p>
									<p>{experience.tech}</p>
									<hr />
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			))}
		</Container>
	);
}
