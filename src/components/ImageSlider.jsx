// components/ImageSlider.jsx
// good starter place needs adjustments and improvements
import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Typography,
	IconButton,
	Stack,
	Card,
	CardMedia,
	CardContent,
	useTheme,
	useMediaQuery,
	Chip,
	alpha,
} from "@mui/material";
import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Casino as CasinoIcon,
	Star as StarIcon,
} from "@mui/icons-material";
import useLayoutStore from "../stores/layoutStore";

// Generate placeholder game data
const generateGameData = (count) => {
	const games = [];
	for (let i = 1; i <= count; i++) {
		games.push({
			id: i,
			name: `Game ${i}`,
			image: `https://picsum.photos/300/200?random=${i}`,
			provider: `Provider ${(i % 5) + 1}`,
			isNew: i % 7 === 0,
			isPopular: i % 3 === 0,
			rating: (Math.random() * 2 + 3).toFixed(1),
		});
	}
	return games;
};

const ImageSlider = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));
	const { isSidebarOpen } = useLayoutStore();

	const [games, setGames] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [slidesPerView, setSlidesPerView] = useState(7);
	const sliderRef = useRef(null);

	// Initialize games
	useEffect(() => {
		setGames(generateGameData(64));
	}, []);

	// Calculate slides per view based on screen size
	useEffect(() => {
		if (isMobile) {
			setSlidesPerView(2);
		} else if (isTablet) {
			setSlidesPerView(4);
		} else {
			setSlidesPerView(7);
		}
	}, [isMobile, isTablet]);

	const totalPages = Math.ceil(games.length / slidesPerView);

	const handleNext = () => {
		setCurrentPage((prev) => (prev + 1) % totalPages);
	};

	const handlePrev = () => {
		setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
	};

	// Calculate which games to show
	const startIndex = currentPage * slidesPerView;
	const visibleGames = games.slice(startIndex, startIndex + slidesPerView);

	// Calculate container position based on sidebar
	const containerStyles = {
		position: "absolute",
		top: "80vh",
		left: isSidebarOpen ? "72px" : "240px",
		width: isSidebarOpen ? "calc(100% - 72px)" : "calc(100% - 240px)",
		transition: "all 0.3s ease",
		zIndex: 5,
		px: 3,
		py: 4,
		backgroundColor: theme.palette.background.default,
		borderRadius: 2,
		boxShadow: theme.shadows[3],

		[theme.breakpoints.down("sm")]: {
			left: 0,
			width: "100%",
			px: 2,
			py: 3,
			top: "75vh",
		},
	};

	return (
		<Box sx={containerStyles}>
			{/* Header with title and controls */}
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				sx={{ mb: 3 }}
			>
				<Stack direction="row" alignItems="center" spacing={1}>
					<CasinoIcon sx={{ color: "primary.main", fontSize: 28 }} />
					<Typography variant="h5" fontWeight="bold">
						Popular Games
					</Typography>
					<Chip
						label="64 Games"
						size="small"
						color="primary"
						variant="outlined"
						sx={{ ml: 1 }}
					/>
				</Stack>

				<Stack direction="row" spacing={1}>
					<IconButton
						onClick={handlePrev}
						disabled={currentPage === 0}
						sx={{
							backgroundColor: alpha(theme.palette.primary.main, 0.1),
							"&:hover": {
								backgroundColor: alpha(theme.palette.primary.main, 0.2),
							},
							"&.Mui-disabled": {
								backgroundColor: alpha(theme.palette.action.disabled, 0.1),
							},
						}}
					>
						<ChevronLeftIcon />
					</IconButton>

					<IconButton
						onClick={handleNext}
						disabled={currentPage === totalPages - 1}
						sx={{
							backgroundColor: alpha(theme.palette.primary.main, 0.1),
							"&:hover": {
								backgroundColor: alpha(theme.palette.primary.main, 0.2),
							},
							"&.Mui-disabled": {
								backgroundColor: alpha(theme.palette.action.disabled, 0.1),
							},
						}}
					>
						<ChevronRightIcon />
					</IconButton>

					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ alignSelf: "center", ml: 1 }}
					>
						{currentPage + 1} / {totalPages}
					</Typography>
				</Stack>
			</Stack>

			{/* Games Slider */}
			<Box
				ref={sliderRef}
				sx={{
					display: "grid",
					gridTemplateColumns: `repeat(${slidesPerView}, 1fr)`,
					gap: 2,
					overflow: "hidden",
				}}
			>
				{visibleGames.map((game) => (
					<Card
						key={game.id}
						sx={{
							position: "relative",
							borderRadius: 2,
							overflow: "hidden",
							transition: "all 0.3s ease",
							cursor: "pointer",
							"&:hover": {
								transform: "translateY(-8px)",
								boxShadow: theme.shadows[8],
								"& .game-overlay": {
									opacity: 1,
								},
							},
						}}
					>
						{/* Game Image */}
						<Box sx={{ position: "relative", height: isMobile ? 120 : 160 }}>
							<CardMedia
								component="img"
								image={game.image}
								alt={game.name}
								sx={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>

							{/* Overlay on hover */}
							<Box
								className="game-overlay"
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
									opacity: 0,
									transition: "opacity 0.3s ease",
									display: "flex",
									alignItems: "flex-end",
									p: 2,
								}}
							>
								<Typography variant="body2" color="white" fontWeight="medium">
									Play Now
								</Typography>
							</Box>

							{/* Badges */}
							<Stack
								direction="row"
								spacing={0.5}
								sx={{
									position: "absolute",
									top: 8,
									left: 8,
								}}
							>
								{game.isNew && (
									<Chip
										label="NEW"
										size="small"
										color="success"
										sx={{
											height: 20,
											fontSize: "0.65rem",
											fontWeight: "bold",
										}}
									/>
								)}
								{game.isPopular && (
									<Chip
										label="HOT"
										size="small"
										color="error"
										sx={{
											height: 20,
											fontSize: "0.65rem",
											fontWeight: "bold",
										}}
									/>
								)}
							</Stack>

							{/* Rating */}
							{game.rating && (
								<Chip
									icon={<StarIcon sx={{ fontSize: "0.8rem !important" }} />}
									label={game.rating}
									size="small"
									sx={{
										position: "absolute",
										top: 8,
										right: 8,
										backgroundColor: alpha(theme.palette.warning.main, 0.9),
										color: "white",
										height: 20,
										fontSize: "0.7rem",
										"& .MuiChip-icon": {
											color: "white",
											fontSize: "0.8rem",
										},
									}}
								/>
							)}
						</Box>

						{/* Game Info */}
						<CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
							<Typography variant="subtitle2" fontWeight="bold" noWrap>
								{game.name}
							</Typography>
							<Typography
								variant="caption"
								color="text.secondary"
								sx={{
									display: "block",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
								}}
							>
								{game.provider}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>

			{/* Dots indicator for mobile */}
			{isMobile && (
				<Stack
					direction="row"
					justifyContent="center"
					spacing={1}
					sx={{ mt: 3 }}
				>
					{Array.from({ length: totalPages }).map((_, index) => (
						<Box
							key={index}
							onClick={() => setCurrentPage(index)}
							sx={{
								width: 8,
								height: 8,
								borderRadius: "50%",
								backgroundColor:
									currentPage === index
										? theme.palette.primary.main
										: alpha(theme.palette.primary.main, 0.3),
								cursor: "pointer",
								transition: "background-color 0.3s ease",
								"&:hover": {
									backgroundColor: alpha(theme.palette.primary.main, 0.7),
								},
							}}
						/>
					))}
				</Stack>
			)}
		</Box>
	);
};

export default ImageSlider;
