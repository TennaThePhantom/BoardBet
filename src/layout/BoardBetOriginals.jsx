import React from "react";
import {
	Flame,
	ChevronRight,
	Spade,
	CircleDollarSign,
	Bomb,
	Grid3X3,
	Dices,
	Ghost,
	TrendingUp,
	Box,
} from "lucide-react";

// Mock data adapted to perfectly match the vector style of the originals
const ORIGINALS_GAMES = [
	{
		id: 1,
		title: "BLACKJACK",
		players: "1,101",
		gradient: "from-[#ff2a43] to-[#e61b33]",
		icon: Spade,
		badge: null,
	},
	{
		id: 2,
		title: "PLINKO",
		players: "836",
		gradient: "from-[#a642ff] to-[#8a2be2]",
		icon: CircleDollarSign,
		badge: "10000x",
	},
	{
		id: 3,
		title: "MINES",
		players: "725",
		gradient: "from-[#008dff] to-[#0070cc]",
		icon: Bomb,
		badge: null,
	},
	{
		id: 4,
		title: "KENO",
		players: "972",
		gradient: "from-[#4b8afb] to-[#1e4db7]", // The image shows a blueish background with green gems
		icon: Grid3X3,
		badge: null,
	},
	{
		id: 5,
		title: "DICE",
		players: "377",
		gradient: "from-[#9d44ff] to-[#7c22ff]",
		icon: Dices,
		badge: null,
	},
	{
		id: 6,
		title: "CHICKEN",
		players: "181",
		gradient: "from-[#5b63ff] to-[#3a41ff]",
		icon: Ghost, // Using ghost as a stand-in for the character
		badge: null,
	},
	{
		id: 7,
		title: "CRASH",
		players: "245",
		gradient: "from-[#ffb11a] via-[#1c65f8] to-[#1448b3]", // Mimicking the sweeping curve background
		icon: TrendingUp,
		badge: null,
	},
	{
		id: 8,
		title: "LIMBO",
		players: "256",
		gradient: "from-[#ffc212] to-[#ff9900]",
		icon: Box,
		badge: "900x",
	},
];

export default function BoardBetOriginals() {
	return (
		<div className="w-full max-w-6xl mx-auto py-6">
			{/* Header Section */}
			<div className="flex items-center gap-2 mb-4 px-1 group cursor-pointer w-max">
				<Flame
					size={18}
					className="text-base-content/70 group-hover:text-white transition-colors"
				/>
				<h2 className="text-base font-bold text-white group-hover:underline flex items-center gap-0.5">
					BoardBet Originals <ChevronRight size={16} className="mt-0.5" />
				</h2>
			</div>

			{/* Horizontal Scrollable Container */}
			<div className="flex overflow-x-auto gap-3 pb-4 custom-scrollbar px-1">
				{ORIGINALS_GAMES.map((game) => {
					const Icon = game.icon;

					return (
						<div
							key={game.id}
							className="flex-none w-[130px] md:w-[150px] group cursor-pointer"
						>
							{/* Game Card Thumbnail */}
							<div
								className={`relative w-full aspect-[2.5/3.5] rounded-xl overflow-hidden shadow-lg border border-base-content/5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:brightness-110 bg-gradient-to-br ${game.gradient}`}
							>
								{/* Optional Multiplier Badge (like 10000x on Plinko) */}
								{game.badge && (
									<div className="absolute top-2 left-2 bg-[#ffc107] text-[#855a00] px-1.5 py-0.5 rounded-sm text-[10px] font-black z-10 shadow-sm">
										{game.badge}
									</div>
								)}

								{/* Central Minimalist Graphic */}
								<div className="absolute inset-0 flex items-center justify-center pb-8">
									<Icon
										size={64}
										className="text-white drop-shadow-xl transform -rotate-12 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
										strokeWidth={1.5}
									/>
								</div>

								{/* Bottom Text */}
								<div className="absolute bottom-0 left-0 w-full p-2.5 pb-3 text-center flex flex-col items-center justify-end h-1/2 bg-gradient-to-t from-black/20 to-transparent">
									<h3 className="text-white font-black text-sm md:text-[15px] leading-[1.1] uppercase tracking-wide drop-shadow-md">
										{game.title}
									</h3>
									<span className="text-[8px] text-white/80 font-bold uppercase mt-1 tracking-[0.1em]">
										BOARDBET ORIGINALS
									</span>
								</div>
							</div>

							{/* Live Player Count Footer */}
							<div className="flex items-center gap-1.5 mt-2 px-0.5">
								<div className="w-1.5 h-1.5 rounded-full bg-[#00e701] shadow-[0_0_6px_rgba(0,231,1,0.6)] shrink-0"></div>
								<span className="text-[11px] text-base-content/60 font-medium tracking-tight">
									<span className="text-white font-semibold">
										{game.players}
									</span>{" "}
									playing
								</span>
							</div>
						</div>
					);
				})}
			</div>

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
