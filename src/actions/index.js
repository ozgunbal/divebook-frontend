export const addDive = (dive) => (dispatch) => {
    dispatch({
        type: 'ADD_DIVE',
        dive
    });
}

export const editDive = (dive) => (dispatch) => {
    dispatch({
        type: 'EDIT_DIVE',
        dive
    });
}

export const toggleDialog = () => (dispatch) => {
    dispatch({
        type: 'TOGGLE_DIALOG'
    })
};

export const openAddForm = () => (dispatch) => {
    dispatch({
        type: 'OPEN_ADD_FORM',
    });
}


export const openEditForm = (dive) => (dispatch) => {
    dispatch({
        type: 'OPEN_EDIT_FORM',
        dive
    });
    toggleDialog();
}

export const toggleDiveDetail = (index) => (dispatch) => {
    dispatch({
        type: 'TOGGLE_DISPLAY',
        index
    })
}

export const receiveDives = (dives) => (dispatch) => {
    dispatch({
        type: 'RECEIVE_DIVES',
        dives,
    })
}

export const setLogout = () => (dispatch) => {
    console.log("set logout");
    dispatch({
        type: 'LOGGED_OUT'
    })
}

export const setLogin = () => (dispatch) => {
    dispatch({
        type: 'LOGGED_IN'
    })
}