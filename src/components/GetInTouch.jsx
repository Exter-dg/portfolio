import React from "react";
import FadeInSection from "./FadeInSection";
import { Button, Container, Typography } from "@mui/material";
import BlueText from "./BlueText";
import Paragraph from "./Paragraph";

export default function GetInTouch() {
	return (
		<FadeInSection>
			<Container
				className="center-container"
				sx={{
					maxWidth: { xs: "100%", lg: "70%" },
				}}
				id="contact">
				<BlueText>What's Next?</BlueText>

				<Typography
					className="experience-heading"
					sx={{ fontSize: { xs: 25, md: 30, lg: 35 } }}>
					Get In Touch
				</Typography>

				<Paragraph sx={{ textAlign: "center" }}>
					My inbox is always open. Whether you have a question or just want to
					say hello, I'll try my best to get back to you! Feel free to mail me
					about any relevant job updates.
				</Paragraph>

				<form action="mailto:parthrkapadia@gmail.com" target="_blank">
					<Button
						type="submit"
						variant="outlined"
						className="primary-button"
						sx={{ mt: 7, height: "2.5rem", p: 3, ml: 0 }}>
						Mail me
					</Button>
				</form>
			</Container>
		</FadeInSection>
	);
}
