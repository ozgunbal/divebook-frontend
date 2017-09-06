const divelist = (state = [], action) => {
    switch(action.type) {
        case 'ADD_DIVE':
            return [...state, action.dive]
        case 'EDIT_DIVE':
            const nextState = state;
            state.forEach((dive,index) => {
                if (dive.id === action.dive.id) {
                    nextState[index] = dive;
                } 
            })
            return nextState; 
        default:
            return state
    }
};

export default divelist;