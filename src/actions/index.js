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

const saveResult = (speed, accuracy) => {
    return {
        type: 'SAVE_RESULT',
        speed,
        accuracy
    }
}

export {
    loadText,
    startTest,
    restartTest,
    saveResult
}