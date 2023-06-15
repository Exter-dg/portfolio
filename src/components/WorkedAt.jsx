import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

import {
	Box,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionHeading from "./SectionHeading";
import CustomLink from "./CustomLink";
import BlueText from "./BlueText";
import Experience from "./Experience";

const experience = [
	{
		1: {
			title: "Software Engineer",
			company: "Searce",
			link: "https://www.searce.com",
			time: "July 2022 - Present",
			work: [
				"Responsible for code development, UAT support, automation of Bell Canada NM1-RTB customisation project as part of Digital Delivery scrum team. (Oct 2021 - present)",
				"Part of Walk-the-Tech Go team of 10 developers building a microservice in Go language. Tech stack includes Couchbase, Go echo framework, REST APIs implementation, JMeter and Postman for testing purposes.",
			],
		},
		2: {
			title: "Software Engineer Intern",
			company: "Searce",
			link: "https://www.searce.com",
			time: "Jan 2022 - July 2022",
			work: [],
		},
	},
	{
		1: {
			title: "Student Developer",
			company: "Xapian Search Engine Library - Google Summer of Code",
			link: "https://www.searce.com",
			time: "Apr 2020 - Aug 2020",
			work: [],
		},
	},
];

function extraProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
		className: "tab-title",
	};
}

export default function WorkedAt() {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const mediumViewport = useMediaQuery(theme.breakpoints.up("md"));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<FadeInSection>
			<Box
				sx={{
					marginLeft: "auto",
					marginRight: "auto",
					maxWidth: { lg: "70%" },
				}}>
				<SectionHeading title="Where I've Worked"></SectionHeading>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
					}}>
					<Tabs
						orientation={mediumViewport ? "vertical" : "horizontal"}
						className={mediumViewport ? "tabs-vertical" : "tabs-horizontal"}
						value={value}
						onChange={handleChange}
						TabIndicatorProps={{
							className: mediumViewport
								? "tabs-selected-vertical"
								: "tabs-selected-horizontal",
						}}
						sx={{ minWidth: 100 }}>
						<Tab label="Searce" {...extraProps(0)}></Tab>
						<Tab label="GSOC" {...extraProps(1)}></Tab>
					</Tabs>
					{experience.map((_, index) => {
						return (
							<TabPanel value={value} index={index}>
								<Experience experience={experience[index]}></Experience>
							</TabPanel>
						);
					})}
					{/* <TabPanel value={value} index={0}>
						<Experience></Experience>
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item two
					</TabPanel> */}
				</Box>
			</Box>
		</FadeInSection>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box
					sx={{
						p: { xs: 0, lg: 3 },
						pt: { xs: 2, md: 1, lg: 1 },
						backgroundColor: "val(--primary-color)",
					}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
