import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("dark");
	const darkTheme = {
		"--primary-color": "rgb(10, 25, 47)",
		"--secondary-color": "rgb(100, 255, 218)",
		"--text-secondary": "rgb(136, 146, 176)",
		"--text-primary": "rgb(204, 214, 246)",
		"--secondary-background": "rgb(23, 42, 69)",
	};

	const lightTheme = {
		"--primary-color": "#F7F7F7", // dark background
		"--secondary-color": "#000000", // highlight color
		"--text-secondary": "#7E97A6", // secondary text color - more used text
		"--text-primary": "#65bf7a", // primary text color - for headings
		"--secondary-background": "#e7e7e7", // different shade of dark background
	};

	useEffect(() => {
		if (theme === "dark") {
			for (const color in darkTheme) {
				document.documentElement.style.setProperty(color, darkTheme[color]);
			}
		} else {
			for (const color in lightTheme) {
				document.documentElement.style.setProperty(color, lightTheme[color]);
			}
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, darkTheme, lightTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
