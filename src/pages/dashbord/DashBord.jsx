import React from 'react';
import { Grid, Container } from '@mui/material';
import { SwipePhoto } from "../../component/dashbord/SwipePhoto.jsx";

export const DashBord = () => {
    return (
        <Container
            disableGutters // Removes padding for full-width effect
            maxWidth={false}
            sx={{
                backgroundColor: '#ffffff',
                height: '100%',
                width: '100%',
                padding: 0,
                margin: 0,
            }}
        >
            <Grid container sx={{ height: '100%', position: 'relative' }}>
                <SwipePhoto />
            </Grid>
        </Container>
    );
};
