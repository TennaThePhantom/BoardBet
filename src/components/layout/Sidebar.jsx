import React, { useState, useEffect } from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Divider,
	Typography,
	Box,
	IconButton,
	styled,
	Tooltip,
} from "@mui/material";
import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	ExpandLess as ExpandLessIcon,
	ExpandMore as ExpandMoreIcon,
	Star as StarIcon,
	Schedule as ScheduleIcon,
	Groups as GroupsIcon,
	SportsEsports as SportsEsportsIcon,
	NewReleases as NewReleasesIcon,
	History as HistoryIcon,
	Casino as CasinoIcon,
	Style as StyleIcon,
	Extension as ExtensionIcon,
	CardGiftcard as CardGiftcardIcon,
	Article as ArticleIcon,
	Business as BusinessIcon,
	Security as SecurityIcon,
	Support as SupportIcon,
} from "@mui/icons-material";
import useLayoutStore from "../../stores/layoutStore";

// add something for the top of siderbar like two buttons saying two games like connect 4 and monoply besides just the menu icon
// make a component for the mobile verison of the sidebar(do this when the home pagge has the search bar and the welcome message on it)

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}));

// hides scrollbar for the scrollable content in the sidebar
const ScrollableSideBar = styled(Box)(({ theme }) => ({
	overflow: "auto",
	// Hide scrollbar for Chrome, Safari and Opera
	"&::-webkit-scrollbar": {
		display: "none",
	},
	// Hide scrollbar for IE, Edge and Firefox
	msOverflowStyle: "none", // IE and Edge
	scrollbarWidth: "none", // Firefox
}));

// Styled wrapper for the sidebar content with fade-in effect
const FadeInContent = styled(Box)(({ theme }) => ({
	opacity: 0,
	animation: "fadeIn 0.5s ease-in forwards",
	animationDelay: "0.3s",
	"@keyframes fadeIn": {
		"0%": {
			opacity: 0,
		},
		"100%": {
			opacity: 1,
		},
	},
}));

const Sidebar = () => {
	// Zustand for slider state
	const { isSidebarOpen, toggleSidebar } = useLayoutStore();

	const [openPromotions, setOpenPromotions] = useState(false);
	const [openSponsorships, setOpenSponsorships] = useState(false);

	const drawerWidth = 240;
	const collapsedWidth = 72;

	const handlePromotionsClick = () => {
		setOpenPromotions(!openPromotions);
	};

	const handleSponsorshipsClick = () => {
		setOpenSponsorships(!openSponsorships);
	};

	const menuSections = [
		{
			items: [
				{ text: "Favorites", icon: <StarIcon /> },
				{ text: "Recent", icon: <ScheduleIcon /> },
				{ text: "Custom Lobbies", icon: <GroupsIcon /> },
			],
		},
		{
			title: "Games",
			items: [
				{ text: "New Releases", icon: <NewReleasesIcon /> },
				{ text: "Classic Games", icon: <HistoryIcon /> },
				{ text: "BoardBet Originals", icon: <CasinoIcon /> },
				{ text: "Only On BoardBet", icon: <SportsEsportsIcon /> },
				{ text: "Hasbro Games", icon: <ExtensionIcon /> },
				{ text: "Card Games", icon: <StyleIcon /> },
				{ text: "Dice Games", icon: <CasinoIcon /> },
				{ text: "Strategy Games", icon: <SportsEsportsIcon /> },
				{ text: "Party Games", icon: <GroupsIcon /> },
			],
		},
		{
			items: [
				{
					text: "Promotions",
					icon: <CardGiftcardIcon />,
					expandable: true,
					open: openPromotions,
					onClick: handlePromotionsClick,
				},
				{ text: "Blog", icon: <ArticleIcon /> },
				{ text: "News", icon: <ArticleIcon /> },
				{ text: "Events", icon: <ScheduleIcon /> },
			],
		},
		{
			items: [
				{
					text: "Sponsorships",
					icon: <BusinessIcon />,
					expandable: true,
					open: openSponsorships,
					onClick: handleSponsorshipsClick,
				},
				{ text: "Responsible Gaming", icon: <SecurityIcon /> },
				{ text: "Live Support", icon: <SupportIcon /> },
				{ text: "Help Center", icon: <SupportIcon /> },
				{ text: "Community", icon: <GroupsIcon /> },
			],
		},
	];

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: isSidebarOpen ? collapsedWidth : drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: isSidebarOpen ? collapsedWidth : drawerWidth,
					boxSizing: "border-box",
					overflowX: "hidden",
					transition: "width 0.3ms ease",
					// hides scrollbar for drawer
					"&::-webkit-scrollbar": {
						display: "none",
					},
					msOverflowStyle: "none", // IE and Edge
					scrollbarWidth: "none", // Firefox
				},
			}}
		>
			<DrawerHeader>
				<IconButton onClick={toggleSidebar}>
					{isSidebarOpen ? <MenuIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</DrawerHeader>

			<Divider
				sx={{
					marginTop: 0.8, // just to be aligned with the nav bar
				}}
			/>
			<ScrollableSideBar component={!isSidebarOpen ? FadeInContent : ""}>
				{menuSections.map((section, sectionIndex) => (
					<React.Fragment key={sectionIndex}>
						<List>
							{/* Section Title */}
							{section.title && !isSidebarOpen && (
								<ListItem sx={{ px: 3, py: 1 }}>
									<Typography
										variant="caption"
										sx={{
											fontWeight: "bold",
											color: "text.secondary",
											textTransform: "uppercase",
											fontSize: "0.75rem",
										}}
									>
										{section.title}
									</Typography>
								</ListItem>
							)}

							{/* Section Items */}
							{section.items.map((item, itemIndex) => (
								<React.Fragment key={item.text}>
									<ListItem disablePadding sx={{ display: "block" }}>
										<Tooltip // Text for Hover icons when sidebar is collapsed
											title={item.text}
											placement="top"
											arrow
											disableHoverListener={!isSidebarOpen}
											leaveDelay={1}
											disableInteractive={true}
										>
											<ListItemButton
												onClick={item.onClick}
												sx={{
													minHeight: 48,
													justifyContent: isSidebarOpen ? "center" : "initial",
													px: 2.5,
													"&:hover": {
														backgroundColor: "action.hover",
													},
												}}
											>
												<ListItemIcon
													sx={{
														minWidth: 0,
														mr: isSidebarOpen ? "auto" : 3,
														justifyContent: "center",
														color: "primary.main",
													}}
												>
													{item.icon}
												</ListItemIcon>
												{!isSidebarOpen && (
													<>
														<ListItemText
															primary={item.text}
															primaryTypographyProps={{
																fontSize: "0.9rem",
																fontWeight: "medium",
															}}
														/>
														{item.expandable &&
															(item.open ? (
																<ExpandLessIcon />
															) : (
																<ExpandMoreIcon />
															))}
													</>
												)}
											</ListItemButton>
										</Tooltip>
									</ListItem>

									{/* Expandable Content */}
									{!isSidebarOpen && item.expandable && (
										<Collapse in={item.open} timeout="auto" unmountOnExit>
											<List component="div" disablePadding>
												<ListItemButton sx={{ pl: 4 }}>
													<ListItemText
														primary="Coming soon"
														primaryTypographyProps={{
															fontSize: "0.8rem",
															fontStyle: "italic",
															color: "text.secondary",
														}}
													/>
												</ListItemButton>
											</List>
										</Collapse>
									)}
								</React.Fragment>
							))}
						</List>

						{/* Divider between sections - made more visible */}
						{sectionIndex < menuSections.length - 1 && (
							<Divider
								sx={{
									my: 0.5,
									borderBottomWidth: 2,
									borderColor: "divider",
								}}
							/>
						)}
					</React.Fragment>
				))}
			</ScrollableSideBar>
		</Drawer>
	);
};

export default Sidebar;
