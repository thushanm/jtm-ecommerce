import React from 'react';
import { Container } from '@mui/material';
import { DashBord } from "./pages/dashbord/DashBord.jsx";
import Navbar from "./component/navbar/Navbar.jsx";
import {DashBordButtons} from "./component/dashbord/DashBordButtons.jsx";

export const WebIndex = () => {
    return (
        <Container
            disableGutters // Removes padding for full-width effect
            maxWidth={false}
            sx={{
                backgroundColor: '#dfe8e7',
                height: '100%',
                width: '100%',
                padding: 0,
                margin: 0,
                 // Removes horizontal overflow
            }}
        >
            <Navbar />
            <DashBord />


        </Container>
    );
};
