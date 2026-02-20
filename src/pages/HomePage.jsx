import React from "react";
import SocialBanner from "../components/SocialBanner.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ImageSlider from "../components/ImageSlider.jsx";

function HomePage() {
	return (
		<>
			<SocialBanner />
			<SearchBar />
			<ImageSlider /> 
		</>
	);
}

export default HomePage;
