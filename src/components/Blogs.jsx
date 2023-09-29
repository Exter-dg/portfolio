import React from "react";
import FadeInSection from "./FadeInSection";
import { Box, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import SnakeBlogPhoto from "../assets/image.png";
import BlueText from "./BlueText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CustomLink from "./CustomLink";

const blogs = [
	{
		img: SnakeBlogPhoto,
		title: "Creating the Game of Snake",
		content: "Explore my step-by-step guide to building a Snake game using React and JavaScript. This blog breaks down the process with code, logic, and images, covering features like collision detection, food consumption, and auto-movement. Perfect for those looking to understand the game's mechanics from a simple and practical perspective.",
		tags: [
			"Game", "React", "Javascript"
		],
		href: "https://medium.com/@exter-dg/creating-the-game-of-snake-fa46617ac3df",
	},
	{
		img: SnakeBlogPhoto,
		title: "Creating the Game of Snake",
		content: "Explore my step-by-step guide to building a Snake game using React and JavaScript. This blog breaks down the process with code, logic, and images, covering features like collision detection, food consumption, and auto-movement. Perfect for those looking to understand the game's mechanics from a simple and practical perspective.",
		tags: [
			"Open Source", "GSoC"
		],
		href: "https://medium.com/@exter-dg/creating-the-game-of-snake-fa46617ac3df",
	},
];

export default function Blogs() {
	return (
		<FadeInSection>
			<Box id="blogs">
				<Box sx={{ width: { md: "55%" } }}>
					<SectionHeading title="Blogs"></SectionHeading>
				</Box>
				{blogs.map((blog) => {
					return (
						<Box className="blog">
							<Box className="blog-photo-overlay"></Box>
							<Box sx={{ maxWidth: "50%" }} className="blog-photo-container">
								<img
									src={blog.img}
									alt={blog.title}
									className="blog-photo"></img>
							</Box>
							<Box className="blog-content">
								<Box>
									<Box
										sx={{
											justifyContent: { xs: "start", md: "end" },
											display: "flex",
										}}>
										<BlueText>Blog</BlueText>
									</Box>
									<Typography
										className="experience-heading"
										sx={{ textAlign: { md: "right" } }}>
										{blog.title}
									</Typography>
								</Box>
								<Box className="blog-card">
									<Typography sx={{ textAlign: { md: "right" } }}>
										{blog.content}
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: { xs: "start", md: "end" },
									}}>
									<BlueText>
										{blog.tags.map((tag) => {return <>{tag}&emsp;&emsp;&emsp;</>})}
									</BlueText>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: { xs: "start", md: "end" },
									}}>
									<Box
										sx={{
											display: "flex",
											justifyContent: "end",
											color: "var(--text-secondary)",
										}}>
										<a
											style={{ color: "inherit" }}
											target="_blank"
											href={blog.href}
											rel="noreferrer">
											<LaunchIcon></LaunchIcon>
										</a>
									</Box>
								</Box>
							</Box>
						</Box>
					);
				})}
				
			</Box>
		</FadeInSection>
	);
}
