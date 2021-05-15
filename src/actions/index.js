const loadText = (text) => {
    return {
        type: 'TEXT_LOADED',
        payload: text
    }
}

const startTest = () => {
    return {
        type: 'START_TEST',
    }
}

const restartTest = () => {
    return {
        type: 'RESTART_TEST',
    }
}

export {
    loadText,
    startTest,
    restartTest
}