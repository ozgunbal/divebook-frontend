const divelist = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_DIVES':
            return action.dives;
        case 'ADD_DIVE':
            return [...state, action.dive]
        case 'EDIT_DIVE':
            return [
                ...state.slice(0, action.dive.id),
                action.dive,
                ...state.slice(action.dive.id + 1)
            ];
        default:
            return state
    }
};

export default divelist;