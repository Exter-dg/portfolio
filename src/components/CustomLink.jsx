import { Link } from "@mui/material";
import React from "react";
import BlueText from "./BlueText";

export default function CustomLink({ href = "", children }) {
	return (
		<>
			{" "}
			<Link
				href={href}
				className="custom-link"
				underline="none"
				target="_blank"
				rel="noreferrer">
				<BlueText>{children}</BlueText>
			</Link>{" "}
		</>
	);
}
