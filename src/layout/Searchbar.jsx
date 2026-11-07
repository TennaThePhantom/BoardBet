import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
	return (
		<div className="w-full max-w-6xl mx-auto relative group">
			{/* Search Icon */}
			<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
				<Search size={20} className="text-base-content/60" />
			</div>

			{/* Input Field */}
			<input
				type="text"
				className="w-full h-[46px] pl-12 pr-24 bg-[#0f212e] border border-base-content/10 rounded-md text-base-content text-sm placeholder-base-content/60 focus:outline-none focus:border-base-content/30 focus:ring-1 focus:ring-base-content/30 transition-all shadow-sm"
				placeholder="Search BoardBet"
			/>

			{/* Shortcut Badge */}
			<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<kbd className="h-7 px-2.5 rounded bg-base-content/10 border border-base-content/5 text-base-content/80 text-xs font-semibold flex items-center justify-center shadow-sm">
					Ctrl + K
				</kbd>
			</div>
		</div>
	);
}
