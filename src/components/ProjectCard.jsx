import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Paragraph from "./Paragraph";
import BlueText from "./BlueText";

export default function ProjectCard({ experience }) {
	return (
		<Box
			className="bounce-up project-card"
			sx={{
				height: { xs: "200px", md: "250px", lg: "320px" },
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
						justifyContent: experience.demo ? "space-between" : "end",
						width: "60px",
						color: "var(--text-secondary)",
					}}>
					<a
						href={experience.github}
						style={{ color: "inherit" }}
						target="_blank"
						rel="noreferrer">
						<GitHubIcon></GitHubIcon>
					</a>
					{experience.demo && (
						<a
							href={experience.demo}
							style={{ color: "inherit" }}
							target="_blank"
							rel="noreferrer">
							<LaunchIcon></LaunchIcon>
						</a>
					)}
				</Box>
			</Box>
			<Box
				mt={4}
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<Box>
					<Typography className="experience-heading">
						{experience.name}
					</Typography>
					<Paragraph sx={{ fontSize: { xs: "14px", md: "15px" } }}>
						{experience.summary}
					</Paragraph>
				</Box>
				<Box
					sx={{
						fontSize: { xs: "14px", md: "15px" },
						justifySelf: "start",
					}}>
					<BlueText>{experience.tech}</BlueText>
				</Box>
			</Box>
		</Box>
	);
}
