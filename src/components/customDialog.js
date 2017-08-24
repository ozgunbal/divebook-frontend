import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

function CustomDialog(props){
    const formHandler = props.placeholder.site? props.changeDive : props.addDive;

    return (
        <Dialog
        active={props.active}
        onEscKeyDown={props.handleToggle}
        onOverlayClick={props.handleToggle}
        type="normal"
      >
        <DiveForm formHandler={formHandler} toggle={props.handleToggle} placeholder = {props.placeholder} />
      </Dialog>
    );
}

export default CustomDialog;