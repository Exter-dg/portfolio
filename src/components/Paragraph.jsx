import { Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ children }) {
	return (
		<Typography sx={{ pt: 2, fontSize: "17px" }} className="text">
			{children}
		</Typography>
	);
}
