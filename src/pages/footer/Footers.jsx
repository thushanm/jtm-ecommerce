import React from 'react';
import { Grid, Container } from '@mui/material';

import FooterPage from "../../footer/FooterPage.jsx";


export const Footers = () => {
    return (
        <Container
            disableGutters // Removes padding for full-width effect
            maxWidth={false}
            sx={{
                backgroundColor: '#ffffff',
                height: '20%',
                width: '100%',
                padding: 0,
                margin: 0,
            }}
        >
            <Grid container sx={{ height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <FooterPage />
            </Grid>
        </Container>
    );
};
