import React, { useState } from "react";
import {
	TextField,
	InputAdornment,
	IconButton,
	Box,
	styled,
	alpha,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import useLayoutStore from "../stores/layoutStore";

const SearchContainer = styled(Box)(({ theme, isSidebarOpen }) => ({
	display: "flex",
	alignItems: "center",
	position: "absolute",
	left: isSidebarOpen ? `calc(72px + 10vw)` : `calc(240px + 5vw)`,
	width: "70vw",
	zIndex: 10,
	transition: theme.transitions.create(["left", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),

	[theme.breakpoints.down("md")]: {
		top: "calc(70px + 35vh)",
		left: theme.spacing(2),
		width: `calc(100% - ${theme.spacing(4)})`,
	},

	[theme.breakpoints.down("sm")]: {
		top: "calc(70px + 30vh)",
		left: theme.spacing(2),
		width: `calc(100% - ${theme.spacing(4)})`,
	},
}));

const SearchInput = styled(TextField)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: 25,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[3],
		"&:hover": {
			boxShadow: theme.shadows[5],
		},
		transition: theme.transitions.create(["box-shadow", "width"], {
			duration: theme.transitions.duration.shorter,
		}),
		"&.Mui-focused": {
			boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`,
		},
	},
	"& .MuiOutlinedInput-input": {
		padding: theme.spacing(1.5, 1, 1.5, 0),
		paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderColor: alpha(theme.palette.primary.main, 0.1),
	},
}));

const SearchBar = () => {
	const { isSidebarOpen } = useLayoutStore();
	const [searchValue, setSearchValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Searching for:", searchValue);
		// Implement your search logic here
	};

	const handleClear = () => {
		setSearchValue("");
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch(e);
		}
	};

	return (
		<SearchContainer
			isSidebarOpen={isSidebarOpen && !isMobile}
			component="form"
			onSubmit={handleSearch}
			sx={{
				top: isMobile
					? "calc(70px + 30vh)"
					: isTablet
						? "calc(70px + 35vh)"
						: "calc(70px + 58.5vh)",
			}}
		>
			<SearchInput
				fullWidth
				variant="outlined"
				placeholder="Search games "
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyPress={handleKeyPress}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<IconButton
								type="submit"
								sx={{
									position: "absolute",
									left: 8,
									color: isFocused ? "primary.main" : "text.secondary",
								}}
								size="small"
							>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
					endAdornment: searchValue && (
						<InputAdornment position="end">
							<IconButton
								onClick={handleClear}
								size="small"
								edge="end"
								sx={{ position: "absolute", right: 8 }}
							>
								<ClearIcon fontSize="small" />
							</IconButton>
						</InputAdornment>
					),
					sx: {
						pl: 4.5,
						pr: searchValue ? 4.5 : 2,
						fontSize: isMobile ? "0.9rem" : "1rem",
					},
				}}
			/>
		</SearchContainer>
	);
};

export default SearchBar;
