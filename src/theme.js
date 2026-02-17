import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: 'dark',
      ...(mode === 'coding'
        ? {
          // Coding Mode (VS Code Style)
          primary: { main: '#569cd6' },
          secondary: { main: '#ce9178' },
          background: {
            default: '#1e1e1e',
            paper: '#252526',
          },
          text: {
            primary: '#d4d4d4',
            secondary: '#9cdcfe',
          },
          divider: '#3e3e42',
        }
        : {
          // Matte Cyberpunk (Soft & Flat)
          primary: { main: '#26c6da' }, // Cyan 400
          secondary: { main: '#ec407a' }, // Pink 400
          background: {
            default: '#0a1929',
            paper: '#0f2744',
          },
          text: {
            primary: '#eceff1',
            secondary: '#b0bec5',
          },
          action: {
            hover: 'rgba(38, 198, 218, 0.08)',
          },
        }),
    },
    typography: {
      fontFamily: mode === 'coding' ? '"Consolas", "Courier New", monospace' : '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        // Matte: No gradient, solid color
        background: 'none',
        color: mode === 'coding' ? '#569cd6' : '#26c6da',
        WebkitBackgroundClip: 'none',
        WebkitTextFillColor: mode === 'coding' ? '#569cd6' : '#26c6da',
        textShadow: 'none',
        '&::before': {
          content: mode === 'coding' ? '"<"' : '""',
          color: '#808080',
          marginRight: '0.2rem'
        },
        '&::after': {
          content: mode === 'coding' ? '" />"' : '""',
          color: '#808080',
          marginLeft: '0.2rem'
        }
      },
      h2: {
        fontWeight: 600,
        marginBottom: '1rem',
        color: mode === 'coding' ? '#dcdcaa' : '#ec407a',
        '&::before': {
          content: mode === 'coding' ? '"function "' : '""',
          color: '#569cd6',
          fontSize: '0.8em',
          marginRight: '0.5rem'
        },
        '&::after': {
          content: mode === 'coding' ? '"()"' : '""',
          color: '#d4d4d4',
        }
      },
      allVariants: {
        color: mode === 'coding' ? '#d4d4d4' : undefined,
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: mode === 'coding' ? 2 : 8,
            textTransform: 'none',
            fontWeight: 600,
            transition: 'all 0.3s ease-in-out',
            // Matte: Subtle border, low opacity bg
            border: mode === 'coding' ? '1px solid #3e3e42' : '1px solid rgba(38, 198, 218, 0.3)',
            background: mode === 'coding' ? '#333333' : 'rgba(38, 198, 218, 0.05)',
            backdropFilter: 'none',
            boxShadow: 'none',
            fontFamily: mode === 'coding' ? '"Consolas", monospace' : '"Outfit", sans-serif',
            '&:hover': {
              transform: 'translateY(-2px)',
              // Matte: No glow on hover, just color change
              boxShadow: mode === 'coding' ? '0 4px 10px rgba(0, 0, 0, 0.5)' : 'none',
              backgroundColor: mode === 'coding' ? '#444444' : 'rgba(38, 198, 218, 0.15)',
              border: mode === 'coding' ? '1px solid #007acc' : '1px solid rgba(38, 198, 218, 0.8)',
            },
          },
          contained: {
            // Matte: Solid color
            background: mode === 'coding'
              ? '#007acc'
              : '#00bcd4', // Solid Cyan
            color: '#fff',
            border: 'none',
            '&:hover': {
              backgroundColor: mode === 'coding' ? '#0062a3' : '#00acc1',
              boxShadow: 'none',
            }
          },
          outlined: {
            border: mode === 'coding' ? '1px solid #569cd6' : '1px solid rgba(236, 64, 122, 0.5)',
            color: mode === 'coding' ? '#569cd6' : '#ec407a',
            '&:hover': {
              border: mode === 'coding' ? '1px solid #569cd6' : '1px solid #ec407a',
              backgroundColor: mode === 'coding' ? 'rgba(86, 156, 214, 0.1)' : 'rgba(236, 64, 122, 0.1)',
              boxShadow: 'none',
            }
          }
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: mode === 'coding' ? '1px solid rgba(0, 230, 118, 0.1)' : 'none',
            boxShadow: mode === 'coding' ? '0 4px 30px rgba(0, 0, 0, 0.4)' : undefined,
          },
        },
      },
    },
  });
};

export default getTheme;
