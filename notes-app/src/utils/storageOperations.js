import { generateId } from "./utilityFunction";

export const createNote = (note) => {
    note.id = generateId()
    setStorageNotes(getAllStorageNotes().concat(note));
}

export const updateNote = (note, index) => {
    const allNotes = getAllStorageNotes();
    allNotes[index] = note;
    setStorageNotes(allNotes);
}

export const getAllStorageNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

export const getUndeletedNotes = () => {
    return getAllStorageNotes().filter(note => !note.isDeleted);
}

export const getDeletedNotes = () => {
    return getAllStorageNotes().filter(note => note.isDeleted);
}

export const setStorageNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

export const makeNoteFavorite = (id) => {
    let allNotes = getAllStorageNotes();
    const index = allNotes.findIndex((note) => note.id === id);

    if (!!allNotes[index].favroite) {
        allNotes[index].favroite = false;
    } else {
        allNotes[index].favroite = true;
    }
    setStorageNotes(allNotes);
}

export const getFavroiteNotes = () => {
    return getAllStorageNotes().filter(e => e.favroite)
}

// This function makes a note pinned or unpinned
export const makeNotePinned = (id) => {
    let allPinndNotes = getAllStorageNotes();
    
    const index = allPinndNotes.findIndex((note) => note.id === id)

    if (!!allPinndNotes[index].Pinned) {

        allPinndNotes[index].Pinned = false;
    } else {
        allPinndNotes[index].Pinned = true;
    }
    setStorageNotes(allPinndNotes)
}

export const getPinnedNotes = () => {
    return getAllStorageNotes().filter(e => e.Pinned)
}

export const moveToRecyleBin = (id) => {
    let notes = getAllStorageNotes();

    notes.forEach((note, i) => {
        if (note.id === id) {
            notes[i].isDeleted = true;
        }
    })

    setStorageNotes(notes);
}

export const restoreNote = (id) => {
    let notes = getAllStorageNotes();

    notes.forEach((note, i) => {
        if (note.id === id) {
            notes[i].isDeleted = false;
        }
    })

    setStorageNotes(notes);
}