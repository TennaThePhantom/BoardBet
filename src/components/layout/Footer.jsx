// components/layout/Footer.jsx
import React from "react";
import {
	Box,
	Container,
	Grid,
	Typography,
	Link,
	IconButton,
	Stack,
	Divider,
	useTheme,
	useMediaQuery,
	Chip,
} from "@mui/material";
import {
	// TODO: Replace with actual social media icons
	// import FacebookIcon from '@mui/icons-material/Facebook';
	// import TwitterIcon from '@mui/icons-material/Twitter';
	// import InstagramIcon from '@mui/icons-material/Instagram';
	// import YouTubeIcon from '@mui/icons-material/YouTube';
	// import TelegramIcon from '@mui/icons-material/Telegram';
	// import RedditIcon from '@mui/icons-material/Reddit';
	// import DiscordIcon from '@mui/icons-material/Discord';

	// Placeholder icons for now
	Casino as CasinoIcon,
	SportsEsports as SportsEsportsIcon,
	Extension as ExtensionIcon,
	Style as StyleIcon,
	CardGiftcard as CardGiftcardIcon,
	Security as SecurityIcon,
	Help as HelpIcon,
	Language as LanguageIcon,
	VerifiedUser as VerifiedUserIcon,
	Public as PublicIcon, // Placeholder for Facebook
	Chat as ChatIcon, // Placeholder for Twitter
	PhotoCamera as PhotoCameraIcon, // Placeholder for Instagram
	Videocam as VideocamIcon, // Placeholder for YouTube
	Send as SendIcon, // Placeholder for Telegram
	Forum as ForumIcon, // Placeholder for Reddit
	Groups as GroupsIcon, // Placeholder for Discord
} from "@mui/icons-material";
import useLayoutStore from "../../stores/layoutStore";

const Footer = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { isSidebarOpen } = useLayoutStore();

	// Helper function for alpha colors
	const alpha = (color, opacity) => {
		// Simplified alpha color - you might want to use theme.palette.augmentColor
		return (
			color +
			Math.round(opacity * 255)
				.toString(16)
				.padStart(2, "0")
		);
	};

	const gameCategories = [
		{ name: "Slot Games", icon: <CasinoIcon fontSize="small" /> },
		{ name: "Live Casino", icon: <SportsEsportsIcon fontSize="small" /> },
		{ name: "Table Games", icon: <ExtensionIcon fontSize="small" /> },
		{ name: "Card Games", icon: <StyleIcon fontSize="small" /> },
		{ name: "Dice Games", icon: <CasinoIcon fontSize="small" /> },
		{ name: "Strategy Games", icon: <SportsEsportsIcon fontSize="small" /> },
	];

	const companyLinks = [
		{ name: "About Us", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "News", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Affiliate Program", href: "#" },
		{ name: "Press Kit", href: "#" },
	];

	const supportLinks = [
		{ name: "Help Center", href: "#" },
		{ name: "Community", href: "#" },
		{ name: "Live Support", href: "#" },
		{ name: "FAQ", href: "#" },
		{ name: "Contact Us", href: "#" },
		{ name: "Report Issue", href: "#" },
	];

	const legalLinks = [
		{ name: "Terms of Service", href: "#" },
		{ name: "Privacy Policy", href: "#" },
		{ name: "Cookie Policy", href: "#" },
		{ name: "Responsible Gaming", href: "#" },
		{ name: "AML Policy", href: "#" },
		{ name: "License", href: "#" },
	];

	// TODO: Replace placeholder icons with actual social media icons
	const socialLinks = [
		{
			icon: <PublicIcon />, // Placeholder - replace with FacebookIcon
			name: "Facebook",
			href: "#",
		},
		{
			icon: <ChatIcon />, // Placeholder - replace with TwitterIcon
			name: "Twitter",
			href: "#",
		},
		{
			icon: <PhotoCameraIcon />, // Placeholder - replace with InstagramIcon
			name: "Instagram",
			href: "#",
		},
		{
			icon: <VideocamIcon />, // Placeholder - replace with YouTubeIcon
			name: "YouTube",
			href: "#",
		},
		{
			icon: <SendIcon />, // Placeholder - replace with TelegramIcon
			name: "Telegram",
			href: "#",
		},
		{
			icon: <ForumIcon />, // Placeholder - replace with RedditIcon
			name: "Reddit",
			href: "#",
		},
		{
			icon: <GroupsIcon />, // Placeholder - replace with DiscordIcon
			name: "Discord",
			href: "#",
		},
	];

	const paymentMethods = [
		"Visa",
		"Mastercard",
		"Bitcoin",
		"Ethereum",
		"Litecoin",
		"Bank Transfer",
		"Skrill",
		"Neteller",
		"PayPal",
		"Apple Pay",
		"Google Pay",
		"Crypto",
	];

	const trustedBadges = [
		{ name: "SSL Secured", icon: <SecurityIcon /> },
		{ name: "Provably Fair", icon: <VerifiedUserIcon /> },
		{ name: "24/7 Support", icon: <HelpIcon /> },
		{ name: "Licensed", icon: <LanguageIcon /> },
	];

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: theme.palette.background.paper,
				borderTop: `1px solid ${theme.palette.divider}`,
				mt: "auto",
				width: isSidebarOpen ? "calc(100% - 72px)" : "calc(100% - 240px)",
				marginLeft: isSidebarOpen ? "72px" : "240px",
				transition: "all 0.3ms linear",
				[theme.breakpoints.down("sm")]: {
					width: "100%",
					marginLeft: 0,
				},
			}}
		>
			{/* Main Footer Content */}
			<Container maxWidth="xl" sx={{ py: 6 }}>
				<Grid container spacing={4}>
					{/* Company Brand */}
					<Grid item xs={12} md={3}>
						<Box sx={{ mb: 3 }}>
							<Typography
								variant="h4"
								sx={{
									fontWeight: "bold",
									background: "linear-gradient(45deg, #1976d2, #4dabf5)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									mb: 1,
								}}
							>
								BoardBet.com
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
								The world's premier board game gambling platform. Play your
								favorite classic and modern board games with real stakes.
							</Typography>

							{/* Social Media */}
							<Stack direction="row" spacing={1} flexWrap="wrap">
								{socialLinks.map((social) => (
									<IconButton
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											backgroundColor: alpha(theme.palette.primary.main, 0.1),
											color: "primary.main",
											"&:hover": {
												backgroundColor: "primary.main",
												color: "white",
											},
										}}
										title={social.name}
									>
										{social.icon}
									</IconButton>
								))}
							</Stack>

							{/* TODO Note */}
							<Typography
								variant="caption"
								color="text.secondary"
								sx={{ mt: 2, display: "block", fontStyle: "italic" }}
							>
								Note: Social media icons are placeholders. Install
								@mui/icons-material and import actual social icons.
							</Typography>
						</Box>
					</Grid>

					{/* Game Categories */}
					<Grid item xs={6} sm={3}>
						<Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
							Games
						</Typography>
						<Stack spacing={1}>
							{gameCategories.map((category) => (
								<Link
									key={category.name}
									href="#"
									sx={{
										display: "flex",
										alignItems: "center",
										color: "text.secondary",
										textDecoration: "none",
										"&:hover": {
											color: "primary.main",
											"& .MuiSvgIcon-root": {
												color: "primary.main",
											},
										},
									}}
								>
									<Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
										{category.icon}
									</Box>
									<Typography variant="body2">{category.name}</Typography>
								</Link>
							))}
						</Stack>
					</Grid>

					{/* Company */}
					<Grid item xs={6} sm={3}>
						<Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
							Company
						</Typography>
						<Stack spacing={1}>
							{companyLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									sx={{
										display: "flex",
										alignItems: "center",
										color: "text.secondary",
										textDecoration: "none",
										"&:hover": {
											color: "primary.main",
										},
									}}
								>
									<Typography variant="body2">{link.name}</Typography>
								</Link>
							))}
						</Stack>
					</Grid>

					{/* Support */}
					<Grid item xs={6} sm={3}>
						<Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
							Support
						</Typography>
						<Stack spacing={1}>
							{supportLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									sx={{
										display: "flex",
										alignItems: "center",
										color: "text.secondary",
										textDecoration: "none",
										"&:hover": {
											color: "primary.main",
										},
									}}
								>
									<Typography variant="body2">{link.name}</Typography>
								</Link>
							))}
						</Stack>
					</Grid>
				</Grid>

				{/* Divider */}
				<Divider sx={{ my: 4 }} />

				{/* Trust Badges */}
				<Box sx={{ mb: 4 }}>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						sx={{ mb: 2, textAlign: "center" }}
					>
						TRUSTED & SECURE
					</Typography>
					<Stack
						direction={isMobile ? "column" : "row"}
						spacing={isMobile ? 2 : 4}
						justifyContent="center"
						alignItems="center"
					>
						{trustedBadges.map((badge) => (
							<Box
								key={badge.name}
								sx={{
									display: "flex",
									alignItems: "center",
									color: "success.main",
									p: 2,
									borderRadius: 2,
									backgroundColor: alpha(theme.palette.success.main, 0.05),
								}}
							>
								<Box sx={{ mr: 1 }}>{badge.icon}</Box>
								<Typography variant="body2" fontWeight="medium">
									{badge.name}
								</Typography>
							</Box>
						))}
					</Stack>
				</Box>

				{/* Payment Methods */}
				<Box sx={{ mb: 4 }}>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						sx={{ mb: 2, textAlign: "center" }}
					>
						ACCEPTED PAYMENT METHODS
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: 2,
						}}
					>
						{paymentMethods.map((method) => (
							<Chip
								key={method}
								label={method}
								size="small"
								sx={{
									backgroundColor: alpha(theme.palette.primary.main, 0.05),
									color: "text.secondary",
									"&:hover": {
										backgroundColor: alpha(theme.palette.primary.main, 0.1),
									},
								}}
							/>
						))}
					</Box>
				</Box>

				{/* Legal Links */}
				<Box sx={{ mb: 4 }}>
					<Stack
						direction={isMobile ? "column" : "row"}
						spacing={isMobile ? 1 : 3}
						justifyContent="center"
						alignItems="center"
						flexWrap="wrap"
					>
						{legalLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								sx={{
									color: "text.secondary",
									textDecoration: "none",
									fontSize: "0.875rem",
									"&:hover": {
										color: "primary.main",
										textDecoration: "underline",
									},
								}}
							>
								{link.name}
							</Link>
						))}
					</Stack>
				</Box>

				{/* Copyright */}
				<Box
					sx={{
						textAlign: "center",
						color: "text.secondary",
						pt: 2,
						borderTop: `1px solid ${theme.palette.divider}`,
					}}
				>
					<Typography variant="body2" sx={{ mb: 1 }}>
						© {new Date().getFullYear()} BoardBet.com. All rights reserved.
					</Typography>
					<Typography variant="caption" color="text.secondary">
						BoardBet.com is operated by BoardBet Gaming Ltd. Licensed and
						regulated by the Gaming Authority. Gambling can be addictive. Play
						responsibly. 18+ only.
					</Typography>
					<Typography
						variant="caption"
						color="text.secondary"
						sx={{ display: "block", mt: 1 }}
					>
						Version 1.0.0
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
