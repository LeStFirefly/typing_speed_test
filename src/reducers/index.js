const initialState = {
    text: '',
    startTesting: false,
    speed: 0,
    accuracy: '100.0',
    currentLetter: 0,
    startTime: 0,
    actualTime: 0,
    mistake: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEXT_LOADED':
            return {
                ...state,
                text: action.payload
            };
        case 'START_TEST':
            return {
                ...state,
                startTesting: true
            };
        case 'RESTART_TEST':
            return {
                ...state,
                speed: 0,
                accuracy: '100.0',
                mistake: 0,
                currentLetter: 0,
                startTesting: false
            };
        case 'UPDATE_STATISTIC':
            return {
                ...state,
                speed: action.speed,
                accuracy: action.accuracy,
            };
        case 'UPDATE_START_TIME':
            return {
                ...state,
                startTime: action.time
            };
        case 'UPDATE_ACTUAL_TIME':
            return {
                ...state,
                actualTime: action.time
            };
        case 'SET_CURRENT_LETTER':
            return {
                ...state,
                currentLetter: action.letter
            };
        case 'ADD_MISTAKE':
            return {
                ...state,
                mistake: action.mistake
            };
        case 'SET_FALSE':
            return {
                ...state,
                startTesting: false
            };
        default:
            return state;
    }
}

export default reducer;