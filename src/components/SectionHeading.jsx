import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function SectionHeading({ title }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				columnGap: 4,
				alignItems: "center",
			}}>
			<Typography
				className="section-heading"
				sx={{ fontSize: { md: "27px", xs: "23px" } }}>
				{title}
			</Typography>
			{/* <hr style={{ flex: "0 0 100%" }}></hr> */}
			<Divider className="divider"></Divider>
			{/* <Box
				sx={{
					border: "0.01px solid var(--text-secondary)",
					height: "0.01px",
					flexGrow: 1,
				}}></Box> */}
		</Box>
	);
}
