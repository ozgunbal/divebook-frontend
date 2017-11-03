import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

import { toggleDialog } from '../actions';

const CustomDialog = ({ active, toggle }) => (
    <Dialog
        active={active}
        onEscKeyDown={toggle}
        onOverlayClick={toggle}
        type="normal"
    >
        <DiveForm />
    </Dialog>
);

const mapStateToProps = (state) => ({
    active: state.dialog.active
});

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleDialog())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomDialog);