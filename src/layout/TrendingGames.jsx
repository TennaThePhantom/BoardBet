import React from "react";
import { TrendingUp, ChevronRight } from "lucide-react";

// Mock data adapted for a board game theme
const TRENDING_GAMES = [
	{
		id: 1,
		title: "MEEPLE MADNESS",
		provider: "BOARDBET ORIGINALS",
		players: "760",
		image:
			"https://images.unsplash.com/photo-1611891487122-207579d67d98?auto=format&fit=crop&w=300&q=80",
		isOriginal: true,
	},
	{
		id: 2,
		title: "DICE MASTERS",
		provider: "COREFECT INTERACTIVE",
		players: "298",
		image:
			"https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?auto=format&fit=crop&w=300&q=80",
		isOriginal: true,
	},
	{
		id: 3,
		title: "SETTLERS HOLD & WIN",
		provider: "BOOMING GAMES",
		players: "357",
		image:
			"https://images.unsplash.com/photo-1632360216719-74d71fc9d617?auto=format&fit=crop&w=300&q=80",
		isOriginal: false,
	},
	{
		id: 4,
		title: "LAZY VAMPIRE TRICKS",
		provider: "PAPERCLIP GAMING",
		players: "194",
		image:
			"https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=300&q=80",
		isOriginal: true,
	},
	{
		id: 5,
		title: "4 SHINY DIAMONDS",
		provider: "PLAYSON",
		players: "192",
		image:
			"https://images.unsplash.com/photo-1588665796985-78370b347101?auto=format&fit=crop&w=300&q=80",
		isOriginal: false,
	},
	{
		id: 6,
		title: "PUMPKIN PANIC",
		provider: "POCKET PLAY",
		players: "189",
		image:
			"https://images.unsplash.com/photo-1603577717441-2aeb6b7858c8?auto=format&fit=crop&w=300&q=80",
		isOriginal: true,
	},
	{
		id: 7,
		title: "CARD SHARKS",
		provider: "SWIFT GAMING",
		players: "162",
		image:
			"https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=300&q=80",
		isOriginal: true,
	},
	{
		id: 8,
		title: "DIAMOND POWER XXL",
		provider: "PLAYSON",
		players: "171",
		image:
			"https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=300&q=80",
		isOriginal: false,
	},
];

export default function TrendingGames() {
	return (
		<div className="w-full max-w-6xl mx-auto py-6">
			{/* Header Section */}
			<div className="flex items-center gap-2 mb-4 px-1 group cursor-pointer w-max">
				<TrendingUp
					size={18}
					className="text-base-content/70 group-hover:text-white transition-colors"
				/>
				<h2 className="text-base font-bold text-white group-hover:underline flex items-center gap-0.5">
					Trending Games <ChevronRight size={16} className="mt-0.5" />
				</h2>
			</div>

			{/* Horizontal Scrollable Container */}
			<div className="flex overflow-x-auto gap-3 pb-4 custom-scrollbar px-1">
				{TRENDING_GAMES.map((game) => (
					<div
						key={game.id}
						className="flex-none w-[130px] md:w-[150px] group cursor-pointer"
					>
						{/* Game Card Thumbnail */}
						<div className="relative w-full aspect-[2.5/3.5] rounded-xl overflow-hidden shadow-lg border border-base-content/5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:brightness-110">
							{/* BoardBet Exclusive Badge */}
							{game.isOriginal && (
								<div className="absolute top-1.5 left-1.5 bg-black/80 rounded-full w-6 h-6 flex items-center justify-center backdrop-blur-sm shadow-md border border-white/10 z-10">
									<span className="text-[13px] font-black italic text-white leading-none mt-0.5">
										B
									</span>
								</div>
							)}

							{/* Cover Image */}
							<img
								src={game.image}
								alt={game.title}
								className="absolute inset-0 w-full h-full object-cover"
							/>

							{/* Bottom Text Overlay Gradient */}
							<div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

							{/* Text Content */}
							<div className="absolute bottom-0 left-0 w-full p-2.5 pb-3 text-center flex flex-col items-center justify-end h-full">
								<h3 className="text-white font-black text-sm leading-[1.1] uppercase tracking-tighter drop-shadow-md">
									{game.title}
								</h3>
								<span className="text-[8px] text-white/70 font-bold uppercase mt-1 tracking-[0.1em]">
									{game.provider}
								</span>
							</div>
						</div>

						{/* Live Player Count Footer */}
						<div className="flex items-center gap-1.5 mt-2 px-0.5">
							<div className="w-1.5 h-1.5 rounded-full bg-[#00e701] shadow-[0_0_6px_rgba(0,231,1,0.6)] shrink-0"></div>
							<span className="text-[11px] text-base-content/60 font-medium">
								<span className="text-white font-semibold">{game.players}</span>{" "}
								playing
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Hide the scrollbar cleanly but allow scrolling */}
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
