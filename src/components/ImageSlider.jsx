import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Typography,
    IconButton,
    Stack,
    styled,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import useLayoutStore from "../stores/layoutStore";

// --- Styled Components (Shared logic from GamesDisplay) ---
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
    zIndex: 2,
});

// Mock data generator matching the Grid data structure
const generateGameData = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `TRENDING ${i + 1}`,
        provider: "HACKSAW GAMING",
        players: Math.floor(Math.random() * 500) + 50,
        image: `https://picsum.photos/seed/slide${i}/200/300`,
    }));
};

const ImageSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const { isSidebarOpen } = useLayoutStore();

    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(7);

    useEffect(() => {
        setGames(generateGameData(21)); // 3 pages of 7
    }, []);

    useEffect(() => {
        if (isMobile) setSlidesPerView(2);
        else if (isTablet) setSlidesPerView(4);
        else setSlidesPerView(7);
    }, [isMobile, isTablet]);

    const totalPages = Math.ceil(games.length / slidesPerView);
    const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    const startIndex = currentPage * slidesPerView;
    const visibleGames = games.slice(startIndex, startIndex + slidesPerView);

    return (
        <Box sx={{
            width: isSidebarOpen ? "calc(100% - 305px)" : "calc(100% - 230px)",
            mx: "auto",
            p: 2,
            backgroundColor: "#0f212e",
            borderRadius: 2,
            mt: 6,
            mb: 4,
            marginLeft: isSidebarOpen ? "155px" : "145px",
            transition: "margin-left 0.3ms ease",
            [theme.breakpoints.down("sm")]: { width: "100%", marginLeft: 0 }
        }}>
            
            {/* Slider Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ bgcolor: '#2f4553', borderRadius: '50%', p: 0.5, display: 'flex' }}>
                        <TrendingUpIcon sx={{ color: "#b1bad3", fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "white" }}>
                        Trending Games
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={0.5}>
                    <IconButton onClick={handlePrev} disabled={currentPage === 0} sx={navButtonStyle}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton onClick={handleNext} disabled={currentPage === totalPages - 1} sx={navButtonStyle}>
                        <ChevronRightIcon />
                    </IconButton>
                </Stack>
            </Stack>

            {/* Slider Row */}
            <Box sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${slidesPerView}, 1fr)`,
                gap: 2,
                overflow: "hidden",
            }}>
                {visibleGames.map((game) => (
                    <CardContainer key={game.id}>
                        <ImageWrapper>
                            <GameImage src={game.image} alt={game.title} />
                            <Badge>B</Badge>
                            <GameInfoOverlay>
                                <Typography variant="subtitle1" sx={titleStyle}>
                                    {game.title}
                                </Typography>
                                <Typography variant="caption" sx={providerStyle}>
                                    {game.provider}
                                </Typography>
                            </GameInfoOverlay>
                        </ImageWrapper>

                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ px: 0.5 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#00e701" }} />
                            <Typography variant="caption" sx={{ color: "#b1bad3", fontWeight: 500 }}>
                                {game.players} playing
                            </Typography>
                        </Stack>
                    </CardContainer>
                ))}
            </Box>
        </Box>
    );
};

// --- Local Styles for Cleaner JSX ---
const navButtonStyle = {
    backgroundColor: "#2f4553",
    color: "white",
    borderRadius: 1,
    width: 36,
    height: 36,
    "&:hover": { backgroundColor: "#3d5565" },
    "&.Mui-disabled": { backgroundColor: "#1a2c38", color: "rgba(255,255,255,0.3)" },
};

const titleStyle = {
    color: "#fff",
    fontWeight: 900,
    lineHeight: 1.1,
    textTransform: "uppercase",
    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
    fontSize: { xs: '0.7rem', md: '0.85rem' }
};

const providerStyle = {
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.6rem",
    fontWeight: 600,
    mt: 0.5,
};

export default ImageSlider;