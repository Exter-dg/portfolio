import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function MainContent({ setShow }) {
	const [lastScrollY, setLastScrollY] = useState(0);

	const boxRef = useRef();

	const controlNavbar = () => {
		if (typeof boxRef.current !== "undefined") {
			if (boxRef.current.scrollTop < lastScrollY) {
				// if scroll down hide the navbar
				setShow(false);
				console.log("Setting false");
			} else {
				// if scroll up show the navbar
				setShow(true);
				console.log("Setting true");
			}
			// console.log("show: ", show);
			// remember current page location to use in the next move
			setLastScrollY(boxRef.current.scrollTop);
		}
	};

	useEffect(() => {
		console.log(boxRef.current);
		if (typeof boxRef.current !== "undefined") {
			boxRef.current.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				boxRef.current.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);
	return (
		<Container
			sx={{
				color: "white",
				maxHeight: "100vh",
				overflow: "auto",
				pl: "20px",
				pr: "20px",
				pt: 25,
			}}
			ref={boxRef}>
			<Typography className="main-subtitle">Hello World! My name is</Typography>
			<Typography className="title">Parth Kapadia.</Typography>
			<Typography className="sub-title">
				I love exploring new things!
			</Typography>

			<Typography className="main-subtitle">Hello World! My name is</Typography>
			<Typography className="title">Parth Kapadia.</Typography>
			<Typography className="sub-title">
				I love exploring new things!
			</Typography>

			<Typography className="main-subtitle">Hello World! My name is</Typography>
			<Typography className="title">Parth Kapadia.</Typography>
			<Typography className="sub-title">
				I love exploring new things!
			</Typography>

			<Typography className="main-subtitle">Hello World! My name is</Typography>
			<Typography className="title">Parth Kapadia.</Typography>
			<Typography className="sub-title">
				I love exploring new things!
			</Typography>
		</Container>
	);
}
