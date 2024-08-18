import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { TextField, Button, Box } from '@mui/material';

const EditLabel = ({ label }) => {
    const { editLabel } = useContext(DataContext);
    const [newLabelName, setNewLabelName] = useState(label.name);

    const handleEdit = () => {
        editLabel(label.id, newLabelName);
    };

    return (
        <Box>
            <TextField
                label="Edit Label"
                value={newLabelName}
                onChange={(e) => setNewLabelName(e.target.value)}
            />
            <Button onClick={handleEdit} variant="contained" color="primary">
                Save
            </Button>
        </Box>
    );
};

export default EditLabel;
