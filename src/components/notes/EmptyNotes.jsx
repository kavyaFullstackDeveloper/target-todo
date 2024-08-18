import { LightbulbOutlined as Lightbulb } from '@mui/icons-material';
import { Typography, Box, styled } from '@mui/material';

// Responsive Lightbulb icon style
const Light = styled(Lightbulb)(({ theme }) => ({
    fontSize: '80px', // Default size for smaller screens
    color: '#F5F5F5',
    [theme.breakpoints.up('sm')]: {
        fontSize: '100px', // Medium screens
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '120px', // Large screens
    },
}));

// Responsive text style
const Text = styled(Typography)(({ theme }) => ({
    color: '#80868b',
    fontSize: '16px', // Default size for smaller screens
    [theme.breakpoints.up('sm')]: {
        fontSize: '18px', // Medium screens
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '22px', // Large screens
    },
}));

// Responsive container style
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15vh', // Default margin for smaller screens
    [theme.breakpoints.up('sm')]: {
        marginTop: '20vh', // Medium screens
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '25vh', // Large screens
    },
}));

const EmptyNotes = () => {
    return (
        <Container>
            <Light />
            <Text>Notes you add appear here</Text>
        </Container>
    );
};

export default EmptyNotes;
