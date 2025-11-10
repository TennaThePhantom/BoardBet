import { createTheme } from "@mui/material/styles";

// DaisyUI theme colors
const dimColors = {
	// Primary colors
	primary: "#5eead4", // teal-300
	primaryContent: "#134e4a", // teal-900 (foreground on primary)

	// Secondary colors
	secondary: "#f472b6", // pink-400
	secondaryContent: "#831843", // pink-900 (foreground on secondary)

	// Accent colors
	accent: "#a78bfa", // violet-400
	accentContent: "#581c87", // violet-900 (foreground on accent)

	// Neutral colors
	neutral: "#2a323c", // gray-800
	neutralContent: "#d1d5db", // gray-300 (foreground on neutral)

	// Base colors
	base100: "#1f2937", // gray-900
	base200: "#374151", // gray-700
	base300: "#4b5563", // gray-600
	baseContent: "#f9fafb", // gray-50 (foreground on base)

	// Status colors
	info: "#38bdf8", // sky-400
	infoContent: "#0c4a6e", // sky-900 (foreground on info)
	success: "#4ade80", // green-400
	successContent: "#14532d", // green-900 (foreground on success)
	warning: "#fbbf24", // amber-400
	warningContent: "#78350f", // amber-900 (foreground on warning)
	error: "#fb7185", // rose-400
	errorContent: "#881337", // rose-900 (foreground on error)
};
const dimTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: dimColors.primary,
			contrastText: dimColors.primaryContent,
		},
		secondary: {
			main: dimColors.secondary,
			contrastText: dimColors.secondaryContent,
		},
		error: {
			main: dimColors.error,
			contrastText: dimColors.errorContent,
		},
		warning: {
			main: dimColors.warning,
			contrastText: dimColors.warningContent,
		},
		info: {
			main: dimColors.info,
			contrastText: dimColors.infoContent,
		},
		success: {
			main: dimColors.success,
			contrastText: dimColors.successContent,
		},
		background: {
			default: dimColors.base100,
			paper: dimColors.base200,
		},
		text: {
			primary: dimColors.baseContent,
			secondary: dimColors.neutralContent,
		},
		divider: dimColors.base300,
		action: {
			active: dimColors.neutralContent,
			hover: dimColors.base300,
			selected: dimColors.base300,
			disabled: dimColors.base300,
			disabledBackground: dimColors.base300,
		},
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			color: dimColors.baseContent,
		},
		h2: {
			color: dimColors.baseContent,
		},
		h3: {
			color: dimColors.baseContent,
		},
		h4: {
			color: dimColors.baseContent,
		},
		h5: {
			color: dimColors.baseContent,
		},
		h6: {
			color: dimColors.baseContent,
		},
		body1: {
			color: dimColors.baseContent,
		},
		body2: {
			color: dimColors.neutralContent,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: dimColors.base200,
					color: dimColors.baseContent,
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: dimColors.base200,
					color: dimColors.baseContent,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: dimColors.base200,
					backgroundImage: "none",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: dimColors.base200,
					backgroundImage: "none",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					fontWeight: 600,
				},
				containedPrimary: {
					"&:hover": {
						backgroundColor: "#4fd1c5", // Slightly darker teal
					},
				},
				containedSecondary: {
					"&:hover": {
						backgroundColor: "#db2777", // Slightly darker pink
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					fontWeight: 500,
				},
				colorPrimary: {
					backgroundColor: dimColors.primary,
					color: dimColors.primaryContent,
				},
				colorSecondary: {
					backgroundColor: dimColors.secondary,
					color: dimColors.secondaryContent,
				},
				colorSuccess: {
					backgroundColor: dimColors.success,
					color: dimColors.successContent,
				},
				colorWarning: {
					backgroundColor: dimColors.warning,
					color: dimColors.warningContent,
				},
				colorError: {
					backgroundColor: dimColors.error,
					color: dimColors.errorContent,
				},
				colorInfo: {
					backgroundColor: dimColors.info,
					color: dimColors.infoContent,
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
				standardSuccess: {
					backgroundColor: dimColors.success,
					color: dimColors.successContent,
					"& .MuiAlert-icon": {
						color: dimColors.successContent,
					},
				},
				standardInfo: {
					backgroundColor: dimColors.info,
					color: dimColors.infoContent,
					"& .MuiAlert-icon": {
						color: dimColors.infoContent,
					},
				},
				standardWarning: {
					backgroundColor: dimColors.warning,
					color: dimColors.warningContent,
					"& .MuiAlert-icon": {
						color: dimColors.warningContent,
					},
				},
				standardError: {
					backgroundColor: dimColors.error,
					color: dimColors.errorContent,
					"& .MuiAlert-icon": {
						color: dimColors.errorContent,
					},
				},
			},
		},
	},
});

export default dimTheme;
