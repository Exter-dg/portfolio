import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Body from "./components/Body";

function App() {
	return (
		<Box>
			<NavBar></NavBar>
			<Body></Body>
		</Box>
	);
}

export default App;
