import SideBar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner"
import GameCategories from "./layout/GameCategories";
import SearchBar from "./layout/Searchbar";
import TrendingGames from "./layout/TrendingGames";
import BoardBetOriginals from "./layout/BoardBetOriginals";
import TopWinners from "./layout/TopWinners";
import Footer from "./layout/Footer";
import BoardGameLeaderboard from "./layout/components/BoardGameLeaderboard";

function App() {
	return (
		<div className="flex h-screen bg-base-300 overflow-hidden" data-theme="dim">
			{/* Sidebar sits on the left */}
			<SideBar />

			{/* Main content wrapper takes up the rest of the width */}
			<div className="flex-1 flex flex-col min-w-0">
				<Navbar />

				{/* Page Content goes here */}
				<main className="flex-1 overflow-y-auto p-4 space-y-8">{}
					<Banner/>
					<GameCategories/>
					<SearchBar/>
					<TrendingGames/>
					<BoardBetOriginals/>
					<TopWinners/>
					<BoardGameLeaderboard/>
					<Footer/>
				</main>
			</div>
		</div>
	);
}

export default App;
