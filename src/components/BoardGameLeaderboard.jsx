import React, { useState } from "react";
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Button,
	Stack,
	Avatar,
	styled,
} from "@mui/material";
import {
	Home as HomeIcon,
	Map as MapIcon,
	Token as TokenIcon,
	SportsEsports as SportsEsportsIcon,
	Security as SecurityIcon,
} from "@mui/icons-material";

const ToggleContainer = styled(Paper)(({ theme }) => ({
	display: "inline-flex",
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	borderRadius: "25px",
	padding: "4px",
	marginBottom: theme.spacing(3),
}));

const ToggleButton = styled(Button)(({ theme, active }) => ({
	borderRadius: "20px",
	padding: "6px 20px",
	textTransform: "none",
	fontWeight: 600,
	boxShadow: "none",
	backgroundColor: active ? "#2f4553" : "transparent",
	color: active ? "#fff" : theme.palette.text.secondary,
	"&:hover": {
		backgroundColor: active ? "#2f4553" : "rgba(255, 255, 255, 0.05)",
	},
}));

const CurrencyBadge = styled(Box)(({ type }) => ({
	backgroundColor: type === "Gold" ? "#e2b42d" : "#00e701",
	color: "#000",
	borderRadius: "50%",
	width: 16,
	height: 16,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "10px",
	fontWeight: "bold",
	marginLeft: "4px",
}));

const mockData = [
	{
		id: 1,
		game: "Monopoly",
		user: "Hidden",
		time: "7:12 PM",
		amount: 21000000,
		currency: "Gold",
		multiplier: 0.19,
		profit: -17073000,
		type: "loss",
	},
	{
		id: 2,
		game: "Catan",
		user: "Hidden",
		time: "7:12 PM",
		amount: 3000,
		currency: "Cash",
		multiplier: 1.0,
		profit: 3000,
		type: "win",
	},
	{
		id: 3,
		game: "Risk",
		user: "Quinnjay22",
		time: "7:12 PM",
		amount: 35000,
		currency: "Gold",
		multiplier: 350.0,
		profit: 12250000,
		type: "bigWin",
	},
	{
		id: 4,
		game: "Monopoly",
		user: "Hidden",
		time: "7:12 PM",
		amount: 2000,
		currency: "Cash",
		multiplier: 0.0,
		profit: -2000,
		type: "loss",
	},
	{
		id: 5,
		game: "Scrabble",
		user: "Hidden",
		time: "7:12 PM",
		amount: 6000,
		currency: "Cash",
		multiplier: 0.0,
		profit: -6000,
		type: "loss",
	},
];

const formatNumber = (num) => {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(num);
};

const BoardGameLeaderboard = () => {
	const [activeTab, setActiveTab] = useState("bets");

	return (
		<Box sx={{ width: "100%", maxWidth: "1100px", mx: "auto", p: 3, marginLeft: "125px"}}>
			<ToggleContainer elevation={0}>
				<ToggleButton
					active={activeTab === "bets" ? 1 : 0}
					onClick={() => setActiveTab("bets")}
				>
					All Bets
				</ToggleButton>
				<ToggleButton
					active={activeTab === "monopoly" ? 1 : 0}
					onClick={() => setActiveTab("monopoly")}
				>
					Monopoly Leaderboard
				</ToggleButton>
			</ToggleContainer>

			<TableContainer
				component={Paper}
				elevation={0}
				sx={{ bgcolor: "transparent", backgroundImage: "none" }}
			>
				<Table
					sx={{ minWidth: 650, borderCollapse: "separate", borderSpacing: 0 }}
					aria-label="board game leaderboard"
				>
					<TableHead>
						<TableRow
							sx={{
								backgroundColor: "#000000",
								"& th:first-of-type": {
									borderTopLeftRadius: "10px",
									borderBottomLeftRadius: "10px",
								},
								"& th:last-of-type": {
									borderTopRightRadius: "10px",
									borderBottomRightRadius: "10px",
								},
							}}
						>
							<TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>
								Game
							</TableCell>
							<TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>
								User
							</TableCell>
							<TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>
								Time
							</TableCell>
							<TableCell
								align="right"
								sx={{ color: "text.secondary", borderBottom: "none" }}
							>
								Amount
							</TableCell>
							<TableCell
								align="right"
								sx={{ color: "text.secondary", borderBottom: "none" }}
							>
								Multiplier
							</TableCell>
							<TableCell
								align="right"
								sx={{ color: "text.secondary", borderBottom: "none" }}
							>
								Result
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{mockData.map((row) => (
							<TableRow
								key={row.id}
								sx={{
									"&:nth-of-type(even)": {
										bgcolor: "rgba(255, 255, 255, 0.02)",
									},
									"&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" },
									cursor: "pointer",
									border: "none",
								}}
							>
								<TableCell
									sx={{
										color: "text.primary",
										borderBottom: "none",
										fontWeight: 600,
									}}
								>
									<Stack direction="row" alignItems="center" spacing={1}>
										{row.game === "Monopoly" && (
											<HomeIcon
												sx={{ color: "text.secondary", fontSize: 20 }}
											/>
										)}
										{row.game === "Risk" && (
											<MapIcon sx={{ color: "text.secondary", fontSize: 20 }} />
										)}
										{row.game === "Catan" && (
											<TokenIcon
												sx={{ color: "text.secondary", fontSize: 20 }}
											/>
										)}
										{["Scrabble"].includes(row.game) && (
											<SportsEsportsIcon
												sx={{ color: "text.secondary", fontSize: 20 }}
											/>
										)}
										<Typography variant="body2" fontWeight="600">
											{row.game}
										</Typography>
									</Stack>
								</TableCell>

								<TableCell sx={{ borderBottom: "none" }}>
									<Stack direction="row" alignItems="center" spacing={1}>
										{row.user === "Hidden" ? (
											<SecurityIcon
												sx={{ fontSize: 18, color: "text.secondary" }}
											/>
										) : (
											<Avatar sx={{ width: 20, height: 20, fontSize: 10 }}>
												Q
											</Avatar>
										)}
										<Typography
											variant="body2"
											color={
												row.user === "Hidden"
													? "text.secondary"
													: "text.primary"
											}
											fontWeight={row.user !== "Hidden" ? "bold" : "normal"}
										>
											{row.user}
										</Typography>
									</Stack>
								</TableCell>

								<TableCell
									sx={{ color: "text.secondary", borderBottom: "none" }}
								>
									{row.time}
								</TableCell>

								<TableCell align="right" sx={{ borderBottom: "none" }}>
									<Stack
										direction="row"
										justifyContent="flex-end"
										alignItems="center"
									>
										<Typography
											variant="body2"
											fontWeight={500}
											color="text.primary"
										>
											{formatNumber(row.amount)}
										</Typography>
										<CurrencyBadge type={row.currency}>
											{row.currency === "Gold" ? "G" : "S"}
										</CurrencyBadge>
									</Stack>
								</TableCell>

								<TableCell align="right" sx={{ borderBottom: "none" }}>
									{row.type === "bigWin" && (
										<Box component="span" sx={{ mr: 1 }}>
											🔥
										</Box>
									)}
									<Typography
										component="span"
										variant="body2"
										fontWeight={500}
										sx={{
											color:
												row.type === "bigWin" ? "#ffaa00" : "text.secondary",
										}}
									>
										{row.multiplier.toFixed(2)}×
									</Typography>
								</TableCell>

								<TableCell align="right" sx={{ borderBottom: "none" }}>
									<Stack
										direction="row"
										justifyContent="flex-end"
										alignItems="center"
									>
										<Typography
											variant="body2"
											fontWeight="bold"
											sx={{
												color: row.profit >= 0 ? "#00e701" : "text.primary",
											}}
										>
											{row.profit >= 0 ? "+" : ""}
											{formatNumber(row.profit)}
										</Typography>
										<CurrencyBadge type={row.currency}>
											{row.currency === "Gold" ? "G" : "S"}
										</CurrencyBadge>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default BoardGameLeaderboard;
