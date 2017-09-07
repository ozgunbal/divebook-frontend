import { combineReducers } from 'redux';

const active = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_DIALOG':
            return !state;
        default:
            return state;
    }
}

const placeholder = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_DIVE':
            return {};
        case 'OPEN_EDIT_DIALOG':
            return Object.assign({}, action.dive);
        default:
            return state
    }
}

const dialog = combineReducers({
    active,
    placeholder
});

export default dialog;