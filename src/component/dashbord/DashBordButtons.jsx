import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled MUI Button with animated gradient effect
const NeonButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    color: '#0a0a0a',
    fontWeight: 'bold',
    borderRadius: '30px',
    fontSize: '24px',
    padding: '10px 20px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
    width: '200px',
    height: '60px',
    lineHeight: '60px',
    textAlign: 'center',
    background: 'white',
    backgroundSize: '400%',
    zIndex: 1,
    transition: 'all 0.5s ease',
    overflow: 'hidden',
    '&:hover': {
        animation: 'animate 8s linear infinite',
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        right: '-5px',
        bottom: '-5px',
        zIndex: -1,
        background: 'linear-gradient(45deg, #f15523, #ef3224, #7c3697)',
        backgroundSize: '400%',
        borderRadius: '40px',
        opacity: 0,
        transition: '0.5s',
    },
    '&:hover:before': {
        filter: 'blur(20px)',
        opacity: 1,
        animation: 'animate 8s linear infinite',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '8px 16px',
        boxShadow: '0 0 5px #00ffcc, 0 0 10px #00ffcc',
    },
}));

export const DashBordButtons = ({ buttonText, justifyContent, onMouseEnter, onMouseLeave }) => {
    return (
        <Grid
            container
            sx={{
                px: { xs: 2, sm: 4 },
                justifyContent: justifyContent,
                alignItems: 'center',
            }}
        >
            <NeonButton
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {buttonText}
            </NeonButton>
        </Grid>
    );
};
