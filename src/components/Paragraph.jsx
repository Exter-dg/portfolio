import { Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ sx, children }) {
	return (
		<Typography
			sx={{ pt: 2, fontSize: { xs: "14px", sm: "15px", md: "16px" }, ...sx }}
			className="text">
			{children}
		</Typography>
	);
}
