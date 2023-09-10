export const getAllStorageNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

export const setStorageNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

export const makeNoteFavorite = (index) => {
    let allNotes = getAllStorageNotes();

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