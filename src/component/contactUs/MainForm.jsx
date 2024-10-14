import React from 'react';
import { TextField, Button, Container, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
    backgroundColor: '#c8e7d8',
    color: '#4e5e72',
    textAlign: 'center',
    fontFamily: 'monospace',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
});

const StyledButton = styled(Button)({
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    backgroundColor: 'rgba(78, 94, 114, 0.9)',
    color: 'white',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
    '&:hover': {
        backgroundColor: 'rgba(78, 94, 114, 1)',
    },
});

export const MainForm = () => {
    return (
        <StyledContainer maxWidth="sm">
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: "'Dancing Script', cursive", fontSize: '2rem' }}
            >
                Contact Us
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'inset 0 0.75rem 2rem rgba(229, 225, 187, 0.5)',
                }}
            >
                <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
                        '&:focus': {
                            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>")`,
                        },
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    sx={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
                        '&:focus': {
                            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>")`,
                        },
                    }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
                        '&:focus': {
                            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>")`,
                        },
                    }}
                />
                <StyledButton variant="contained" color="primary" type="submit">
                    Submit
                </StyledButton>
            </Box>
            <Box mt={4} display="flex" justifyContent="center">
                <IconButton href="https://facebook.com" target="_blank" color="primary">
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" color="primary">
                    <Twitter />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" color="primary">
                    <LinkedIn />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" color="primary">
                    <Instagram />
                </IconButton>
            </Box>
        </StyledContainer>
    );
};


