import React from "react";

export default function Navbar() {
    return (
        <header
            data-theme="dim"
            className="w-full h-16 bg-base-200 flex items-center justify-around px-12 border-b border-base-content/5 z-10"
        >
            {/* Left side - Brand Logo */}
            <div className="flex items-center shrink-0">
                <h1 className="text-3xl font-black italic tracking-tighter text-white select-none">
                    BoardBet
                </h1>
            </div>

            {/* Right side - Authentication Buttons */}
            <div className="flex items-center gap-4 shrink-0">
                <button className="btn btn-md h-10 px-5 border-none bg-base-content/10 hover:bg-base-content/20 text-white font-semibold capitalize rounded-md transition-colors">
                    Sign In
                </button>
                <button className="btn btn-md h-10 px-5 border-none bg-[#1475e1] hover:bg-[#4392ec] text-white font-semibold capitalize rounded-md transition-colors">
                    Register
                </button>
            </div>
        </header>
    );
}