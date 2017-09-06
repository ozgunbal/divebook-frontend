import { combineReducers } from 'redux';

const dialog = () => {

    const active = (state = false, action) => {
        switch (action.type) {
            case 'OPEN_EDIT_DIALOG':
            case 'OPEN_ADD_DIALOG':
                return true;
            case 'CLOSE_EDIT_DIALOG':
            case 'CLOSE_ADD_DIALOG':
                return false;
            default:
                return state;
        }
    }

    const placeholder = (state = {}, action) => {
        switch (action.type) {
            case 'CLOSE_EDIT_DIALOG':
            case 'CLOSE_ADD_DIALOG':
            case 'OPEN_ADD_DIALOG':
                return {};
            case 'OPEN_EDIT_DIALOG':
                return Object.assing({}, action.dive);
            default:
                return state
        }
    }

    return combineReducers({
        active,
        placeholder
    })
};

export default dialog;