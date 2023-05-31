import { Typography } from "@mui/material";
import React from "react";

export default function BlueText({ children }) {
	return (
		<Typography className="text-blue" display="inline">
			{children}
		</Typography>
	);
}
