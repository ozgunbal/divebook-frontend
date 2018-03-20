import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog, openEditForm, toggleDiveDetail, deleteDive } from '../actions';
import { removeDive } from '../api';

const DiveCard = ({ 
    dive,
    index,
    toggleDetail,
    openEditForm,
    toggleDialog,
    deleteDive,
}) => (
    <Card style={diveDetailStyle} onClick={() => { toggleDiveDetail(index) }}>
        <CardTitle title={dive.site} subtitle={new Date(dive.date).toLocaleDateString()} />
        <CardText>Maximum Depth: {dive.meter} m Minutes: {dive.minute}" </CardText>
        <CardText>{dive.note}</CardText>
        <CardActions style={{justifyContent: "space-between"}}>
            <Button label='Edit Dive' onClick={(evt) => {
                evt.stopPropagation();
                openEditForm(dive);
                toggleDialog()
            }} />
            <Button label='Delete Dive' onClick={(evt) => {
                evt.stopPropagation();
                removeDive(dive.id)
                    .then(() => deleteDive(dive))
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
        deleteDive,
    }
)(DiveCard);

const diveDetailStyle = {
    width: '70%',
    margin: '0 auto'
};

