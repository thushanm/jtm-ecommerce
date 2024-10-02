import React from 'react';
import './App.css';

import {Container} from "@mui/material";

import {WebIndex} from "./WebIndex.jsx";



function App() {
    return (

            <Container  disableGutters // Removes padding for full-width effect
                        maxWidth={false}sx={{
                maxWidth:'false',
                backgroundColor: '#ffffff',
               height: '100%',
                width: '100%',}
            } >

         <WebIndex/>

            </Container>

    );
}

export default App;
