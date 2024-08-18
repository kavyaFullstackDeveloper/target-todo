import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete, Label } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';


const StyledCard = styled(Card)(({ theme }) => ({
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    width: '100%', // Allow the card to take up full width on small screens
    maxWidth: '240px', // Set the maximum width for larger screens
    margin: '8px',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        width: '100%', // Full width on small screens
        margin: '8px 0', // Adjust margin for smaller screens
    },
}));

const Note = ({ note }) => {
    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes, setLabelNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    };

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    };

    const LabelNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setLabelNotes(prevArr => [note, ...prevArr]);
    };

    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {note.heading}
                </Typography>
                <Typography variant="body2">
                    {note.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Archive
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <Delete
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
                <Label
                    fontSize="small"
                    onClick={() => LabelNote(note)}
                />
            </CardActions>
        </StyledCard>
    );
};

export default Note;
