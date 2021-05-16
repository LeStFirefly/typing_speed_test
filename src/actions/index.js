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

const updateStatistic = (speed, accuracy) => {
    return {
        type: 'UPDATE_STATISTIC',
        speed,
        accuracy: accuracy<0 ? 0 : accuracy
    }
}

const updateStartTime = (time) => {
    return {
        type: 'UPDATE_START_TIME',
        time
    }
}

const updateActualTime = (time) => {
    return {
        type: 'UPDATE_ACTUAL_TIME',
        time
    }
}

const setCurrentLetter = (letter) => {
    return {
        type: 'SET_CURRENT_LETTER',
        letter
    }
}

const addMistake = (mistake) => {
    return {
        type: 'ADD_MISTAKE',
        mistake
    }
}

const setFalse = () => {
    return {
        type: 'SET_FALSE',
    }
}

export {
    loadText,
    startTest,
    restartTest,
    updateStatistic,
    updateStartTime,
    updateActualTime,
    setCurrentLetter,
    addMistake,
    setFalse
}