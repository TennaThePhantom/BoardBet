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
	AttachMoney as MoneyIcon, // Changed icon to match real money
} from "@mui/icons-material";
import useLayoutStore from "../stores/layoutStore";

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

// Styled for the green money circle
const CurrencyBadge = styled(Box)(() => ({
	backgroundColor: "#00e701",
	color: "#000",
	borderRadius: "50%",
	width: 16,
	height: 16,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "10px",
	fontWeight: "bold",
	marginLeft: "6px",
}));

const mockData = [
	{
		id: 1,
		game: "Monopoly",
		user: "Hidden",
		opponent: "CPU_Master",
		time: "7:12 PM",
		bet: 20.0,
		amount: 20.0,
		profit: -20.0,
		type: "loss",
	},
	{
		id: 2,
		game: "Catan",
		user: "Hidden",
		opponent: "TraderJoe",
		time: "7:12 PM",
		bet: 50.0,
		amount: 50.0,
		profit: 50.0,
		type: "win",
	},
	{
		id: 3,
		game: "Risk",
		user: "Quinnjay22",
		opponent: "Hidden",
		time: "7:12 PM",
		bet: 100.0,
		amount: 100.0,
		profit: 350.0,
		type: "bigWin",
	},
	{
		id: 4,
		game: "Monopoly",
		user: "Hidden",
		opponent: "Banker99",
		time: "7:12 PM",
		bet: 10.0,
		amount: 10.0,
		profit: -10.0,
		type: "loss",
	},
	{
		id: 5,
		game: "Catan",
		user: "Hidden",
		opponent: "SheepLord",
		time: "8:45 PM",
		bet: 75.0,
		amount: 75.0,
		profit: 150.0,
		type: "win",
	},
	{
		id: 6,
		game: "Chess",
		user: "Hidden",
		opponent: "GrandMasterX",
		time: "9:30 PM",
		bet: 200.0,
		amount: 200.0,
		profit: -200.0,
		type: "loss",
	},
	{
		id: 7,
		game: "Risk",
		user: "Quinnjay22",
		opponent: "Hidden",
		time: "10:15 PM",
		bet: 500.0,
		amount: 500.0,
		profit: 2500.0,
		type: "bigWin",
	},
	{
		id: 8,
		game: "Uno",
		user: "Hidden",
		opponent: "CardShark",
		time: "11:00 PM",
		bet: 30.0,
		amount: 30.0,
		profit: 30.0,
		type: "win",
	},
];

const formatCurrency = (num) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(num);
};

const BoardGameLeaderboard = () => {
	const [activeTab, setActiveTab] = useState("bets");
	const { isSidebarOpen } = useLayoutStore();
	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: isSidebarOpen ? "1200px" : "1100px",
				mx: "auto",
				p: 3,
				marginLeft: isSidebarOpen ? "125px" : "125px",
			}}
		>
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
					sx={{
						minWidth: 800,
						borderCollapse: "separate",
						borderSpacing: "0 4px",
					}}
				>
					<TableHead>
						<TableRow
							sx={{
								backgroundColor: "#000000",
								"& th": { borderBottom: "none", color: "text.secondary" },
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
							<TableCell>Game</TableCell>
							<TableCell>User</TableCell>
							<TableCell>Time</TableCell>
							<TableCell align="right">Bet</TableCell>
							<TableCell align="left">Opponent</TableCell>
							<TableCell align="right">Result</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{mockData.map((row) => (
							<TableRow
								key={row.id}
								sx={{
									bgcolor: "rgba(255, 255, 255, 0.02)",
									"&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" },
									cursor: "pointer",
								}}
							>
								<TableCell
									sx={{
										border: "none",
										color: "text.primary",
										fontWeight: 600,
									}}
								>
									<Stack direction="row" alignItems="center" spacing={1}>
										{row.game === "Monopoly" && (
											<HomeIcon
												sx={{ fontSize: 20, color: "text.secondary" }}
											/>
										)}
										{row.game === "Risk" && (
											<MapIcon sx={{ fontSize: 20, color: "text.secondary" }} />
										)}
										{row.game === "Catan" && (
											<TokenIcon
												sx={{ fontSize: 20, color: "text.secondary" }}
											/>
										)}
										<Typography variant="body2">{row.game}</Typography>
									</Stack>
								</TableCell>

								<TableCell sx={{ border: "none" }}>
									<Stack direction="row" alignItems="center" spacing={1}>
										{row.user === "Hidden" ? (
											<SecurityIcon sx={{ fontSize: 16 }} />
										) : (
											<Avatar sx={{ width: 20, height: 20, fontSize: 10 }}>
												Q
											</Avatar>
										)}
										<Typography variant="body2">{row.user}</Typography>
									</Stack>
								</TableCell>

								<TableCell sx={{ border: "none", color: "text.secondary" }}>
									{row.time}
								</TableCell>

								<TableCell align="right" sx={{ border: "none" }}>
									<Stack
										direction="row"
										justifyContent="flex-end"
										alignItems="center"
									>
										<Typography variant="body2" fontWeight={600}>
											{formatCurrency(row.bet)}
										</Typography>
										<CurrencyBadge>
											<MoneyIcon sx={{ fontSize: 12 }} />
										</CurrencyBadge>
									</Stack>
								</TableCell>

								<TableCell align="left" sx={{ border: "none" }}>
									<Typography variant="body2" color="text.secondary">
										{row.opponent}
									</Typography>
								</TableCell>

								<TableCell align="right" sx={{ border: "none" }}>
									<Typography
										variant="body2"
										fontWeight="bold"
										sx={{ color: row.profit >= 0 ? "#00e701" : "#ff4d4d" }}
									>
										{row.profit >= 0 ? "+" : ""}
										{formatCurrency(row.profit)}
									</Typography>
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
