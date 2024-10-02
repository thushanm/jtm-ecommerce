// DashBordButtons.jsx
import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled MUI Button with neon effect
const NeonButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    borderRadius: '10px',
    fontSize: '16px',
    padding: '10px 20px',
    textTransform: 'uppercase',
    boxShadow: '0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc',
    border: '2px solid #00ffcc',
    backgroundColor: '#053480',
    '&:hover': {
        backgroundColor: '#0fd7de',
        boxShadow: '0 0 20px #00ff99, 0 0 40px #00ff99, 0 0 60px #00ff99',
    },
    // Responsive button styling
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '8px 16px',
        boxShadow: '0 0 5px #00ffcc, 0 0 10px #00ffcc',
    },
}));

export const DashBordButtons = ({ buttonText, justifyContent }) => {
    return (
        <Grid
            container
            sx={{
                px: { xs: 2, sm: 4 },
                justifyContent: justifyContent,
                alignItems: 'center', // Center align items
            }}
        >
            <NeonButton>{buttonText}</NeonButton>
        </Grid>
    );
};
