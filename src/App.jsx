// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

// Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

// Theme
import dimTheme from "./themes/theme.ts";



function App() {
	return (
		<ThemeProvider theme={dimTheme}>
			<CssBaseline /> 
			<Router>
				<Box
					sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
				>
					<Navbar />
					<Box sx={{ display: "flex", flex: 1 }}>
						<Sidebar />
						<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/profile" element={<ProfilePage />} />
							</Routes>
						</Box>
					</Box>
					<Footer />
				</Box>
			</Router>
		</ThemeProvider>
	);
}

export default App;
