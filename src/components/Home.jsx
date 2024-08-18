import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

//components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';

const Home = () => {
    // Use useMediaQuery to apply styles based on screen size
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');

    return (
        <Box 
            style={{ 
                display: 'flex', 
                width: '100%', 
                flexDirection: isMobile ? 'column' : 'row'  // Stack components vertically on mobile
            }}
        >
            <Router>
                <SwipeDrawer />
                <Box 
                    style={{ 
                        flexGrow: 1, 
                        padding: isMobile ? '8px' : '16px', // Adjust padding for different screen sizes
                        marginLeft: isMobile ? 0 : '240px', // Adjust margin for drawer on desktop
                    }}
                >
                    <Routes>        
                        <Route path='/' element={<Notes />} />
                        <Route path='/archive' element={<Archives />} />
                        <Route path='/delete' element={<DeleteNotes />} /> 
                    </Routes>
                </Box>
            </Router>
        </Box>
    )
}

export default Home;
