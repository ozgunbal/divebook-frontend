import store from '../configureStore';

export const addDive = (dive) => {
    store.dispatch({
        type: 'ADD_DIVE',
        dive
    });
}

export const editDive = (dive) => {
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

export const openAddForm = () => {
    store.dispatch({
        type: 'OPEN_ADD_FORM',
    });
    toggleDialog()
}

export const openEditForm = (dive) => {
    store.dispatch({
        type: 'OPEN_EDIT_FORM',
        dive
    });
    toggleDialog();
}

export const toggleDiveDetail = (index) => {
    store.dispatch({
        type: 'TOGGLE_DISPLAY',
        index
    })
}