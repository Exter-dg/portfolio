import React from "react";
import FadeInSection from "./FadeInSection";
import { Box, Button, Typography } from "@mui/material";
import Paragraph from "./Paragraph";
import BlueText from "./BlueText";
import CustomLink from "./CustomLink";

export default function MainContent() {
	return (
		<FadeInSection>
			<Typography className="main-subtitle">Hello World! My name is</Typography>
			<Typography
				className="title"
				sx={{ fontSize: { xs: "40px", sm: "50px", md: "55px", lg: "65px" } }}>
				Parth Kapadia.
			</Typography>
			<Typography
				className="sub-title"
				sx={{ fontSize: { xs: "40px", sm: "50px", md: "55px", lg: "65px" } }}>
				I love exploring new things!
			</Typography>
			<Box sx={{ width: { xs: "100%", md: "50%" }, pt: 4 }}>
				<Paragraph>
					I'm an India based software developer specializing in full stack
					development with a strong focus on backend systems.
				</Paragraph>
				<Paragraph>
					Currently I work as a Software Engineer at
					<CustomLink href="https://www.searce.com">Searce.</CustomLink> During
					GSOC 2020, I had the incredible opportunity to work with the{" "}
					<CustomLink href="https://trac.xapian.org/wiki/GSoC2020/TextExtraction">
						Xapian Search Engine library
					</CustomLink>{" "}
					on Text Extraction Libraries.
				</Paragraph>
				<Paragraph>
					While my expertise lies in backend technologies, I also have a deep
					appreciation for frontend development. This portfolio site serves as a
					platform to showcase my proficiency in creating captivating frontends
					using React.
				</Paragraph>

				<form action="mailto:parthrkapadia@gmail.com" target="_blank">
					<Button
						type="submit"
						variant="outlined"
						className="primary-button"
						sx={{ mt: 7, height: "2.5rem", p: 3, ml: 0 }}>
						Contact me
					</Button>
				</form>
			</Box>
		</FadeInSection>
	);
}
