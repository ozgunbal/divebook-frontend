import { combineReducers } from 'redux';

const active = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_DIALOG':
            return !state;
        default:
            return state;
    }
}

const formType = (state = null, action) => {
    switch (action.type) {
        case 'EDIT_DIVE':
        case 'ADD_DIVE':
            return null;
        case 'OPEN_EDIT_FORM':
            return 'edit';
        case 'OPEN_ADD_FORM':
            return 'add';
        default:
            return state
    }
}

const dialog = combineReducers({
    active,
    formType
});

export default dialog;