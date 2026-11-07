import Banner from "../layout/Banner";
import GameCategories from "../layout/GameCategories";
import SearchBar from "../layout/Searchbar";
import TrendingGames from "../layout/TrendingGames";
import BoardBetOriginals from "../layout/BoardBetOriginals";
import TopWinners from "../layout/TopWinners";
import BoardGameLeaderboard from "../components/BoardGameLeaderboard";
import Footer from "../layout/Footer";

const HomePage = () => {
	return (
		<main className="flex-1 overflow-y-auto p-4 space-y-8">
			<Banner />
			<GameCategories />
			<SearchBar />
			<TrendingGames />
			<BoardBetOriginals />
			<TopWinners />
			<BoardGameLeaderboard />
			<Footer />
		</main>
	);
};

export default HomePage;
