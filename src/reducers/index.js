const initialState = {
    text: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEXT_LOADED':
            return {
                ...state,
                text: action.payload
            };
    
        default:
            return state;
    }
}

export default reducer;