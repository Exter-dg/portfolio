import {
	AppBar,
	Box,
	Button,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";

const linksArr = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];
export default function NavBar({ show }) {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<>
			<AppBar className={`nav-bar ${!show && "nav-bar-hidden"}`}>
				<Toolbar variant="dense">
					<Box sx={{ mr: 2 }}>
						<Typography variant="h6" noWrap>
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
