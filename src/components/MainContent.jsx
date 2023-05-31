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
					I'm an India based software developer with a goal-driven creative
					mindset and passion for learning and innovating.
				</Paragraph>
				<Paragraph>
					Currently working as a Software Engineer at
					<CustomLink href="https://www.searce.com">Searce</CustomLink>
					and as a Freelance Content Writer for Pepper Content.
				</Paragraph>
				<Paragraph>
					Outside work, I occasionally blog on <CustomLink>Medium</CustomLink>.
					Off-screen, I sketch my thoughts here!
				</Paragraph>
				<Button
					variant="outlined"
					className="primary-button"
					sx={{ mt: 7, height: "2.5rem", p: 3, ml: 0 }}>
					Contact me
				</Button>
			</Box>
		</FadeInSection>
	);
}
