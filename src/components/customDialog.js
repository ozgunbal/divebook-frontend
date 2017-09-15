import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

import { addDive, editDive, toggleDialog } from '../actions';
import store from '../configureStore';

const CustomDialog = () => {
    const formHandler = store.getState().dialog.placeholder.site? editDive : addDive;

    return (
        <Dialog
        active={store.getState().dialog.active}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
        type="normal"
      >
        <DiveForm formHandler={formHandler}/>
      </Dialog>
    );
}

export default CustomDialog;