import React from "react";
import SocialBanner from "../components/SocialBanner.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import BoardGameLeaderboard from "../components/BoardGameLeaderboard.jsx";
import DailyWinnersSlider from "../components/DailyWinnersSlider.jsx";

function HomePage() {
	return (
		<>
			<SocialBanner />
			<SearchBar />
			<ImageSlider /> 
			<DailyWinnersSlider/>
			<BoardGameLeaderboard/>
		</>
	);
}

export default HomePage;
