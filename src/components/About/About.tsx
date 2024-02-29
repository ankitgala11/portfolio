import { Container } from "./styles";
import AnkitGala from "../../assets/AnkitGala.jpg";
import { skills } from "../../constant";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
	return (
		<Container id="about">
			<div className="about-text">
				<ScrollAnimation animateIn="fadeInLeft">
					<h2>About me</h2>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.1 * 1000}
					style={{
						marginTop: "2rem",
						marginBottom: "2rem",
						textAlign: "justify",
					}}
				>
					<p>
						Hello! I'm Ankit Gala, a software engineer with
						expertise in software development, problem-solving, and
						a robust command of Data Structures and Algorithms. With
						over 500 problem-solving instances in DSA, I showcase a
						keen ability to analyze complex problems and devise
						efficient solutions. This reflects my commitment to
						staying ahead in technological advancements.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.2 * 1000}
					style={{
						marginTop: "2rem",
						marginBottom: "2rem",
						textAlign: "justify",
					}}
				>
					<p>
						With 1 year of professional experience, I've gained
						valuable insights that have honed my skills in precision
						and efficiency, ensuring the delivery of high-quality
						solutions. Beyond my formal work, active contributions
						to software development projects during internships have
						enhanced my practical knowledge. This hands-on
						experience has provided a comprehensive understanding of
						software development, database management, and system
						design, preparing me well for challenges in various
						professional settings.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.3 * 1000}
					style={{
						marginTop: "2rem",
						marginBottom: "2rem",
						textAlign: "justify",
					}}
				>
					<p>
						I completed my Bachelor's degree in Technology with a
						focus on Information Technology in 2022. This academic
						foundation has provided me with a solid theoretical
						understanding of the principles underlying technology
						and its applications. The coursework covered a spectrum
						of topics, from programming languages to database
						management, enriching my knowledge base.
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
					<h3>Here are my main skills:</h3>
				</ScrollAnimation>

				<div className="hard-skills">
					<div className="hability">
						<ScrollAnimation
							animateIn="fadeInUp"
							delay={0.14 * 1000}
						>
							{skills.map((skill) =>
								skill.skills.map((item) => (
									<img src={item.image} alt={item.name} />
								))
							)}
						</ScrollAnimation>
					</div>
				</div>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
					<h3>Coding Profiles:</h3>
				</ScrollAnimation>

				<div className="codeLinks">
					<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
						<a href="https://auth.geeksforgeeks.org/user/ankitgala">
							<p>1. GeeksforGeeks</p>
						</a>
					</ScrollAnimation>
				</div>
				<div className="codeLinks">
					<ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
						<a href="https://leetcode.com/ankitgala/">
							<p>2. LeetCode</p>
						</a>
					</ScrollAnimation>
				</div>
			</div>

			<div className="about-image">
				<ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
					<img src={AnkitGala} alt="Ankit Gala" />
				</ScrollAnimation>
			</div>
		</Container>
	);
}
