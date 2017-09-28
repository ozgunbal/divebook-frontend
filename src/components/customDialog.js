import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

import { toggleDialog } from '../actions';
import store from '../configureStore';

const CustomDialog = () => (
    <Dialog
        active={store.getState().dialog.active}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
        type="normal"
    >
        <DiveForm />
    </Dialog>
);

export default CustomDialog;