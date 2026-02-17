import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ py: 3, textAlign: 'center', background: '#050f1a' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Sanjeet Kumar. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
