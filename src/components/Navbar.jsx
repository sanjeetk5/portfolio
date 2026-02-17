import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ toggleTheme, currentMode }) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', background: theme.palette.background.default }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                SK
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={handleDrawerToggle}
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary,
                                    width: '100%',
                                    display: 'block',
                                    padding: '10px 0',
                                    cursor: 'pointer'
                                }}
                            >
                                {item.name}
                            </Link>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                background: scrolled ? 'rgba(10, 25, 41, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease',
                backgroundImage: 'none' // Remove default overlay for cleaner dark mode
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 700, letterSpacing: 1 }}
                    >
                        <span style={{ color: theme.palette.primary.main }}>&lt;</span>
                        SK
                        <span style={{ color: theme.palette.secondary.main }}>/&gt;</span>
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                component={Link}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    '&:hover': { color: theme.palette.primary.main, background: 'transparent' }
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}

                        <Tooltip title={`Switch to ${currentMode === 'cyberpunk' ? 'coding' : 'Cyberpunk'} Mode`}>
                            <IconButton
                                onClick={toggleTheme}
                                color="inherit"
                                sx={{
                                    border: `1px solid ${theme.palette.divider}`,
                                    ml: 2,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main
                                    }
                                }}
                            >
                                {currentMode === 'cyberpunk' ? <TerminalIcon /> : <AutoModeIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            onClick={toggleTheme}
                            color="inherit"
                            sx={{ mr: 1 }}
                        >
                            {currentMode === 'cyberpunk' ? <TerminalIcon /> : <AutoModeIcon />}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
