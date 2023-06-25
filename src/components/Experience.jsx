import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import CustomLink from "./CustomLink";
import BlueText from "./BlueText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Experience({ experience }) {
	return (
		<>
			{Object.keys(experience).map((key, index) => {
				return (
					<Box>
						<Typography
							className="experience-heading"
							sx={{ fontSize: { md: "20px", xs: "17px" } }}>
							{experience[key]["title"]} <BlueText>@</BlueText>
							<CustomLink href={experience[key]["link"]}>
								{experience[key]["company"]}
							</CustomLink>
						</Typography>
						<Typography
							className="experience-subheading"
							sx={{ fontSize: { md: "16px", xs: "14px" } }}>
							{experience[key]["time"]}
						</Typography>
						<List>
							{experience[key]["work"].map((text) => {
								return (
									<ListItem
										className="experience-list-item"
										sx={{
											pl: 0,
											alignItems: "start",
										}}>
										<ListItemIcon
											sx={{
												minWidth: "30px",
												marginTop: "4px",
											}}>
											<BlueText>
												<Box sx={{ display: "flex" }}>
													<ArrowRightIcon></ArrowRightIcon>
												</Box>
											</BlueText>
										</ListItemIcon>
										<ListItemText
											primaryTypographyProps={{
												fontSize: { xs: "14px", sm: "15px" },
											}}>
											{text}
										</ListItemText>
									</ListItem>
								);
							})}
						</List>
					</Box>
				);
			})}
		</>
	);
}
