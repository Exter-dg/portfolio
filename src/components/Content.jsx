import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MainContent from "./MainContent";
import AboutContent from "./AboutContent";
import WorkedAt from "./WorkedAt";
import OtherProjects from "./OtherProjects";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import Blogs from "./Blogs";

export default function Content({ setShow }) {
	const [lastScrollY, setLastScrollY] = useState(0);

	const boxRef = useRef();

	const controlNavbar = () => {
		if (typeof boxRef.current !== "undefined") {
			if (boxRef.current.scrollTop < lastScrollY) {
				// if scroll down hide the navbar
				setShow(true);
			} else {
				// if scroll up show the navbar
				setShow(false);
			}
			// console.log("show: ", show);
			// remember current page location to use in the next move
			setLastScrollY(boxRef.current.scrollTop);
		}
	};

	useEffect(() => {
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
				display: "flex",
				flexDirection: "column",
				rowGap: { xs: 20, md: 30 },
				pl: 5,
				pr: 5,
				pt: 22,
			}}
			ref={boxRef}>
			<MainContent></MainContent>
			<AboutContent></AboutContent>
			<WorkedAt></WorkedAt>
			<OtherProjects></OtherProjects>
			<Blogs></Blogs>
			<GetInTouch></GetInTouch>
			<Footer></Footer>
		</Container>
	);
}
