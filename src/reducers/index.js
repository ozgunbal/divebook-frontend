import { combineReducers } from 'redux';
import divelist from './divelist';
import dialog from './dialog';
import diveDisplay from './dive';
import isLoggedIn from './login';

const dives = combineReducers({
    divelist,
    diveDisplay,
    dialog,
    isLoggedIn,
});

export default dives;

export const getDiveToEdit = (state) => {
    const id = state.diveDisplay;
    return state.divelist.filter(dive => dive.id === id)[0];
}