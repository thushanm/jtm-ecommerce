import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar.jsx';
import { DashBord } from './pages/dashbord/DashBord.jsx';
import {Projects} from "./pages/project/Projects.jsx";
import {DashBordServicees} from "./pages/services/DashBordServicees.jsx";


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


               <DashBord />
            <DashBordServicees/>
       <Projects/>

        </Container>
    );
};
