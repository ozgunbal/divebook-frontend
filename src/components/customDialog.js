import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

import { toggleDialog } from '../actions';

const CustomDialog = ({ active, toggleDialog }) => (
    <Dialog
        active={active}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
        type="normal"
    >
        <DiveForm />
    </Dialog>
);

const mapStateToProps = (state) => ({
    active: state.dialog.active
});

export default connect(
    mapStateToProps,
    { toggleDialog },
)(CustomDialog);