import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useMediaQuery } from '@mui/material';

import { DataContext } from '../../context/DataProvider';
import { reorder } from '../../utils/common-utils';

// components
import Form from './Form';
import Note from './Note';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: isSmallScreen ? 2 : 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  spacing={isSmallScreen ? 2 : 3}
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes.map((note, index) => (
                    <Draggable key={note.id} draggableId={note.id} index={index}>
                      {(provided, snapshot) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Note note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
