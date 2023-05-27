import { Box, Divider, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

export default function VerticalLinks() {
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "end",
			}}>
			<IconButton>
				<GitHubIcon className="icon bounce-up" />
			</IconButton>
			<IconButton>
				<TwitterIcon className="icon bounce-up" />
			</IconButton>
			<IconButton>
				<LinkedInIcon className="icon bounce-up" />
			</IconButton>
			<IconButton>
				<FacebookIcon className="icon bounce-up" />
			</IconButton>
			<IconButton>
				<InstagramIcon className="icon bounce-up" />
			</IconButton>
			<Divider
				orientation="vertical"
				sx={{ height: "100px", bgcolor: "var(--text-primary)" }}></Divider>
		</Box>
	);
}
