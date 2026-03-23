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
import useLayoutStore from "../../stores/layoutStore";

const SearchContainer = styled(Box)(({ theme, isSidebarOpen, position }) => ({
	display: "flex",
	alignItems: "center",
	marginLeft: position?.marginLeft || (isSidebarOpen ? "85px" : "125px"),
	marginTop: position?.marginTop || 50,
	width: position?.width || (isSidebarOpen ? "72.5vw" : "67vw"),
	zIndex: position?.zIndex || 10,
	transition: "margin-left 0.3ms linear",

	[theme.breakpoints.down("md")]: {
		top: position?.mobile?.top || "calc(70px + 35vh)",
		left: position?.mobile?.left || theme.spacing(2),
		width: position?.mobile?.width || `calc(100% - ${theme.spacing(4)})`,
		marginLeft: position?.mobile?.marginLeft || 0,
		marginTop: position?.mobile?.marginTop || 0,
	},

	[theme.breakpoints.down("sm")]: {
		top: position?.mobile?.top || "calc(70px + 30vh)",
		left: position?.mobile?.left || theme.spacing(2),
		width: position?.mobile?.width || `calc(100% - ${theme.spacing(4)})`,
		marginLeft: position?.mobile?.marginLeft || 0,
		marginTop: position?.mobile?.marginTop || 0,
	},
}));

const SearchInput = styled(TextField)(({ theme, customStyles }) => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: customStyles?.borderRadius || 25,
		backgroundColor:
			customStyles?.backgroundColor || theme.palette.background.paper,
		boxShadow: customStyles?.boxShadow || theme.shadows[3],
		"&:hover": {
			boxShadow: customStyles?.hoverBoxShadow || theme.shadows[5],
		},
		transition: theme.transitions.create(["box-shadow", "width"], {
			duration: theme.transitions.duration.shorter,
		}),
		"&.Mui-focused": {
			boxShadow:
				customStyles?.focusedBoxShadow ||
				`0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`,
		},
	},
	"& .MuiOutlinedInput-input": {
		padding: customStyles?.inputPadding || theme.spacing(1.5, 1, 1.5, 0),
		paddingLeft:
			customStyles?.inputPaddingLeft || `calc(1em + ${theme.spacing(0.5)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderColor:
			customStyles?.borderColor || alpha(theme.palette.primary.main, 0.1),
	},
}));

const SearchBar = ({
	placeholder = "Search games",
	onSearch,
	onClear,
	initialValue = "",
	position = {},
	customStyles = {},
	showSidebarOffset = true,
	autoFocus = false,
	size = "medium",
	variant = "outlined",
	disabled = false,
	fullWidth = true,
	ariaLabel = "search",
}) => {
	const { isSidebarOpen } = useLayoutStore();
	const [searchValue, setSearchValue] = useState(initialValue);
	const [isFocused, setIsFocused] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));

	const handleSearch = (e) => {
		e?.preventDefault();
		if (onSearch) {
			onSearch(searchValue, e);
		} else {
			console.log("Searching for:", searchValue);
		}
	};

	const handleClear = () => {
		setSearchValue("");
		if (onClear) {
			onClear();
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch(e);
		}
	};

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<SearchContainer
			isSidebarOpen={showSidebarOffset ? isSidebarOpen && !isMobile : false}
			position={position}
			component="form"
			onSubmit={handleSearch}
			sx={{
				top:
					position?.top ||
					(isMobile ? "calc(70px + 30vh)" : "calc(70px + .5vh)"),
			}}
		>
			<SearchInput
				fullWidth={fullWidth}
				variant={variant}
				placeholder={placeholder}
				value={searchValue}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				disabled={disabled}
				autoFocus={autoFocus}
				size={size}
				customStyles={customStyles}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<IconButton
								type="submit"
								sx={{
									position: "absolute",
									left: 8,
									color:
										customStyles?.iconColor ||
										(isFocused ? "primary.main" : "text.secondary"),
								}}
								size="small"
								disabled={disabled}
								aria-label={`${ariaLabel}-submit`}
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
								sx={{
									position: "absolute",
									right: 8,
									color: customStyles?.clearIconColor || "text.secondary",
								}}
								disabled={disabled}
								aria-label={`${ariaLabel}-clear`}
							>
								<ClearIcon fontSize="small" />
							</IconButton>
						</InputAdornment>
					),
					sx: {
						pl: 4.5,
						pr: searchValue ? 4.5 : 2,
						fontSize: customStyles?.fontSize || (isMobile ? "0.9rem" : "1rem"),
						...customStyles?.inputPropsSx,
					},
				}}
			/>
		</SearchContainer>
	);
};

export default SearchBar;
