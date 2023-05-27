import { Box, Divider, IconButton, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import React from "react";

export default function VerticalEmail() {
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "end",
			}}>
			<Typography variant="h6" className="vertical-email bounce-up">
				parthrkapadia@gmail.com
			</Typography>
			<Divider
				orientation="vertical"
				sx={{ height: "100px", bgcolor: "var(--text-primary)" }}></Divider>
		</Box>
	);
}
