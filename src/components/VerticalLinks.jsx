import { Box, Divider, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import StackoverflowIcon from "../assets/stack-overflow.svg";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function VerticalLinks() {
	const { theme } = useContext(ThemeContext);
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "end",
			}}>
			<IconButton
				href="https://stackoverflow.com/users/10217754/parth-kapadia"
				target="_blank">
				<img
					src={StackoverflowIcon}
					className={
						(theme === "dark" ? "svg-icon-blue" : "svg-icon-black") +
						" bounce-up"
					}
					height={27}
					width={27}
					alt="stackoverflow"></img>
			</IconButton>
			<IconButton href="https://github.com/Exter-dg" target="_blank">
				<GitHubIcon className="icon bounce-up" />
			</IconButton>
			<IconButton href="https://twitter.com/Exter__dg" target="_blank">
				<TwitterIcon className="icon bounce-up" />
			</IconButton>
			<IconButton
				href="https://www.linkedin.com/in/parth-kapadia14/"
				target="_blank">
				<LinkedInIcon className="icon bounce-up" />
			</IconButton>
			<IconButton
				href="https://www.facebook.com/parth.kapadia.9822"
				target="_blank">
				<FacebookIcon className="icon bounce-up" />
			</IconButton>
			<IconButton href="https://www.instagram.com/Exter_dg/" target="_blank">
				<InstagramIcon className="icon bounce-up" />
			</IconButton>
			<Divider
				orientation="vertical"
				sx={{ height: "100px", bgcolor: "var(--text-primary)" }}></Divider>
		</Box>
	);
}
