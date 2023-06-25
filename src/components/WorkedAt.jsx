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
				"Full-Stack Web Application: Developed a workspace admin portal for user-detail synchronization across domains using NodeJS, ReactJS, and Google APIs (Gmail, Calendar, Drive).",
				"Google Meet Chrome Extension: Built a JavaScript-based Chrome extension for real-time transcription and automatic storage of meeting minutes during Google Meet sessions.",
				"Text Extraction - PDF: Developed a CLI-based application in NodeJS for extracting text from PDFs. Implemented advanced indexing techniques for efficient search and retrieval, including features like proximity search for accurate results.",
				"End-to-End MLOps Pipeline: Worked on Vertex AI to create a comprehensive MLOps pipeline for a major US bank, incorporating hyperparameter tuning, model versioning, model monitoring, and scheduling features.",
			],
		},
		2: {
			title: "Software Engineer Intern",
			company: "Searce",
			link: "https://www.searce.com",
			time: "Jan 2022 - July 2022",
			work: [
				"Chatbot Development: Led the development of a chatbot for a major IT client, utilizing Dialogflow ES and Cloud Functions to enable API calls and enhance functionality.",
				"Custom Webhook and Retry Logic: Developed a custom webhook for Dialogflow ES, enabling the implementation of Retry-logic within the chatbot for improved user experience and error handling.",
				"POC Conversational Bots: Created proof-of-concept conversational bots using Dialogflow ES and Dialogflow CX, leveraging NLP-based techniques to deliver interactive and engaging user experiences.",
			],
		},
	},
	{
		1: {
			title: "Student Developer",
			company: "Xapian Search Engine Library - Google Summer of Code",
			link: "https://www.xapian.org",
			time: "Apr 2020 - Aug 2020",
			work: [
				"Text Extraction Enhancement: Extended the capabilities of Xapian's Omega by integrating text and metadata extraction from diverse file formats, improving the library's functionality and versatility.",
				"File Format Support: Integrated libraries such as libextractor, libarchive, and libabw to enable support for various file formats within Omega, enhancing the library's ability to handle a wide range of content.",
				"Testcase System Implementation: Developed a new testcase system within Omega, enabling efficient testing and enhancing the reliability of the software, ensuring its stability and robustness.",
			],
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
				}}
				id="experience">
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
