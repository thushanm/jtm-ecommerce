import React from 'react';
import { Container, Box } from '@mui/material';
import {DashBord} from "./pages/dashbord/DashBord.jsx";
import Navbar from "./component/navbar/Navbar.jsx";


export const WebIndex = () => {
    return (
        <Container maxWidth="false" sx={{ backgroundColor: '#dfe8e7', height: '100%', width:'100%' }}>
            <Navbar/>
  <DashBord/>

        </Container>
    );
};