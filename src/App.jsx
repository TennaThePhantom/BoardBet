// App.jsx
import React, { useEffect } from "react";
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
import NewReleasesPage from "./pages/NewReleasesPage.jsx";

function App() {
	useEffect(() => {
		const testBGGConnection = async () => {
			try {
				const token = import.meta.env.BOARD_GAME_API_TOKEN;

				console.log("🔍 TESTING BGG API CONNECTION");
				console.log("=================================");

				// Connect 4 game ID from BGG
				const connect4Id = "2719"; // Connect 4 ID on BoardGameGeek

				console.log(`🎮 Fetching game: Connect 4 (ID: ${connect4Id})`);

				// Use CORS proxy to bypass browser restrictions
				const proxyUrl = "https://cors-anywhere.herokuapp.com/";
				const bggUrl = `https://boardgamegeek.com/xmlapi/boardgame/${connect4Id}`;
				const url = proxyUrl + bggUrl;

				console.log("📡 Request URL (via proxy):", url);
				console.log("📡 Original BGG URL:", bggUrl);

				const response = await fetch(url, {
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: "application/xml",
					},
				});

				console.log("📊 Response Status:", response.status);
				console.log("📋 Response OK?", response.ok);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const xmlText = await response.text();
				console.log(
					"📄 Raw XML Response (first 500 chars):",
					xmlText.substring(0, 500) + "...",
				);

				// Parse the XML
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(xmlText, "text/xml");

				// Check for parsing errors
				const parseError = xmlDoc.getElementsByTagName("parsererror");
				if (parseError.length > 0) {
					console.error("❌ XML Parsing Error:", parseError[0].textContent);
					return;
				}

				// Get the game element
				const gameElement = xmlDoc.getElementsByTagName("boardgame")[0];

				if (gameElement) {
					console.log("✅ SUCCESS! Game data retrieved:");
					console.log("=================================");

					// Helper function to get text content
					const getText = (tagName) => {
						const element = gameElement.getElementsByTagName(tagName)[0];
						return element?.textContent || "N/A";
					};

					// Helper function to get primary name
					const getPrimaryName = () => {
						const nameElements = gameElement.getElementsByTagName("name");
						for (let i = 0; i < nameElements.length; i++) {
							if (nameElements[i].getAttribute("primary") === "true") {
								return nameElements[i].textContent;
							}
						}
						return nameElements[0]?.textContent || "N/A";
					};

					// Log game information
					console.log("🎲 Game:", getPrimaryName());
					console.log("🆔 ID:", gameElement.getAttribute("objectid"));
					console.log("📅 Year Published:", getText("yearpublished"));
					console.log(
						"👥 Players:",
						getText("minplayers") + " - " + getText("maxplayers"),
					);
					console.log("⏱️ Playing Time:", getText("playingtime") + " minutes");
					console.log("🧒 Age:", getText("age") + "+");
					console.log("⭐ Average Rating:", getText("average"));
					console.log("📊 Bayes Average:", getText("bayesaverage"));
					console.log("🏆 Rank:", getText("rank"));
					console.log("🖼️ Thumbnail:", getText("thumbnail"));
					console.log(
						"📝 Description (preview):",
						getText("description").substring(0, 150) + "...",
					);

					// Get all poll data (player counts, etc.)
					const polls = gameElement.getElementsByTagName("poll");
					console.log("\n📊 Poll Results:");
					for (let i = 0; i < polls.length; i++) {
						const poll = polls[i];
						console.log(
							`  Poll ${i + 1}:`,
							poll.getAttribute("title") || poll.getAttribute("name"),
						);
					}

					console.log("=================================");
					console.log("🎉 API test complete!");
				} else {
					console.error("❌ No game element found in response");
				}
			} catch (error) {
				console.error("❌ ERROR fetching game:", error.message);
				console.error("Stack trace:", error.stack);
			}
		};

		testBGGConnection();
	}, []); // Empty array means this runs once when component mounts

	return (
		<ThemeProvider theme={dimTheme}>
			<CssBaseline />
			<Router>
				<Box
					sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
				>
					<Navbar />
					<Box
						sx={{
							display: "flex",
							flex: 1,
							mt: 8,
						}}
					>
						<Sidebar />
						<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/profile" element={<ProfilePage />} />
								<Route path="/new-releases" element={<NewReleasesPage />} />
							</Routes>
						</Box>
					</Box>
					<Box component={"footer"} sx={{ mt: "auto" }}>
						<Footer />
					</Box>
				</Box>
			</Router>
		</ThemeProvider>
	);
}

export default App;
