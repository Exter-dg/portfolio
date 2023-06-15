import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Paragraph from "./Paragraph";
import BlueText from "./BlueText";

export default function ProjectCard() {
	return (
		<Box
			sx={{
				backgroundColor: "rgb(23, 42, 69)",
				borderRadius: "3px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: 4,
				height: { xs: "200px", md: "250px", lg: "300px" },
			}}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}>
				<FolderOpenOutlinedIcon
					sx={{
						fontSize: "45px",
						color: "var(--secondary-color)",
					}}></FolderOpenOutlinedIcon>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "60px",
						color: "var(--text-secondary)",
					}}>
					<a
						href="https://www.github.com"
						style={{ color: "inherit" }}
						target="_blank"
						rel="noreferrer">
						<GitHubIcon></GitHubIcon>
					</a>
					<a
						href="www.github.com"
						style={{ color: "inherit" }}
						target="_blank"
						rel="noreferrer">
						<LaunchIcon></LaunchIcon>
					</a>
				</Box>
			</Box>
			<Box>
				<Typography className="experience-heading" sx={{ fontSize: "20px" }}>
					Kubernetes Engine
				</Typography>
				<Paragraph>
					Collection of small code gists along my Golang learning journey
				</Paragraph>
			</Box>
			<Box>
				<BlueText>Java, Microservices</BlueText>
			</Box>
		</Box>
	);
}
