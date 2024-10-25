import React from 'react';
import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar.jsx';
import { DashBord } from './pages/dashbord/DashBord.jsx';
import { Projects } from "./pages/project/Projects.jsx";
import { DashBordServicees } from "./pages/services/DashBordServicees.jsx";
import {ContactMain} from "./pages/contactMain/ContactMain.jsx";
import {AboutBar} from "./pages/about/AboutBar.jsx";


export const WebIndex = () => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                backgroundColor: '#dfe8e7',
                height: '100%',
                width: '100%',
                padding: 0,
                margin: 0,
            }}
        >
            <Navbar />

            {/* Add spacing between components */}
            <Box sx={{ marginBottom: 5 }}>
                <DashBord />
            </Box>

            <Box sx={{ marginBottom: 10 }}>
                <DashBordServicees />
            </Box>

            <Box sx={{ marginBottom: 10 }}>
                <Projects />
            </Box>
            <Box  sx={{

                marginBottom: 10,
            }}>
                <ContactMain />
            </Box>
            <Box  sx={{

                marginBottom: 10,
            }}>
               <AboutBar/>
            </Box>
        </Container>
    );
};
