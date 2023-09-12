export const capitalize = (text = '') => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const generateId = () => {
    return Math.floor(Math.random() * 1000000000000000)
}