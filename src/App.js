import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Body from "./components/Body";
import { useEffect, useState } from "react";

function App() {
	const [show, setShow] = useState(true);

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<NavBar show={show}></NavBar>
			<Body setShow={setShow}></Body>
		</Box>
	);
}

export default App;
