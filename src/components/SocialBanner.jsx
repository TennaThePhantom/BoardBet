import React from "react";
import {
	Box,
	Typography,
	Button,
	Stack,
	IconButton,
	useTheme,
	useMediaQuery,
} from "@mui/material";
// change these icons later to google twitch facebook icons
import CasinoIcon from "@mui/icons-material/Casino";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import useLayoutStore from "../stores/layoutStore";

export const SocialBanner = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const { isSidebarOpen } = useLayoutStore();

	return (
		// container box
		<Box
			sx={{
				position: "relative",
				top: -20,
				transform: "translateY(0px)",
				left: isSidebarOpen ? `calc(70px - 90px)` : `calc(240px - 260px)`,
				height: { xs: "30vh", sm: "35vh", md: "50vh" },
				minHeight: "300px",
				backgroundImage:
					"url(https://wonderfulengineering.com/wp-content/uploads/2016/01/black-wallpaper-3.jpg)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				borderRadius: { xs: 0, md: 2 },
				overflow: "hidden",
				marginBottom: 0,
				width: {
					xs: "100%",
					md: isSidebarOpen ? "calc(100% + 43px)" : "calc(100% + 43px)",
				},
			}}
		> 
			<Box // for header and buttons and game boxes
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(31, 41, 55, 0.75)",
					backgroundBlendMode: "multiply",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box // header and buttons
					sx={{
						textAlign: "left",
						color: "white",
						maxWidth: "600px",
						width: { xs: "90%", md: "35%" },
						px: 4,
						py: 3,
						marginLeft: 12,
						flexShrink: 0, // Prevent shrinking
					}}
				>
					<Typography
						variant={isMobile ? "h5" : "h4"}
						fontWeight="bold"
						gutterBottom
						sx={{
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
							mb: 3,
							fontSize: { xs: "1.225rem", sm: "1.475rem", md: "1.8rem" },
						}}
					>
						The world's favorite board games gambling site
					</Typography>

					<Button
						variant="contained"
						size={isMobile ? "medium" : "large"}
						sx={{
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: 6,
							},
							px: 4,
							py: 1.5,
							fontSize: { xs: "0.9rem", md: "1.1rem" },
							fontWeight: "bold",
							mb: 3,
							transition: "all 0.3s ease",
						}}
					>
						Register Now
					</Button>

					<Typography
						variant="body1"
						sx={{
							mb: 2,
							opacity: 0.9,
							fontWeight: 500,
							fontSize: { xs: "0.9rem", md: "1rem" },
						}}
					>
						or sign up with
					</Typography>

					<Stack
						direction="row"
						spacing={2}
						justifyContent="flex-start"
						sx={{ mt: 1 }}
					>
						<IconButton
							sx={{
								bgcolor: "white",
								color: "#DB4437",
								"&:hover": {
									bgcolor: "#DB4437",
									color: "white",
									transform: "scale(1.1)",
								},
								width: { xs: 45, md: 50 },
								height: { xs: 45, md: 50 },
								transition: "all 0.2s ease",
							}}
						>
							<CasinoIcon fontSize="medium" />
						</IconButton>

						<IconButton
							sx={{
								bgcolor: "white",
								color: "#4267B2",
								"&:hover": {
									bgcolor: "#4267B2",
									color: "white",
									transform: "scale(1.1)",
								},
								width: { xs: 45, md: 50 },
								height: { xs: 45, md: 50 },
								transition: "all 0.2s ease",
							}}
						>
							<SportsEsportsIcon fontSize="medium" />
						</IconButton>

						<IconButton
							sx={{
								bgcolor: "white",
								color: "#9146FF",
								"&:hover": {
									bgcolor: "#9146FF",
									color: "white",
									transform: "scale(1.1)",
								},
								width: { xs: 45, md: 50 },
								height: { xs: 45, md: 50 },
								transition: "all 0.2s ease",
							}}
						>
							<CasinoIcon fontSize="medium" />
						</IconButton>
					</Stack>
				</Box>

				{/* Right side game boxes */}
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						width: "50%",
						height: "100%",
						px: 3,
						gap: 2,
						flexShrink: 0, // Prevent the entire container from shrinking
						minWidth: "50%", // Ensure minimum width
						marginRight: 4
					}}
				>
					{/* Game Box 1 */}
					<Box
						sx={{
							width: "280px", // Fixed width instead of percentage
							height: "250px", // Fixed height
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 2,
							border: "2px dashed rgba(255, 255, 255, 0.3)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0, // Prevent shrinking
						}}
					>
						<Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
							Game Box 1
						</Typography>
					</Box>
					{/* Game Box 2 */}
					<Box
						sx={{
							width: "280px", // Fixed width instead of percentage
							height: "250px", // Fixed height
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 2,
							border: "2px dashed rgba(255, 255, 255, 0.3)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0, // Prevent shrinking
						}}
					>
						<Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
							Game Box 2
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SocialBanner;