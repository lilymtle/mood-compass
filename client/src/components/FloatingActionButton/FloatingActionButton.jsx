// import styling
import "./FloatingActionButton.scss";

// import hooks
import { useEffect, useState } from "react";

// import components
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BookIcon from '@mui/icons-material/Book';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export function FloatingActionButton() {
    const actions = [
        { icon: <HomeIcon />, name: "Home", to: "/" },
        { icon: <AccountCircleIcon />, name: "Profile", to: "/profile" },
        { icon: <EmojiEmotionsIcon />, name: "Moods", to: "/moods" },
        { icon: <BookIcon/>, name: "Educational Resources", to: "/educational-resources" },
        { icon: <LightbulbIcon />, name: "Coping Strategies", to: "/coping-strategies" }
    ];

    const [showSpeedDial, setSpeedDial] = useState(false);
    const scrollThreshold = 200;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setSpeedDial(true);
        } else {
            setSpeedDial(false);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);
    
    return (
        <Box sx={{ 
            transform: 'translateZ(0px)', 
            flexGrow: 1,
            position: "fixed", 
            bottom: 16, 
            right: 16, 
            zIndex: 1000,
            display: showSpeedDial ? "block" : "none"
        }}>
        <SpeedDial
            ariaLabel="Floating action button with navigation that will render when a user scrolls away from the navigation bar"
            sx={{ 
                transform: "scale(0.8)",
            }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                component={Link}
                to={action.to}
            />
            ))}
        </SpeedDial>
        </Box>
    )
};