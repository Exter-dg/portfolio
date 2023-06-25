import {
	Box,
	Button,
	IconButton,
	Link,
	SwipeableDrawer,
	Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const linksArr = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

export default function Drawer({ show, setShow }) {
	return (
		<SwipeableDrawer
			anchor={"right"}
			open={show}
			disableBackdropTransition={true}
			PaperProps={{
				className: "drawer",
			}}
			sx={{ color: "var(--secondary-background)" }}
			onClose={() => {
				console.log("Drawer closed");
				setShow(false);
			}}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "end",
				}}>
				<IconButton
					edge="start"
					aria-label="menu"
					sx={{ mt: 1, mr: 4, color: "var(--secondary-color)" }}
					onClick={() => {
						setShow((prevState) => !prevState);
					}}>
					<CloseIcon />
				</IconButton>
			</Box>
			<Box
				pb={10}
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}>
				{linksArr.map((ele) => {
					return (
						<Link
							href={ele.link}
							key={ele.name}
							sx={{ m: 3 }}
							className="nav-link"
							onClick={() => {
								setShow(false);
							}}>
							<Typography
								variant="h6"
								color="white"
								component="div"
								className="nav-link-text">
								{ele.name}
							</Typography>
						</Link>
					);
				})}
				<form
					action="https://drive.google.com/file/d/1i0cwTAC8xw3E-AP1HLgYpETqqLab6FFm/view?usp=sharing"
					target="_blank">
					<Button
						type="submit"
						variant="outlined"
						className="primary-button"
						sx={{ mt: 3, pt: 0, pb: 0, height: "2.5rem" }}>
						Resume
					</Button>
				</form>
			</Box>
		</SwipeableDrawer>
	);
}
