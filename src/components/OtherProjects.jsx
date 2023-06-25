import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlueText from "./BlueText";
import CustomLink from "./CustomLink";
import FadeInSection from "./FadeInSection";
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "./ProjectCard";

const projects = [
	{
		name: "Text Extraction Libraries",
		github: "https://github.com/xapian/xapian/commits?author=Exter-dg",
		demo: "https://trac.xapian.org/wiki/GSoC2020/TextExtraction",
		summary: "Collection of my commits and work product during GSOC 2020",
		tech: "C++, Text Extration Libraries",
	},
	{
		name: "All Things Movie",
		github: "https://github.com/Exter-dg/allThingsMovies",
		summary:
			"A fullstack Movie review web-app enables users to rate and review movies. Admins have the ability to add actors and movies and store trailers and posters",
		tech: "Node JS, Express, React, MongoDB",
	},
	{
		name: "Portfolio",
		github: "https://github.com/Exter-dg/portfolio",
		demo: "https://exter-dg.github.io/portfolio/",
		summary: "This very portfolio that you are looking at.",
		tech: "React JS, Material UI",
	},
	{
		name: "PDF Search Engine",
		github: "https://github.com/Exter-dg/searchEngine2",
		demo: "https://www.awesomescreenshot.com/video/15973020?key=711ade5625df9a645c3fa98ef3aada0e",
		summary:
			"A Web-app built using React and NodeJS which can extract text from PDFs (even images). It indexes the extracted data and allows to perform full-text search on the indexed data.",
		tech: "NodeJS, React, Flex Search, Tesseract",
	},
	{
		name: "Web Crawler",
		github: "https://github.com/Exter-dg/searchEngine",
		summary:
			"A search engine and a highly-customizable web-crawler built for indexing and searching websites using Scrapy and the ELK Stack.",
		tech: "Python, Scrapy, ELK",
	},
	{
		name: "Typing Speedometer",
		github: "https://github.com/Exter-dg/typingSpeedometer",
		demo: "https://exter-dg.github.io/typingSpeedometer/",
		summary:
			"A tool made using VanillaJS and HTML for calculating users' typing speed in terms of Words per minute",
		tech: "Javascript, HTML, CSS",
	},
	{
		name: "Budge",
		github: "https://github.com/Exter-dg/Budge",
		summary: "A web-based expense tracker made using ReactJS and Firebase",
		tech: "React, Firestore, Firebase Auth",
	},
	{
		name: "Verifi",
		github: "https://github.com/Exter-dg/verifi_dapp",
		summary:
			"A decentralized Counterfeit-Prevention system based on Smart Contracts and the Ethereum Blockchain",
		tech: "Solidity, React",
	},
	{
		name: "MUI Responsive Blog",
		github: "https://github.com/Exter-dg/MUIBlogResponsive",
		demo: "https://exter-dg.github.io/MUIBlogResponsive/",
		summary: "A responsive Blog WebPage made using MUI",
		tech: "React JS, Material UI",
	},
];

export default function OtherProjects() {
	return (
		<FadeInSection>
			<Container
				className="center-container"
				sx={{
					maxWidth: { xs: "100%", lg: "80%" },
				}}
				id="projects">
				<Typography
					className="title"
					sx={{ fontSize: { xs: 25, md: 30, lg: 35 } }}>
					Noteworthy Projects
				</Typography>
				<CustomLink href="https://github.com/Exter-dg?tab=repositories">
					View Complete List of Projects/Codes
				</CustomLink>
				<Grid container spacing={1} mt={5}>
					{projects.map((project) => (
						<Grid xs={12} md={6} lg={4}>
							<ProjectCard experience={project}></ProjectCard>
						</Grid>
					))}
					{/* <Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid> */}
				</Grid>
			</Container>
		</FadeInSection>
	);
}
