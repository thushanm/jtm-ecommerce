import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, styled, Grow } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';


const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#282c34',
    boxShadow: 'none',
}));

const Logo = styled('img')({
    width: '150px',
});

const NavButton = styled(Button)(({ theme }) => ({
    fontSize: '1.2rem',
    position: 'relative',
    overflow: 'hidden',
    padding: '10px 20px',
    transition: 'background-color 0.3s ease, border-radius 0.3s ease',
    '&:hover': {
        backgroundColor: '#61dafb',
        borderRadius: '50px',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300%',
        height: '300%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transform: 'translate(-50%, -50%) scale(0)',
        borderRadius: '50%',
        transition: 'transform 0.5s ease',
    },
    '&:hover::before': {
        transform: 'translate(-50%, -50%) scale(1)',
    },
    '& .MuiButton-startIcon': {
        transition: 'transform 0.5s',
    },
    '&:hover .MuiButton-startIcon': {
        transform: 'rotate(360deg)',
    },
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', to: '/', icon: <HomeIcon /> },
        { text: 'Service', subMenu: ['pdf Book', 'Web Developing', 'Software Developing'], icon: <BuildIcon /> },
        { text: 'Projects', to: '/projects', icon: <WorkIcon /> },  // New Projects section
        { text: 'Contact Us', to: '/contactus', icon: <ContactMailIcon /> },
        { text: 'About Us', to: '/aboutus', icon: <InfoIcon /> }
    ];

    return (
        <NavbarContainer position="static">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    <Logo src="public/assets/logo.jpg" alt="Logo" />
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem button component={Link} to={item.to}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text} />
                                            </ListItem>
                                            {item.subMenu && item.subMenu.map((subItem, subIndex) => (
                                                <ListItem button key={subIndex} sx={{ pl: 4 }}>
                                                    <ListItemText primary={subItem} />
                                                </ListItem>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <>
                        {menuItems.map((item, index) => (
                            <NavButton
                                key={index}
                                color="inherit"
                                startIcon={item.icon}
                                component={Link}  // Link added to NavButton
                                to={item.to}       // Navigation path
                                onMouseEnter={item.subMenu ? handleClick : null}
                            >
                                {item.text}
                            </NavButton>
                        ))}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            TransitionComponent={Grow}
                            transitionDuration={300}
                        >
                            <MenuItem onClick={handleClose}>pdf Book</MenuItem>
                            <MenuItem onClick={handleClose}>Web Developing</MenuItem>
                            <MenuItem onClick={handleClose}>Software Developing</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </NavbarContainer>
    );
};

export default Navbar;
