import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

// components
import LabelItem from './LabelItem';
import EditLabel from './EditLabel';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Labels = () => {

    const { labelNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        labelNotes.map(label => (
                            <Grid item key={label.id}>
                                <LabelItem label={label} />
                                <EditLabel label={label} /> 
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Labels;
