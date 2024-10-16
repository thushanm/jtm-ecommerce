import React from 'react';
import {Container, Grid} from "@mui/material";
import ProductGrid from "../../component/projects/ProductGrid.jsx";

export const Projects = () => {
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
            <Grid container sx={{ height: '100%', position: 'relative' }}>
               <ProductGrid/>
            </Grid>
        </Container>
    );
};

