import React, { useState } from "react";
import { Home, Map, Hexagon, Gamepad2, Shield, DollarSign } from "lucide-react";

const mockData = [
	{
		id: 1,
		game: "Monopoly",
		user: "Hidden",
		opponent: "CPU_Master",
		time: "7:12 PM",
		bet: 20.0,
		amount: 20.0,
		profit: -20.0,
		type: "loss",
	},
	{
		id: 2,
		game: "Catan",
		user: "Hidden",
		opponent: "TraderJoe",
		time: "7:12 PM",
		bet: 50.0,
		amount: 50.0,
		profit: 50.0,
		type: "win",
	},
	{
		id: 3,
		game: "Risk",
		user: "Quinnjay22",
		opponent: "Hidden",
		time: "7:12 PM",
		bet: 100.0,
		amount: 100.0,
		profit: 350.0,
		type: "bigWin",
	},
	{
		id: 4,
		game: "Monopoly",
		user: "Hidden",
		opponent: "Banker99",
		time: "7:12 PM",
		bet: 10.0,
		amount: 10.0,
		profit: -10.0,
		type: "loss",
	},
	{
		id: 5,
		game: "Catan",
		user: "Hidden",
		opponent: "SheepLord",
		time: "8:45 PM",
		bet: 75.0,
		amount: 75.0,
		profit: 150.0,
		type: "win",
	},
	{
		id: 6,
		game: "Chess",
		user: "Hidden",
		opponent: "GrandMasterX",
		time: "9:30 PM",
		bet: 200.0,
		amount: 200.0,
		profit: -200.0,
		type: "loss",
	},
	{
		id: 7,
		game: "Risk",
		user: "Quinnjay22",
		opponent: "Hidden",
		time: "10:15 PM",
		bet: 500.0,
		amount: 500.0,
		profit: 2500.0,
		type: "bigWin",
	},
	{
		id: 8,
		game: "Uno",
		user: "Hidden",
		opponent: "CardShark",
		time: "11:00 PM",
		bet: 30.0,
		amount: 30.0,
		profit: 30.0,
		type: "win",
	},
];

const formatCurrency = (num) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(num);
};

export default function BoardGameLeaderboard() {
	const [activeTab, setActiveTab] = useState("bets");

	// Helper to map game names to specific icons
	const getGameIcon = (gameName) => {
		switch (gameName) {
			case "Monopoly":
				return <Home size={16} className="text-base-content/60" />;
			case "Risk":
				return;
			case "Catan":
				return <Hexagon size={16} className="text-base-content/60" />;
			default:
				return <Gamepad2 size={16} className="text-base-content/60" />;
		}
	};

	return (
		<div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-transparent" data-theme="dim" >
			{/* Toggle Buttons Container */}
			<div className="inline-flex bg-black/20 rounded-full p-1 mb-6">
				<button
					onClick={() => setActiveTab("bets")}
					className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-colors ${
						activeTab === "bets"
							? "bg-[#2f4553] text-white shadow-sm"
							: "text-base-content/60 hover:bg-white/5 hover:text-white"
					}`}
				>
					All Bets
				</button>
				<button
					onClick={() => setActiveTab("monopoly")}
					className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-colors ${
						activeTab === "monopoly"
							? "bg-[#2f4553] text-white shadow-sm"
							: "text-base-content/60 hover:bg-white/5 hover:text-white"
					}`}
				>
					Monopoly Leaderboard
				</button>
			</div>

			{/* Table Container */}
			<div className="w-full overflow-x-auto custom-scrollbar pb-4">
				{/* border-separate and border-spacing-y-1 recreate the spacing between rows from your MUI code */}
				<table className="w-full min-w-[800px] border-separate border-spacing-y-1 text-sm text-left">
					{/* Header */}
					<thead>
						<tr className="bg-black/60 text-base-content/60">
							<th className="py-3 px-4 font-semibold rounded-l-lg">Game</th>
							<th className="py-3 px-4 font-semibold">User</th>
							<th className="py-3 px-4 font-semibold">Time</th>
							<th className="py-3 px-4 font-semibold text-right">Bet</th>
							<th className="py-3 px-4 font-semibold">Opponent</th>
							<th className="py-3 px-4 font-semibold text-right rounded-r-lg">
								Result
							</th>
						</tr>
					</thead>

					{/* Body */}
					<tbody>
						{mockData.map((row) => (
							<tr
								key={row.id}
								className="bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
							>
								{/* Game */}
								<td className="py-3 px-4 rounded-l-lg">
									<div className="flex items-center gap-2 font-semibold text-white">
										{getGameIcon(row.game)}
										<span>{row.game}</span>
									</div>
								</td>

								{/* User */}
								<td className="py-3 px-4">
									<div className="flex items-center gap-2 text-white">
										{row.user === "Hidden" ? (
											<Shield size={14} className="text-base-content/80" />
										) : (
											<div className="w-5 h-5 rounded-full bg-base-300 border border-base-content/20 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
												{row.user.charAt(0).toUpperCase()}
											</div>
										)}
										<span className="font-medium">{row.user}</span>
									</div>
								</td>

								{/* Time */}
								<td className="py-3 px-4 text-base-content/60">{row.time}</td>

								{/* Bet */}
								<td className="py-3 px-4">
									<div className="flex items-center justify-end gap-1.5 text-white font-semibold">
										<span>{formatCurrency(row.bet)}</span>
										<div className="w-4 h-4 rounded-full bg-[#00e701] flex items-center justify-center text-black shrink-0">
											<DollarSign size={10} strokeWidth={3} />
										</div>
									</div>
								</td>

								{/* Opponent */}
								<td className="py-3 px-4 text-base-content/60">
									{row.opponent}
								</td>

								{/* Result/Profit */}
								<td className="py-3 px-4 text-right rounded-r-lg">
									<span
										className={`font-bold ${row.profit >= 0 ? "text-[#00e701]" : "text-[#ff4d4d]"}`}
									>
										{row.profit >= 0 ? "+" : ""}
										{formatCurrency(row.profit)}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Scrollbar hidden styles for horizontal scroll on mobile */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .custom-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
				}}
			/>
		</div>
	);
}
