// src/App.jsx
import { Routes, Route } from "react-router-dom";
import SideBar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Home from "./pages/HomePage";

function App() {
	return (
		<div className="flex h-screen bg-base-300 overflow-hidden" data-theme="dim">
			{/* Sidebar sits on the left */}
			<SideBar />

			{/* Main content wrapper takes up the rest of the width */}
			<div className="flex-1 flex flex-col space-y-6 min-w-0">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;