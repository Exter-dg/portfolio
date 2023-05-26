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
import React from "react";

const linksArr = ["About", "Experience", "Projects", "Contact"];

export default function NavBar() {
	return (
		<AppBar
			sx={{
				backgroundColor: "inherit",
				p: 1,
				position: "sticky",
				top: 0,
				zIndex: 500,
			}}>
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
						sx={{ mr: 2, ml: 1, color: "var(--secondary-color)" }}>
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
							<Link href={ele} key={ele} sx={{ m: 2 }} className="nav-link">
								<Typography
									variant="h7"
									color="white"
									component="div"
									className="nav-link-text">
									{ele}
								</Typography>
							</Link>
						);
					})}
					<Button
						variant="outlined"
						className="primary-button"
						sx={{ pt: 0, pb: 0, height: "2.5rem" }}>
						Resume
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
