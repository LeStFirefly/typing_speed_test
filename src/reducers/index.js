const initialState = {
    text: '',
    startTesting: false,
    speed: 0,
    accuracy: 100,
    startTime: 0,
    actualTime: 0,
    score: 0
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
                accuracy: 0,
                startTime: new Date()
            };
        case 'RESTART_TEST':
            return {
                ...state,
                speed: 0,
                accuracy: 0,
            };
        default:
            return state;
    }
}

export default reducer;