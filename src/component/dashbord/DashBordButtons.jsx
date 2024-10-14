import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled MUI Button with CSS gradients, blur, and hover animations
const GradientButton = styled(Button)(({ theme }) => ({
    position: "relative",
    width: "250px", // Set the width from your CSS
    height: "80px", // Set the height from your CSS
    margin: "10px", // Margin as in your CSS
    fontSize: "1em",
    fontWeight: "600",
    borderRadius: "20px", // Match the slightly rounded shape from your updated CSS
    textTransform: "uppercase",
    letterSpacing: "2px",
    padding: "1em 2em",
    color: "white",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 500ms ease",

    background: "black", // No default background (background is handled by the ::after pseudo-element)
    zIndex: 1, // Ensure text stays on top

    // Adding the gradient background mask and hover effects
    "&::after": {
        content: '""',
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        zIndex: -1,
        background: "linear-gradient(90deg, #1CB5E0, #000851, #00C9FF, #92FE9D, #FC466B, #3F5EFB, #3F2B96, #A8C0FF, #FDBB2D, #3A1C71)",
        transform: "scaleX(1.1) scaleY(1.2)", // Slightly scale the gradient
        filter: "blur(10px)", // Blur effect like your CSS
        backgroundSize: "500%", // Controls how fast the gradient moves
        animation: "flowing 10s ease infinite", // Continuous animation
        opacity: 0, // Initially hidden
        transition: "opacity 0.5s ease", // Smooth opacity transition on hover
    },

    "&:hover::after": {
        opacity: 2, // Show gradient on hover
    },

    "&:active": {
        background: "none", // Remove the background when the button is clicked
    },

    // Keyframe for the gradient animation
    "@keyframes flowing": {
        "0%": {
            backgroundPosition: "0 0",
        },
        "50%": {
            backgroundPosition: "400% 0", // Animate background across the button
        },
        "100%": {
            backgroundPosition: "0 0",
        },
    },
}));

// Component to render buttons with gradient effects and animations
export const DashBordButtons = ({ buttonText, justifyContent, className, onMouseEnter, onMouseLeave }) => {
    return (
        <Grid
            container
            sx={{
                px: { xs: 2, sm: 4 },
                justifyContent: justifyContent,
                alignItems: "center",
            }}
        >
            <GradientButton
                className={className} // Class name to control different gradient effects
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {buttonText}
            </GradientButton>
        </Grid>
    );
};
