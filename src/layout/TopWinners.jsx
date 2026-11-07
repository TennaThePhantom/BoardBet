import React from "react";
import {
	Trophy,
	ChevronLeft,
	ChevronRight,
	Circle,
	Dices,
	Wheat,
} from "lucide-react";

// Updated data with the new additions
const TOP_WINNERS = [
	{
		rank: 1,
		username: "Quinnjay22",
		game: "Connect 4",
		quote: '"If you vs me in Connect 4 you\'ll lose asap"',
		initial: "Q",
		icon: Circle,
		isEmoji: false,
	},
	{
		rank: 2,
		username: "Hidden",
		game: "Monopoly",
		quote: '"Park Place is mine. Don\'t even think about landing there."',
		initial: "H",
		icon: Dices,
		isEmoji: false,
	},
	{
		rank: 3,
		username: "Zenith99",
		game: "Catan",
		quote: '"Got wood for sheep? Too bad, I\'m winning anyway."',
		initial: "Z",
		icon: Wheat,
		isEmoji: false,
	},
	{
		rank: 4,
		username: "RiskItAll",
		game: "Risk",
		quote: '"The world is a board and I\'m the only player left."',
		initial: "R",
		icon: "🌎",
		isEmoji: true,
	},
	{
		rank: 5,
		username: "WordSmith",
		game: "Scrabble",
		quote: "\"I put the 'Win' in 'Winning' with a Triple Word score.\"",
		initial: "W",
		icon: "📝",
		isEmoji: true,
	},
	{
		rank: 6,
		username: "MoneyCollector_TTV",
		game: "Connect 4",
		quote: '"FREE MONEY ALERT FOR ALL MY LOSERS"',
		initial: "M",
		icon: "😮‍💨",
		isEmoji: true,
	},
];

export default function TopWinners() {
	return (
		<div className="w-full max-w-6xl mx-auto py-6">
			{/* Header Section */}
			<div className="flex items-center justify-between mb-4 px-1">
				<div className="flex items-center gap-2">
					<Trophy size={20} className="text-white" />
					<h2 className="text-xl font-bold text-white tracking-wide">
						Top Winners of the Day
					</h2>
				</div>

				{/* Navigation Arrows */}
				<div className="flex gap-2">
					<button className="p-1 text-base-content/40 hover:text-white transition-colors disabled:opacity-50">
						<ChevronLeft size={20} />
					</button>
					<button className="p-1 text-base-content/40 hover:text-white transition-colors">
						<ChevronRight size={20} />
					</button>
				</div>
			</div>

			{/* Horizontal Scrollable Cards Container */}
			<div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar px-1">
				{TOP_WINNERS.map((winner) => (
					<div
						key={winner.rank}
						className="flex-none w-[360px] p-5 rounded-2xl bg-base-200 border border-base-content/5 flex justify-between gap-4 shadow-sm"
					>
						{/* Left Column: Text Info */}
						<div className="flex flex-col h-full flex-1">
							{/* Rank Badge */}
							<div className="w-6 h-6 rounded bg-white text-base-300 flex items-center justify-center font-bold text-sm mb-4">
								{winner.rank}
							</div>

							{/* User & Game Info */}
							<h3 className="text-xl font-bold text-white leading-none mb-1.5 truncate pr-2">
								{winner.username}
							</h3>
							<p className="text-[13px] text-[#8b9bb4] mb-4">
								Game: {winner.game}
							</p>

							{/* Quote */}
							<p className="text-[13px] text-[#8b9bb4] italic leading-snug mb-6 pr-2">
								{winner.quote}
							</p>

							{/* Read More Link */}
							<button className="mt-auto text-left text-sm font-bold text-white hover:underline w-max">
								Read More
							</button>
						</div>

						{/* Right Column: Game Image & Initial Badge */}
						<div className="relative shrink-0 mt-4">
							{/* Game Icon Background Container */}
							<div className="w-28 h-28 rounded-2xl bg-gradient-to-b from-[#289bd6] to-[#125881] flex items-center justify-center shadow-inner">
								{winner.isEmoji ? (
									<span className="text-5xl drop-shadow-md">{winner.icon}</span>
								) : (
									<winner.icon
										size={48}
										className="text-white/80 drop-shadow-md"
										strokeWidth={1.5}
										fill={winner.rank === 1 ? "url(#blue-grad)" : "none"}
									/>
								)}
							</div>

							{/* User Initial Badge (Overlapping top right) */}
							<div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1a2c38] border border-base-content/10 flex items-center justify-center shadow-md">
								<span className="text-[11px] font-bold text-[#8b9bb4]">
									{winner.initial}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* SVG Gradient definition for the first icon */}
			<svg width="0" height="0">
				<defs>
					<radialGradient id="blue-grad" cx="30%" cy="30%" r="70%">
						<stop offset="0%" stopColor="#60a5fa" />
						<stop offset="100%" stopColor="#2563eb" />
					</radialGradient>
				</defs>
			</svg>

			{/* Scrollbar hidden styles */}
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
