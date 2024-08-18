import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
    const [archiveNotes, setAcrchiveNotes] = useState(() => JSON.parse(localStorage.getItem('archiveNotes')) || []);
    const [deleteNotes, setDeleteNotes] = useState(() => JSON.parse(localStorage.getItem('deleteNotes')) || []);
    const [labelNotes, setLabelNotes] = useState(() => JSON.parse(localStorage.getItem('labelNotes')) || []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('archiveNotes', JSON.stringify(archiveNotes));
        localStorage.setItem('deleteNotes', JSON.stringify(deleteNotes));
        localStorage.setItem('labelNotes', JSON.stringify(labelNotes));
    }, [notes, archiveNotes, deleteNotes, labelNotes]);

    const editLabel = (labelId, newLabelName) => {
        const updatedLabels = labelNotes.map(label =>
            label.id === labelId ? { ...label, name: newLabelName } : label
        );
        setLabelNotes(updatedLabels);
    };

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deleteNotes,
            setDeleteNotes,
            labelNotes,
            setLabelNotes,
            editLabel
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
