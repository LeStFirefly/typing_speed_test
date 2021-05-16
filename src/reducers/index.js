const initialState = {
    text: '',
    startTesting: false,
    speed: 0,
    accuracy: 100.0,
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
                startTesting: true,
                speed: 0,
                accuracy: 100.0,
            };
        case 'RESTART_TEST':
            return {
                ...state,
                speed: 0,
                accuracy: 100.0,
                startTesting: true
            };
        case 'SAVE_RESULT':
            return {
                ...state,
                speed: action.speed,
                accuracy: action.accuracy,
                startTesting: false,
            };
        default:
            return state;
    }
}

export default reducer;