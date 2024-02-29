import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
	{
		company: "Accenture",
		position: "Advance Associate Software Engineer",
		duration: "Dec 2022 - Dec 2023",
		description:
			"• Collaborated with the client Bank of Baroda in ensuring seamless loading and refreshing of data, contributing to the efficient business operations of the bank. • Designed various interactive dashboards to display the reports guaranteeing simplicity. • Increased efficiency by 20% by optimizing complex queries resulting in reduction of both space and processing time.",
		tech: "Qlik Sense, Impala Cloudera, HIVE, SQL",
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
