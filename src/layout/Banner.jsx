import React from "react";

export default function Banner() {
	return (
		<div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative border border-base-content/5 bg-[#0f212e]">
			{/* Background Image Container */}
			<div
				className="w-full aspect-[2.85/1] bg-cover bg-center flex flex-col justify-center items-center relative p-6 md:p-8"
				style={{
					backgroundImage: `linear-gradient(to right, rgba(15, 33, 46, 0.4), rgba(15, 33, 46, 0.1)), url('watermarked_img_10968368198904337822.jpg')`,
				}}
			>
				<div className="text-center max-w-lg z-10 space-y-4">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
						America's Favorite <br /> Social Board Gaming
					</h2>

					<div className="pt-2">
						<button className="btn btn-primary w-full max-w-xs h-12 text-white font-bold bg-[#1475e1] hover:bg-[#4392ec] border-none rounded-lg shadow-lg capitalize transition-all">
							Register
						</button>
					</div>

					<div className="space-y-3 pt-2">
						<p className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
							Or Continue With
						</p>

						<div className="flex justify-center items-center gap-3">
							{/* Google */}
							<button className="btn btn-circle bg-base-300/80 hover:bg-base-300 border-none w-12 h-12 flex justify-center items-center">
								<svg className="w-5 h-5" viewBox="0 0 24 24">
									<path
										fill="#EA4335"
										d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.84 14.9 1 12 1 7.24 1 3.2 3.73 1.25 7.69l3.78 2.93C5.92 7.15 8.7 5.04 12 5.04z"
									/>
									<path
										fill="#4285F4"
										d="M23.49 12.27c0-.81-.07-1.59-.2-2.35H12v4.46h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.43-4.94 3.43-8.56z"
									/>
									<path
										fill="#FBBC05"
										d="M5.03 14.75a7.16 7.16 0 010-4.5V7.32l-3.78-2.93A11.96 11.96 0 000 12c0 2.9.1.58 1.25 7.61l3.78-2.86z"
									/>
									<path
										fill="#34A853"
										d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.1-3.86 1.1-3.3 0-6.08-2.11-7.07-5.58l-3.78 2.93C3.2 20.27 7.24 23 12 23z"
									/>
								</svg>
							</button>

							{/* Facebook */}
							<button className="btn btn-circle bg-base-300/80 hover:bg-base-300 border-none w-12 h-12 flex justify-center items-center">
								<svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</button>

							{/* K Icon */}
							<button className="btn btn-circle bg-base-300/80 hover:bg-base-300 border-none w-12 h-12 flex justify-center items-center font-black text-2xl text-[#05ce78]">
								K
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
