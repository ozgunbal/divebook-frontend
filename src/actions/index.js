import store from '../configureStore';

export const addDive = (dive) => {
    store.dispatch({
        type: 'ADD_DIVE',
        dive: dive
    });
}

export const editDive = (dive) => {
    store.dispatch({
        type: 'EDIT_DIVE',
        dive: dive
    });
}