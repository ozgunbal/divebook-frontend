import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './diveForm';

const CustomDialog = ({
  active,
  placeholder,
  changeDive,
  addDive,
  handleToggle
}) => {
    const formHandler = placeholder.site? changeDive : addDive;

    return (
        <Dialog
        active={active}
        onEscKeyDown={handleToggle}
        onOverlayClick={handleToggle}
        type="normal"
      >
        <DiveForm formHandler={formHandler} toggle={handleToggle} placeholder = {placeholder} />
      </Dialog>
    );
}

export default CustomDialog;