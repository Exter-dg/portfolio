import React from "react";
import FadeInSection from "./FadeInSection";
import { Container, Typography } from "@mui/material";
import Paragraph from "./Paragraph";

export default function Footer() {
	return (
		<FadeInSection>
			<Container className="center-container" sx={{ mb: 8 }}>
				<Typography className="footer-text">
					Figma Design by Britanny Chiang
				</Typography>
				<Typography className="footer-text">
					Developed by Parth Kapadia
				</Typography>
			</Container>
		</FadeInSection>
	);
}
