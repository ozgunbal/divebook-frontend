import store from '../configureStore';

export const addDive = (dive) => {
    store.dispatch({
        type: 'ADD_DIVE',
        dive
    });
}

export const editDive = (dive) => {
    console.log('edit Dive:');
    console.log(dive);
    store.dispatch({
        type: 'EDIT_DIVE',
        dive
    });
}

export const toggleDialog = () => {
    store.dispatch({
        type: 'TOGGLE_DIALOG'
    })
}

export const openEditDialog = (dive) => {
    store.dispatch({
        type: 'OPEN_EDIT_DIALOG',
        dive
    });
    store.dispatch({
        type: 'TOGGLE_DIALOG'
    });
} 