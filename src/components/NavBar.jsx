import {
	AppBar,
	Box,
	Button,
	IconButton,
	Link,
	Switch,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useEffect, useState } from "react";
import Drawer from "./Drawer";
import { ThemeContext } from "../context/ThemeProvider";
import styled from "@emotion/styled";

const linksArr = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

const MaterialUISwitch = styled(Switch)(({ theme, lightTheme, darkTheme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	"& .MuiSwitch-switchBase": {
		margin: 1,
		padding: 0,
		transform: "translateX(6px)",
		"&.Mui-checked": {
			color: "#fff",
			transform: "translateX(22px)",
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					"#fff"
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		backgroundColor:
			theme === "dark"
				? darkTheme["--text-primary"]
				: lightTheme["--text-primary"],
		width: 32,
		height: 32,
		"&:before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"black"
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
	},
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
		borderRadius: 20 / 2,
	},
}));

export default function NavBar({ show }) {
	const [showSideBar, setShowSideBar] = useState(false);
	const { theme, setTheme, lightTheme, darkTheme } = useContext(ThemeContext);

	return (
		<>
			<AppBar className={`nav-bar ${!show && "nav-bar-hidden"}`}>
				<Toolbar variant="dense">
					<Box sx={{ mr: 2 }}>
						<Typography
							variant="h6"
							noWrap
							sx={{ color: "var(--text-primary)" }}>
							Exter-dg
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Box sx={{ display: { sm: "none", xs: "block" } }}>
						<IconButton
							edge="start"
							aria-label="menu"
							sx={{ mr: 2, ml: 1, color: "var(--secondary-color)" }}
							onClick={() => {
								setShowSideBar((prevState) => !prevState);
							}}>
							<MenuIcon />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: { sm: "flex", xs: "none" },
							alignItems: "center",
							ml: 1,
						}}>
						<MaterialUISwitch
							sx={{ m: 1 }}
							checked={theme !== "dark"}
							theme={theme}
							darkTheme={darkTheme}
							lightTheme={lightTheme}
							onChange={() => {
								setTheme(() => {
									return theme === "dark" ? "light" : "dark";
								});
							}}
						/>
						{linksArr.map((ele) => {
							return (
								<Link
									href={ele.link}
									key={ele.name}
									sx={{ m: 2 }}
									className="nav-link">
									<Typography
										variant="h7"
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
								sx={{ pt: 0, pb: 0, height: "2.5rem" }}>
								Resume
							</Button>
						</form>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer show={showSideBar} setShow={setShowSideBar}></Drawer>
		</>
	);
}
