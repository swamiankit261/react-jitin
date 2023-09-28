export const capitalize = (text = '') => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const generateId = () => {
    return Math.floor(Math.random() * 1000000000000000)
}

export const getCurrentTime = () => {
    return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
}

export const getCurrentDate = () => {
    return new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()
}