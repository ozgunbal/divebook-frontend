const diveDisplay = (state = null, action) => {
    switch(action.type) {
        case 'TOGGLE_DISPLAY':
            if(state === action.index) {
                return null
            } else {
                return action.index
            }
        default:
            return state;
    }
}

export default diveDisplay;