import React from "react";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import GamesDisplay from "../components/common/GamesDisplay";

const NewReleasesPage = () => {
	return (
		<>
			<PageHeader text="New Releases" />
			<SearchBar/>
			<GamesDisplay/>
		</>
	);
};

export default NewReleasesPage;
