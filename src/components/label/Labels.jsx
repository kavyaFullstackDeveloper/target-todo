import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import Note from '../notes/Note'; // Reuse the Note component

const Labels = () => {
    const { label } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <Grid container>
                    {
                        label.map(note => (
                            <Grid item key={note.id}>
                                <Note note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default Labels;
