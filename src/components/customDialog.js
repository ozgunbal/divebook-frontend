import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

import { toggleDialog } from '../actions';

let CustomDialog = ({ dispatch, active }) => (
    <Dialog
        active={active}
        onEscKeyDown={() => { dispatch(toggleDialog())}}
        onOverlayClick={() => { dispatch(toggleDialog())}}
        type="normal"
    >
        <DiveForm />
    </Dialog>
);

const mapStateToProps = (state) => ({
    active: state.dialog.active
})

CustomDialog = connect(
    mapStateToProps
)(CustomDialog);

export default CustomDialog;