import React, { useState } from "react";
import {
	Box,
	Typography,
	Button,
	Stack,
	Menu,
	MenuItem,
	styled,
} from "@mui/material";
import {
	FilterAlt as FilterAltIcon,
	Sort as SortIcon,
	KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";

// --- Styled Components ---
const ActionButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#2f4553",
	color: "#fff",
	textTransform: "none",
	fontWeight: 600,
	borderRadius: "8px",
	padding: "6px 16px",
	"&:hover": {
		backgroundColor: "#3f5b6d",
	},
}));

const CardContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "8px",
	cursor: "pointer",
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "translateY(-4px)",
	},
});

const ImageWrapper = styled(Box)({
	position: "relative",
	width: "100%",
	paddingTop: "133%", // ~3:4 Aspect ratio
	borderRadius: "12px",
	overflow: "hidden",
	backgroundColor: "#1a2c38",
});

const GameImage = styled("img")({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
});

const GameInfoOverlay = styled(Box)({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	padding: "30px 10px 10px",
	background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
});

const Badge = styled(Box)({
	position: "absolute",
	top: "8px",
	left: "8px",
	backgroundColor: "#fff",
	color: "#000",
	width: "24px",
	height: "24px",
	borderRadius: "6px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: "bold",
	fontSize: "14px",
});

// --- Mock Data (56 Games Total) ---
const initial8Games = [
	{
		id: 1,
		title: "LE FISHERMAN",
		provider: "HACKSAW GAMING",
		players: 538,
		image: "https://picsum.photos/seed/fish/200/300",
	},
	{
		id: 2,
		title: "YUMMY MUMMIES",
		provider: "KNUCKLEHEAD SYNDICATE",
		players: 215,
		image: "https://picsum.photos/seed/mummy/200/300",
	},
	{
		id: 3,
		title: "LE BUNNY",
		provider: "HACKSAW GAMING",
		players: 279,
		image: "https://picsum.photos/seed/bunny/200/300",
	},
	{
		id: 4,
		title: "BUFFALO HOLD",
		provider: "BOOMING GAMES",
		players: 350,
		image: "https://picsum.photos/seed/buffalo/200/300",
	},
	{
		id: 5,
		title: "SUPERSTAR SEVENS",
		provider: "HACKSAW GAMING",
		players: 94,
		image: "https://picsum.photos/seed/sevens/200/300",
	},
	{
		id: 6,
		title: "CACTUS CASSIDY",
		provider: "MASSIVE STUDIOS",
		players: 140,
		image: "https://picsum.photos/seed/cactus/200/300",
	},
	{
		id: 7,
		title: "LEPRE'CASH",
		provider: "TWIST GAMING",
		players: 181,
		image: "https://picsum.photos/seed/cash/200/300",
	},
	{
		id: 8,
		title: "DRAGONSPIRE",
		provider: "PAPERCLIP GAMING",
		players: 252,
		image: "https://picsum.photos/seed/dragon/200/300",
	},
];

// Generate the remaining 48 placeholder games programmatically
const allGamesData = [
	...initial8Games,
	...Array.from({ length: 48 }, (_, i) => ({
		id: i + 9,
		title: `PLACEHOLDER ${i + 9}`,
		provider: "VARIOUS STUDIOS",
		players: Math.floor(Math.random() * 300) + 20, // Random player count
		image: `https://picsum.photos/seed/game${i + 9}/200/300`,
	})),
];

// --- Main Component ---
const GamesDisplay = () => {
	// Navigation Menus State
	const [anchorElFilter, setAnchorElFilter] = useState(null);
	const [anchorElSort, setAnchorElSort] = useState(null);

	// Pagination State
	const [visibleCount, setVisibleCount] = useState(16); // Show 16 by default now so it looks full

	// Handlers
	const handleFilterClick = (event) => setAnchorElFilter(event.currentTarget);
	const handleSortClick = (event) => setAnchorElSort(event.currentTarget);
	const handleCloseMenus = () => {
		setAnchorElFilter(null);
		setAnchorElSort(null);
	};

	const handleShowMore = () => {
		// Reveal 8 more games, capped at the total length of the array (56)
		setVisibleCount((prevCount) =>
			Math.min(prevCount + 8, allGamesData.length),
		);
	};

	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: "1100px",
				mx: "auto",
				p: 3,
				marginLeft: "125px",
			}}
		>
			{/* Top Bar Navigation */}
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: 4 }}
			>
				<Stack direction="row" spacing={2} alignItems="center">
					<ActionButton
						onClick={handleFilterClick}
						startIcon={<FilterAltIcon />}
					>
						Filter
					</ActionButton>
					<ActionButton
						onClick={handleFilterClick}
						endIcon={<KeyboardArrowDownIcon />}
					>
						Publishers
					</ActionButton>
				</Stack>

				<Stack direction="row" spacing={2} alignItems="center">
					<ActionButton onClick={handleSortClick} startIcon={<SortIcon />}>
						Sort
					</ActionButton>
					<ActionButton
						onClick={handleSortClick}
						endIcon={<KeyboardArrowDownIcon />}
					>
						Popular (7 Days)
					</ActionButton>
				</Stack>
			</Stack>

			{/* "Coming Soon" Menus */}
			<Menu
				anchorEl={anchorElFilter}
				open={Boolean(anchorElFilter)}
				onClose={handleCloseMenus}
			>
				<MenuItem onClick={handleCloseMenus}>Coming soon</MenuItem>
			</Menu>
			<Menu
				anchorEl={anchorElSort}
				open={Boolean(anchorElSort)}
				onClose={handleCloseMenus}
			>
				<MenuItem onClick={handleCloseMenus}>Coming soon</MenuItem>
			</Menu>

			{/* Game Grid */}
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
					gap: 2.5,
					mb: 3,
				}}
			>
				{allGamesData.slice(0, visibleCount).map((game) => (
					<CardContainer key={game.id}>
						<ImageWrapper>
							<GameImage src={game.image} alt={game.title} loading="lazy" />
							{/* Changed badge to B */}
							<Badge>B</Badge>
							<GameInfoOverlay>
								<Typography
									variant="subtitle1"
									sx={{
										color: "#fff",
										fontWeight: 900,
										lineHeight: 1.1,
										textTransform: "uppercase",
										textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
									}}
								>
									{game.title}
								</Typography>
								<Typography
									variant="caption"
									sx={{
										color: "rgba(255,255,255,0.7)",
										fontSize: "0.6rem",
										fontWeight: 600,
										mt: 0.5,
									}}
								>
									{game.provider}
								</Typography>
							</GameInfoOverlay>
						</ImageWrapper>

						<Stack
							direction="row"
							alignItems="center"
							spacing={0.5}
							sx={{ px: 0.5 }}
						>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									backgroundColor: "#00e701",
								}}
							/>
							<Typography
								variant="caption"
								sx={{ color: "text.secondary", fontWeight: 500 }}
							>
								{game.players} playing
							</Typography>
						</Stack>
					</CardContainer>
				))}
			</Box>

			{/* Show More Button & Progress Text */}
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				mt={5}
				gap={2}
			>
				{visibleCount < allGamesData.length && (
					<Button
						variant="contained"
						onClick={handleShowMore}
						sx={{
							backgroundColor: "#2f4553",
							color: "#fff",
							textTransform: "none",
							fontWeight: 600,
							borderRadius: "8px",
							padding: "10px 40px",
							"&:hover": {
								backgroundColor: "#3f5b6d",
							},
						}}
					>
						Show More
					</Button>
				)}
				<Typography variant="body2" color="text.secondary" fontWeight={500}>
					Showing {visibleCount} of {allGamesData.length} games
				</Typography>
			</Box>
		</Box>
	);
};

export default GamesDisplay;
