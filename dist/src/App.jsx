import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from "@mui/material";
import { WebIndex } from './WebIndex.jsx';

function App() {
    return (

            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    backgroundColor: '#ffffff',
                    height: '100%',
                    width: '100%',
                }}
            >
                <WebIndex />
            </Container>

    );
}

export default App;
