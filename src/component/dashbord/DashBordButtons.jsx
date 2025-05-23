import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled MUI Button with CSS gradients, blur, and hover animations
const GradientButton = styled(Button)(({ theme }) => ({
    position: "relative",
    width: "250px",
    height: "80px",
    margin: "10px",
    fontSize: "1em",
    fontWeight: "600",
    borderRadius: "20px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    padding: "1em 2em",
    color: "white",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 500ms ease",

    background: "black",
    zIndex: 1,


    "&::after": {
        content: '""',
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        zIndex: -1,
        background: "linear-gradient(90deg, #1CB5E0, #000851, #00C9FF, #92FE9D, #FC466B, #3F5EFB, #3F2B96, #A8C0FF, #FDBB2D, #3A1C71)",
        transform: "scaleX(1.1) scaleY(1.2)",
        filter: "blur(10px)",
        backgroundSize: "500%",
        animation: "flowing 10s ease infinite",
        opacity: 0,
        transition: "opacity 0.5s ease",
    },

    "&:hover::after": {
        opacity: 2,
    },

    "&:active": {
        background: "none",
    },

    // Keyframe for the gradient animation
    "@keyframes flowing": {
        "0%": {
            backgroundPosition: "0 0",
        },
        "50%": {
            backgroundPosition: "400% 0",
        },
        "100%": {
            backgroundPosition: "0 0",
        },
    },
}));


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
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {buttonText}
            </GradientButton>
        </Grid>
    );
};
