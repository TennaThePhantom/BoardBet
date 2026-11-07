import React from "react";
import { Dices, Spade } from "lucide-react";

export default function GameCategories() {
	return (
		<div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row gap-4">
			{/* Board Games Category */}
			<button className="flex-1 h-16 bg-base-200 hover:bg-base-200/80 transition-colors rounded-lg px-5 flex items-center justify-between shadow-sm cursor-pointer border border-base-content/5">
				<div className="flex items-center gap-3">
					<Dices size={22} className="text-base-content/80" />
					<span className="text-lg font-bold text-white tracking-wide">
						Board Games
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#00e701] shadow-[0_0_8px_rgba(0,231,1,0.4)]"></div>
					<span className="text-sm font-medium text-white">11,230</span>
					<span className="text-sm text-base-content/60">playing</span>
				</div>
			</button>

			{/* Card Games Category */}
			<button className="flex-1 h-16 bg-base-200 hover:bg-base-200/80 transition-colors rounded-lg px-5 flex items-center justify-between shadow-sm cursor-pointer border border-base-content/5">
				<div className="flex items-center gap-3">
					<Spade size={22} className="text-base-content/80" />
					<span className="text-lg font-bold text-white tracking-wide">
						Card Games
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#00e701] shadow-[0_0_8px_rgba(0,231,1,0.4)]"></div>
					<span className="text-sm font-medium text-white">420</span>
					<span className="text-sm text-base-content/60">playing</span>
				</div>
			</button>
		</div>
	);
}
