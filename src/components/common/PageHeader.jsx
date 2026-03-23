import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import useLayoutStore from "../../stores/layoutStore";

export const PageHeader = ({
	text = "The world's favorite board games gambling site",
	variant = "h3",
	align = "left",
	maxWidth = "600px",
	textShadow = true,
	sx = {},
}) => {
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
				height: { xs: "30vh", sm: "35vh", md: "20vh" },
				minHeight: "100px",
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
				...sx,
			}}
		>
			<Box // overlay for text only
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
					justifyContent: align === "center" ? "center" : "flex-start",
				}}
			>
				<Box // text container
					sx={{
						textAlign: align,
						color: "white",
						maxWidth: maxWidth,
						width: { xs: "90%", md: "35%" },
						px: 5,
						py: 3,
						marginLeft: align === "left" ? 12 : 0,
						marginRight: align === "right" ? 12 : 0,
						flexShrink: 0,
					}}
				>
					<Typography
						variant={isMobile ? "h5" : variant}
						fontWeight="bold"
						gutterBottom
						sx={{
							textShadow: textShadow ? "2px 2px 4px rgba(0,0,0,0.5)" : "none",
							mb: 0, // Remove bottom margin since we only have text
							fontSize: {
								xs: "1.225rem",
								sm: "1.475rem",
								md: variant === "h4" ? "1.8rem" : undefined,
							},
						}}
					>
						{text}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default PageHeader;
