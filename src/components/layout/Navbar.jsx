// components/layout/Navbar.jsx
import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import useLayoutStore from "../../stores/layoutStore"; // Adjust path as needed

const Navbar = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	
	// Get sidebar width from Zustand
	const sidebarWidth = useLayoutStore((state) => state.sidebarWidth);

	const navItems = [
		{ label: "Login", onClick: () => console.log("Login clicked") },
		{ label: "Sign Up", onClick: () => console.log("Sign Up clicked") },
	];

	return (
		<AppBar 
			position="fixed"
			className="bg-white shadow-sm" 
			elevation={0}
			sx={{
				width: `calc(100% - ${sidebarWidth}px)`,
				marginLeft: `${sidebarWidth}px`,
				transition: 'margin-left 0.3ms ease, width 0.3ms ease',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar className="flex justify-between items-center px-4 md:px-8 py-3">
				{/* Left side - Brand */}
				<Typography
					variant={isSmallScreen ? "h6" : "h5"}
					component="div"
					className="font-bold text-gray-800 whitespace-nowrap cursor-pointer"
					sx={{
						fontFamily: '"Galada", sans-serif',
						fontSize: isSmallScreen ? "1.55rem" : "2.25rem",
						marginLeft: isSmallScreen ? 0 : 8
					}}
				>
					BoardBet.com
				</Typography>

				{/* Right side - Navigation items */}
				<Box className="flex items-center gap-1 sm:gap-2">
					{navItems.map((item, index) => (
						<Button
							key={item.label}
							onClick={item.onClick}
							size={isSmallScreen ? "small" : "medium"}
							className={`normal-case whitespace-nowrap ${
								item.label === "Sign Up"
									? "bg-blue-600 text-white hover:bg-blue-700 px-3 sm:px-6"
									: "text-gray-700 hover:bg-gray-100 px-2 sm:px-4 border border-gray-300 hover:border-gray-400"
							}`}
							variant={item.label === "Sign Up" ? "contained" : "outlined"}
						>
							{item.label}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;