import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlueText from "./BlueText";
import CustomLink from "./CustomLink";
import FadeInSection from "./FadeInSection";
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "./ProjectCard";

export default function OtherProjects() {
	return (
		<FadeInSection>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					maxWidth: { xs: "100%", lg: "80%", xl: "70%" },
				}}>
				<Typography
					className="title"
					sx={{ fontSize: { xs: 25, md: 30, lg: 35 } }}>
					Other Noteworthy Projects
				</Typography>
				<CustomLink>View Complete List of Projects/Codes</CustomLink>
				<Grid container width={"100%"} spacing={2} mt={5}>
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
					</Grid>
					<Grid xs={12} md={6} lg={4}>
						<ProjectCard></ProjectCard>
					</Grid>
				</Grid>
			</Container>
		</FadeInSection>
	);
}
