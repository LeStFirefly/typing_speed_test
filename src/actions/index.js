const loadText = (text) => {
    return {
        type: 'TEXT_LOADED',
        payload: text
    }
}

export {
    loadText
}