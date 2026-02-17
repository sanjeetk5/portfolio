import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    const theme = useTheme();

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <Box id="contact" sx={{ py: 10, background: theme.palette.background.paper, position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            }} />

            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            letterSpacing: 2,
                            color: theme.palette.text.primary
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 6 }}>
                        Ready to start a new game? Send me a message.
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={formVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                                '&:hover fieldset': { borderColor: theme.palette.primary.main, boxShadow: `0 0 10px ${theme.palette.primary.main}` },
                                                '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                                            }
                                        }}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                                '&:hover fieldset': { borderColor: theme.palette.primary.main, boxShadow: `0 0 10px ${theme.palette.primary.main}` },
                                                '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                                            }
                                        }}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                                '&:hover fieldset': { borderColor: theme.palette.primary.main, boxShadow: `0 0 10px ${theme.palette.primary.main}` },
                                                '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                                            }
                                        }}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        sx={{
                                            mt: 2,
                                            width: '100%',
                                            py: 1.5,
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            boxShadow: `0 0 15px ${theme.palette.secondary.main}80`
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" gutterBottom color="textPrimary" sx={{ fontWeight: 600 }}>
                                CONNECT WITH ME
                            </Typography>
                            <Box>
                                <IconButton
                                    component={motion.button}
                                    whileHover={{ scale: 1.2, color: theme.palette.primary.main }}
                                    color="primary"
                                    href="https://github.com"
                                    target="_blank"
                                    size="large"
                                >
                                    <GitHubIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton
                                    component={motion.button}
                                    whileHover={{ scale: 1.2, color: theme.palette.primary.main }}
                                    color="primary"
                                    href="https://linkedin.com"
                                    target="_blank"
                                    size="large"
                                >
                                    <LinkedInIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton
                                    component={motion.button}
                                    whileHover={{ scale: 1.2, color: theme.palette.primary.main }}
                                    color="primary"
                                    href="https://twitter.com"
                                    target="_blank"
                                    size="large"
                                >
                                    <TwitterIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton
                                    component={motion.button}
                                    whileHover={{ scale: 1.2, color: theme.palette.primary.main }}
                                    color="primary"
                                    href="mailto:email@example.com"
                                    size="large"
                                >
                                    <EmailIcon fontSize="inherit" />
                                </IconButton>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
