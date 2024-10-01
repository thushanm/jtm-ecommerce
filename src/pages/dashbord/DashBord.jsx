import React from 'react';
import { Container } from '@mui/material';
import { SwipePhoto} from "../../component/dashbord/SwipePhoto.jsx";


export const DashBord = () => {
    return (
        <Container maxWidth="false" sx={{ backgroundColor: '#dfe8e7', height: '10%',width:"100%"  }}>
<SwipePhoto/>

        </Container>
    );
};
