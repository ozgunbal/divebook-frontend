import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog, openEditForm, toggleDiveDetail } from '../actions';

const DiveCard = ({ 
    dive,
    index,
    toggleDetail,
    openEditForm,
    toggleDialog,
}) => (
    <Card style={diveDetailStyle} onClick={() => { toggleDiveDetail(index) }}>
        <CardTitle title={dive.site} subtitle={new Date(dive.date).toLocaleDateString()} />
        <CardText>Maximum Depth: {dive.meter} m Minutes: {dive.minute}" </CardText>
        <CardText>{dive.notes}</CardText>
        <CardActions>
            <Button label='Edit Dive' onClick={(evt) => {
                console.log("Edit dive");
                evt.stopPropagation();
                openEditForm(dive);
                toggleDialog()
            }} />
        </CardActions>
    </Card>
);

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
});

export default connect(
    mapStateToProps,
    {
        toggleDiveDetail,
        toggleDialog,
        openEditForm,
    }
)(DiveCard);

const diveDetailStyle = {
    width: '70%',
    margin: '0 auto'
};

