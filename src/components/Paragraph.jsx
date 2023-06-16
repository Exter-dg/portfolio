import { Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ sx, children }) {
	console.log(sx);
	return (
		<Typography sx={{ pt: 2, fontSize: "16px", ...sx }} className="text">
			{children}
		</Typography>
	);
}
