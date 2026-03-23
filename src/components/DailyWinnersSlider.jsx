import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    IconButton,
    Stack,
    styled,
    useTheme,
    useMediaQuery,
    Avatar,
    Paper,
} from "@mui/material";
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    EmojiEvents as TrophyIcon,
} from "@mui/icons-material";
import useLayoutStore from "../stores/layoutStore";

// --- Styled Components ---

const WinnerCard = styled(Paper)(({ theme }) => ({
    backgroundColor: "#1a2c38", // Match the dark blue/grey of the UI
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "160px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out, background-color 0.2s ease",
    position: "relative",
    border: "1px solid rgba(255,255,255,0.05)",
    backgroundImage: "none",
    "&:hover": {
        backgroundColor: "#213743",
        transform: "translateY(-4px)",
    },
}));

const CardContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingRight: "15px",
    zIndex: 2,
});

const TopBadge = styled(Box)({
    backgroundColor: "#fff",
    color: "#000",
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "10px",
    fontWeight: "bold",
    textTransform: "uppercase",
    width: "fit-content",
    marginBottom: "12px",
});

const ImageWrapper = styled(Box)({
    width: "100px",
    height: "100px",
    borderRadius: "16px",
    background: "radial-gradient(circle, #3fb5e5 0%, #0b5a8c 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
});

// --- Mock Data ---

const winnersData = [
    { 
        id: 1, 
        name: "Quinnjay22", 
        game: "Connect 4", 
        quote: "If you vs me in Connect 4 you'll lose asap", 
        rank: "1", 
        icon: "🔵" 
    },
    { 
        id: 2, 
        name: "Hidden", 
        game: "Monopoly", 
        quote: "Park Place is mine. Don't even think about landing there.", 
        rank: "2", 
        icon: "🎲" 
    },
    { 
        id: 3, 
        name: "Zenith99", 
        game: "Catan", 
        quote: "Got wood for sheep? Too bad, I'm winning anyway.", 
        rank: "3", 
        icon: "🌾" 
    },
    { 
        id: 4, 
        name: "RiskItAll", 
        game: "Risk", 
        quote: "The world is a board and I'm the only player left.", 
        rank: "4", 
        icon: "🌎" 
    },
    { 
        id: 5, 
        name: "WordSmith", 
        game: "Scrabble", 
        quote: "I put the 'Win' in 'Winning' with a Triple Word score.", 
        rank: "5", 
        icon: "📝" 
    },
    { 
        id: 1, 
        name: "MoneyCollector_TTV", 
        game: "Connect 4", 
        quote: "FREE MONEY ALERT FOR ALL MY LOSERS", 
        rank: "6", 
        icon: "😮‍💨" 
    },
];

const DailyWinnersSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const { isSidebarOpen } = useLayoutStore();

    const [currentPage, setCurrentPage] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    // Adjust visible cards based on screen size
    useEffect(() => {
        if (isMobile) setSlidesPerView(1);
        else if (isTablet) setSlidesPerView(2);
        else setSlidesPerView(3);
    }, [isMobile, isTablet]);

    const totalPages = Math.ceil(winnersData.length / slidesPerView);
    const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    const startIndex = currentPage * slidesPerView;
    const visibleWinners = winnersData.slice(startIndex, startIndex + slidesPerView);

    return (
        <Box sx={{
            // SIDEBAR LOGIC INTEGRATION
            width: isSidebarOpen ? "calc(100% - 265px)" : "calc(100% - 190px)",
            mx: "auto",
            p: 2,
            mt: 6,
            mb: 4,
            marginLeft: isSidebarOpen ? "135px" : "125px",
            transition: "all 0.3ms ease",
            [theme.breakpoints.down("sm")]: { width: "100%", marginLeft: 0 }
        }}>
            
            {/* Header / Navigation */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <TrophyIcon sx={{ color: "white", fontSize: 24 }} />
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "white" }}>
                        Top Winners of the Day
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={0.5}>
                    <IconButton onClick={handlePrev} disabled={currentPage === 0} sx={navButtonStyle}>
                        <ChevronLeftIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleNext} disabled={currentPage === totalPages - 1} sx={navButtonStyle}>
                        <ChevronRightIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Stack>

            {/* Winners Grid */}
            <Box sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${slidesPerView}, 1fr)`,
                gap: 2,
            }}>
                {visibleWinners.map((winner) => (
                    <WinnerCard key={winner.id} elevation={0}>
                        <CardContent>
                            <TopBadge>{winner.rank}</TopBadge>
                            
                            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", mb: 0.2 }}>
                                {winner.name}
                            </Typography>
                            
                            <Typography variant="body2" sx={{ color: "#b1bad3", fontWeight: 500, fontSize: "0.8rem" }}>
                                Game: {winner.game}
                            </Typography>

                            {/* THE QUOTE - PG13 Trash Talk Caption */}
                            <Typography 
                                variant="caption" 
                                sx={{ 
                                    color: "rgba(255,255,255,0.7)", 
                                    mt: 1.5, 
                                    mb: 1.5,
                                    fontStyle: 'italic',
                                    lineHeight: 1.4,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                "{winner.quote}"
                            </Typography>

                            <Typography 
                                variant="caption" 
                                sx={{ 
                                    color: "#fff", 
                                    fontWeight: "bold", 
                                    textTransform: 'none',
                                    '&:hover': { textDecoration: 'underline' } 
                                }}
                            >
                                Read More
                            </Typography>
                        </CardContent>

                        <ImageWrapper>
                            <Typography sx={{ fontSize: '3rem' }}>{winner.icon}</Typography>
                            {/* Profile Avatar Badge */}
                            <Avatar sx={{ 
                                position: 'absolute', 
                                top: -8, 
                                right: -8, 
                                width: 28, 
                                height: 28, 
                                border: '3px solid #1a2c38',
                                bgcolor: '#2f4553',
                                fontSize: '12px'
                            }}>
                                {winner.name[0]}
                            </Avatar>
                        </ImageWrapper>
                    </WinnerCard>
                ))}
            </Box>
        </Box>
    );
};

// --- Styles ---

const navButtonStyle = {
    color: "#b1bad3",
    "&:hover": { color: "white" },
    "&.Mui-disabled": { color: "rgba(255,255,255,0.1)" },
};

export default DailyWinnersSlider;