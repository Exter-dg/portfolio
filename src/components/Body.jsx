import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useEffect, useRef, useState } from "react";
import VerticalEmail from "./VerticalEmail";
import VerticalLinks from "./VerticalLinks";
import MainContent from "./MainContent";

export default function Body({ setShow }) {
	return (
		<Grid container>
			<Grid
				item
				sm={1}
				sx={{
					display: { xs: "none", sm: "block" },
				}}>
				<VerticalLinks></VerticalLinks>
			</Grid>
			<Grid item sm={10} xs={12}>
				<Box>
					<MainContent setShow={setShow}></MainContent>
				</Box>
			</Grid>
			<Grid
				item
				sm={1}
				sx={{
					display: { xs: "none", sm: "block" },
				}}>
				<VerticalEmail></VerticalEmail>
			</Grid>
		</Grid>
	);
}