const divelist = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_DIVES':
            return action.dives;
        case 'ADD_DIVE':
            return [...state, action.dive]
        case 'EDIT_DIVE':
            const editIdx = getDiveIndexById(state, action.dive.id);
            return [
                ...state.slice(0, editIdx),
                action.dive,
                ...state.slice(editIdx + 1)
            ];
        case 'DELETE_DIVE':
            const deleteIdx = getDiveIndexById(state, action.dive.id);
            return [
                ...state.slice(0, deleteIdx),
                ...state.slice(deleteIdx + 1)
            ];
        default:
            return state
    }
};

const getDiveIndexById = (state, id) => (
    state.findIndex(dive => dive.id === id)
) 

export default divelist;