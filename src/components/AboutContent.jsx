import React from "react";
import FadeInSection from "./FadeInSection";
import { Box, List, ListItem, ListItemAvatar } from "@mui/material";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";
import BlueText from "./BlueText";
import CustomLink from "./CustomLink";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ProfilePhoto from "../assets/profile_photo1.png";

const technologies = [
	"C++",
	"Python",
	"React JS",
	"Node JS",
	"Scrapy",
	"ElasticSearch",
	"Mongo DB",
	"Express JS",
	"GIT",
	"Firebase",
	"Dialogflow",
	"Vertex AI",
];

const halfwayThrough = Math.ceil(technologies.length / 2);

export default function AboutContent() {
	return (
		<FadeInSection>
			<Box>
				<Box sx={{ width: { md: "55%" } }} id="about">
					<SectionHeading title="About me"></SectionHeading>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						columnGap: { md: 8, lg: 12 },
						rowGap: 8,
					}}>
					<Box sx={{ flexGrow: 1, flexBasis: "60%" }}>
						<Paragraph>
							I hold a bachelor's degree from{" "}
							<CustomLink href="https://nirmauni.ac.in/">
								Institute of Technology, Nirma University
							</CustomLink>
							, where I achieved a GPA of 8.6. My passion for computers and
							programming developed during my schooling days and has been a
							driving force throughout my academic and professional journey.
						</Paragraph>
						<Paragraph>
							Currently, I work as a Software Engineer at{" "}
							<CustomLink href="https://www.searce.com">Searce</CustomLink>,
							where I have gained valuable experience since Jan 2022.
						</Paragraph>
						<Paragraph>
							During my college years, I actively participated in Techinquiri,
							organizing tech workshops to foster collaboration and
							knowledge-sharing among students.
						</Paragraph>
						<Paragraph>
							Outside work, I have a keen interest in geopolitics and enjoy
							reading about it in my free time. Additionally, I engage in table
							tennis as a recreational activity.
						</Paragraph>
						<Paragraph>
							Here is a list of the technologies that I'm familiar with!
						</Paragraph>
						<Grid container>
							<Grid xs={6}>
								<List>
									{technologies.slice(0, halfwayThrough).map((item) => {
										return (
											<ListItem className="list-item text-blue">
												{">"} {item}
											</ListItem>
										);
									})}
								</List>
							</Grid>
							<Grid xs={6}>
								<List>
									{technologies.slice(halfwayThrough).map((item) => {
										return (
											<ListItem className="list-item text-blue">
												{">"} {item}
											</ListItem>
										);
									})}
								</List>
							</Grid>
						</Grid>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							pt: 2,
							flexBasis: "40%",
						}}>
						{/* <SectionHeading title="About me"></SectionHeading> */}
						<Box
							sx={{
								display: "flex",
								alignItems: "start",
								justifyContent: "center",
								position: "relative",
							}}>
							<img
								src={ProfilePhoto}
								alt="Profile"
								className="profile-photo"></img>
							<Box className="profile-photo-border"></Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</FadeInSection>
	);
}
