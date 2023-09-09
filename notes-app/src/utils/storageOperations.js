export const getAllStorageNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

export const setStorageNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// const square = (num) => {
//     console.log(num * num)
// }

// square(12)