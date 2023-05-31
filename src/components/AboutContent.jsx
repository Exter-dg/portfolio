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
	"Java",
	"Python",
	"React JS",
	"Node JS",
	"Scrapy",
	"ElasticSearch",
	"Mongo DB",
	"Express JS",
	"PostgreSQL",
];

const halfwayThrough = Math.ceil(technologies.length / 2);

export default function AboutContent() {
	return (
		<FadeInSection>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					columnGap: 15,
					rowGap: 8,
				}}
				id="about">
				<Box sx={{ flexGrow: 1, flexBasis: "50%" }}>
					<SectionHeading title="About me"></SectionHeading>
					<Paragraph>
						Hello! Interestingly, I got introduced to programming in my freshman
						year at{" "}
						<CustomLink>Birla Institute Of Technology, Mesra</CustomLink> where
						I completed my Bachelors in Computer Science and Engineering
						(2016-2020) with <CustomLink>86.3% aggregate</CustomLink>.
					</Paragraph>
					<Paragraph>
						I'm currently working as a developer for{" "}
						<strong>Bell Canada</strong> in the Amdocs Digital Delivery unit. My
						responsibilty includes Java/Spring based microservices development
						&amp; testing.
					</Paragraph>
					<Paragraph>
						I'm also an <CustomLink>Innovation Agent</CustomLink> fostering the
						culture of creativity and innovation at Amdocs, India.
					</Paragraph>
					<Paragraph>
						I have been awarded as Winner in Innovation Nugget, Creativity Jam,
						Design Thinking Hackathon and Runners-Up in Project ICE Fair by
						Amdocs.
					</Paragraph>
					<Paragraph>
						Here is a list of the technologies that I'm familiar with!
					</Paragraph>
					<Grid container>
						<Grid xs={6}>
							<List>
								{technologies.slice(0, halfwayThrough).map((item) => {
									return <ListItem className="list-item">> {item}</ListItem>;
								})}
							</List>
						</Grid>
						<Grid xs={6}>
							<List>
								{technologies.slice(halfwayThrough).map((item) => {
									return <ListItem className="list-item">> {item}</ListItem>;
								})}
							</List>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						flexGrow: 1,
						pt: 10,
						flexBasis: "50%",
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
		</FadeInSection>
	);
}
